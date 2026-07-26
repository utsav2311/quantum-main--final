#!/usr/bin/env bash
set -e

echo "======================================================="
echo "        Quantum EME Production Deployment Script       "
echo "======================================================="

# Check if domain parameter is provided
DOMAIN=$1
EMAIL=$2

if [ -z "$DOMAIN" ]; then
    echo "Usage: ./deploy.sh <your-domain.com> [your-email@example.com]"
    echo "Example: ./deploy.sh app.mydomain.com admin@mydomain.com"
    exit 1
fi

echo "Domain targeted: $DOMAIN"

# Check Docker installation
if ! command -v docker &> /dev/null; then
    echo "[!] Docker is not installed. Installing Docker..."
    curl -fsSL https://get.docker.com | sh
    sudo usermod -aG docker $USER
fi

if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "[!] Docker Compose plugin missing. Installing..."
    sudo apt-get update && sudo apt-get install -y docker-compose-plugin
fi

# Update CORS_ORIGINS in backend/.env if needed
if [ -f "backend/.env" ]; then
    sed -i "s|CORS_ORIGINS=.*|CORS_ORIGINS=https://$DOMAIN,http://$DOMAIN|g" backend/.env || true
fi

# Configure Nginx domain name
sed -i "s/server_name localhost _;/server_name $DOMAIN www.$DOMAIN;/g" nginx/default.conf || true

echo "[+] Building and starting Docker containers..."
docker compose build --no-cache
docker compose up -d

echo "[+] Service deployment complete!"
echo "[+] Frontend & Backend reverse proxy running on port 80."
echo ""
if [ -n "$EMAIL" ]; then
    echo "[+] Obtaining SSL Certificate for $DOMAIN..."
    sudo apt-get update && sudo apt-get install -y certbot python3-certbot-nginx || true
    sudo certbot --nginx -d "$DOMAIN" --non-interactive --agree-tos -m "$EMAIL" || echo "[!] SSL setup via certbot can be finalized manually once DNS is pointed."
fi

echo "======================================================="
echo " Deployment Complete! Access your app at: http://$DOMAIN"
echo "======================================================="

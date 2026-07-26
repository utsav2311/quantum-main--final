# Stage 1: Build React static assets
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* yarn.lock* ./
RUN npm install --legacy-peer-deps

COPY . .

# Build argument for backend URL (can be relative in production proxy setup)
ARG REACT_APP_BACKEND_URL=""
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

RUN npm run build

# Stage 2: Serve via Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

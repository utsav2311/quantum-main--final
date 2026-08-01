export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://quantumuae.ae";

  const routes = [
    "",
    "/about",
    "/b2b-innovation-hub",
    "/contact-us",
    "/products",
    "/spine-back-braces",
    "/custom-orthotic-insoles-footwear",
    "/lower-limb-prosthetics",
    "/upper-limb-prosthetics",
    "/sockets-liners",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

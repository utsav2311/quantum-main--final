import { DEVICES } from "@/lib/site";

export default function sitemap() {
  const baseUrl = "https://quantumuae.ae";

  const staticRoutes = [
    { route: "", priority: 1.0, changeFrequency: "daily" },
    { route: "/products", priority: 0.9, changeFrequency: "daily" },
    { route: "/about", priority: 0.8, changeFrequency: "weekly" },
    { route: "/contact-us", priority: 0.8, changeFrequency: "weekly" },
    { route: "/b2b-innovation-hub", priority: 0.8, changeFrequency: "weekly" },
    { route: "/terms", priority: 0.5, changeFrequency: "monthly" },
  ];

  const deviceRoutes = DEVICES.map((d) => ({
    route: `/${d.slug}`,
    priority: 0.85,
    changeFrequency: "weekly",
  }));

  const allRoutes = [...staticRoutes, ...deviceRoutes];

  return allRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  }));
}

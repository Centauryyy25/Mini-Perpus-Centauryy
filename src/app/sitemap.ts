import type { MetadataRoute } from "next";

const BASE_URL = "https://mini-library-centauryy.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}

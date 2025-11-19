import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://222-nuve.vercel.app",
      lastModified: new Date(),
    },
  ];
}

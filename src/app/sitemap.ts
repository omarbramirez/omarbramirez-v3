import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://omarbramirez.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://omarbramirez.com/en',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://omarbramirez.com/es',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ];
}

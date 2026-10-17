import type { MetadataRoute } from 'next';
import { websiteUrl } from '@/lib/seo';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
  },
  ...(websiteUrl && { sitemap: `${websiteUrl}/sitemap.xml` }),
});

export default robots;

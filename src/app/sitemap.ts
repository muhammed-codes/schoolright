import type { MetadataRoute } from 'next';
import { audiences, features } from '@/lib/content';
import { websiteUrl } from '@/lib/seo';

const staticRoutes = [
  '/',
  '/features',
  '/solutions',
  '/product-tour',
  '/how-it-works',
  '/pricing',
  '/about',
  '/contact',
];

const sitemap = (): MetadataRoute.Sitemap => {
  if (!websiteUrl) return [];

  const featureRoutes = features.map(({ slug }) => `/features/${slug}`);
  const solutionRoutes = audiences.map(({ slug }) => `/solutions/${slug}`);

  return [...staticRoutes, ...featureRoutes, ...solutionRoutes].map((route) => ({
    url: new URL(route, websiteUrl).toString(),
  }));
};

export default sitemap;

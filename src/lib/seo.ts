import type { Metadata } from 'next';

const getWebsiteUrl = () => {
  const configuredUrl = process.env.NEXT_PUBLIC_SCHOOLRIGHT_WEBSITE_URL;
  if (!configuredUrl) return undefined;

  try {
    return new URL(configuredUrl).origin;
  } catch {
    return undefined;
  }
};

export const websiteUrl = getWebsiteUrl();

export const websiteMetadataBase = websiteUrl ? new URL(websiteUrl) : undefined;

export const createWebsiteMetadata = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata => ({
  title,
  description,
  ...(websiteMetadataBase && { alternates: { canonical: path } }),
  openGraph: {
    title,
    description,
    ...(websiteUrl && { url: new URL(path, websiteUrl).toString() }),
    siteName: 'SchoolRight',
    type: 'website',
    ...(websiteMetadataBase && { images: ['/images/dashboard.png'] }),
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    ...(websiteMetadataBase && { images: ['/images/dashboard.png'] }),
  },
});

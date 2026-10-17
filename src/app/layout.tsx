import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer, WhatsAppFloat } from '@/components/site';
import { websiteMetadataBase } from '@/lib/seo';

export const metadata: Metadata = {
  ...(websiteMetadataBase && { metadataBase: websiteMetadataBase }),
  title: {
    default: 'School Management Software for Schools',
    template: '%s | SchoolRight',
  },
  description: 'Explore SchoolRight school management software for student records, attendance, fees, academics and everyday school administration. Request a product walkthrough.',
  applicationName: 'SchoolRight',
  keywords: [
    'school management software',
    'school administration software',
    'student records management',
    'school attendance management',
    'school fee management',
  ],
  openGraph: {
    title: 'SchoolRight | School Management Software',
    description: 'A clearer way to manage student records, attendance, fees and school administration.',
    siteName: 'SchoolRight',
    type: 'website',
    ...(websiteMetadataBase && { images: ['/images/dashboard.png'] }),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SchoolRight | School Management Software',
    description: 'A clearer way to manage student records, attendance, fees and school administration.',
    ...(websiteMetadataBase && { images: ['/images/dashboard.png'] }),
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/><WhatsAppFloat/></body></html>}

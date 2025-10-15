import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'
  ),
  title: "The Business Brief | A Panel Discussion Presented by Deksia",
  description: "Three experts. One topic. Real answers. Monthly panel discussions covering growth, sales, talent, marketing, operations, finance, and tech.",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "The Business Brief | A Panel Discussion Presented by Deksia",
    description: "Three experts. One topic. Real answers. Monthly panel discussions covering growth, sales, talent, marketing, operations, finance, and tech.",
    images: [
      {
        url: '/FeaturedImage.png',
        width: 1200,
        height: 630,
        alt: 'The Business Brief - A Panel Discussion',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Business Brief | A Panel Discussion Presented by Deksia",
    description: "Three experts. One topic. Real answers. Monthly panel discussions covering growth, sales, talent, marketing, operations, finance, and tech.",
    images: ['/FeaturedImage.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dyl6hpw.css" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

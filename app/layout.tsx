import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Business Brief | A Panel Discussion Presented by Deksia",
  description: "Three experts. One topic. Real answers. Monthly panel discussions covering growth, sales, talent, marketing, operations, finance, and tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/dyl6hpw.css" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

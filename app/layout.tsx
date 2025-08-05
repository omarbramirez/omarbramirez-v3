import type { Metadata } from "next";
import { IBM_Plex_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";

export const ibm = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // según tus necesidades
  display: 'swap',
});

export const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Omar Ramírez",
  description: "Desarrollador web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${ibm.className} ${garamond.className} antialiased`}>

        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { IBM_Plex_Sans, EB_Garamond } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import {routing} from '../../i18n/routing';
import { ibm, garamond } from "../../fonts/index";

// export const ibm = IBM_Plex_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '700'], 
//   display: 'swap',
// });

// export const garamond = EB_Garamond({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: "Omar B Ramirez",
  description: "Desarrollador web",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: Promise<{locale: string}>
}){
  const {locale} = await params;
  if(!hasLocale(routing.locales, locale)){
  }
  return(
    <html lang={locale} className="scroll-smooth">
      <body className={`${ibm.className} ${garamond.className} antialiased leading-8 overflow-x-hidden`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}



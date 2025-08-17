import type { Metadata } from "next";
import { IBM_Plex_Sans, EB_Garamond } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import {routing} from '../../i18n/routing';
import { ibm, garamond } from "../../fonts/index";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  // Solo permitir español, en caso contrario usar inglés
  const currentLocale = locale === "es" ? "es" : "en";

  if (!hasLocale(routing.locales, currentLocale)) {
    notFound();
  }

  return (
    <html lang={currentLocale} className="scroll-smooth">
      <body
        className={`${ibm.className} ${garamond.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <NextIntlClientProvider locale={currentLocale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}



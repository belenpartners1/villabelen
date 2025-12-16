import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const metadataByLocale = {
    tr: {
      title: "Villa Belen",
      description: "Beytepe Satılık Villa - Beytepe Villa Satılık - Satılık Villa Beytepe - Satılık Beytepe Villa - Villa Satılık Beytepe - Villa Beytepe Satılık - Ankara - Turkey",
      keywords: "beytepe satılık villa, beytepe villa satılık , satılık villa beytepe  , satılık beytepe villa , villa satılık beytepe , villa satılık beytepe ,satılık villa , villa belen , belen , belen&partners , belen and partners, ankara ",
    },
    en: {
      title: "Villa Belen",
      description: "Beytepe Villa for Sale - Villa for Sale Beytepe - Villa Beytepe for Sale - Ankara - Turkey",
      keywords: "beytepe villa for sale, villa for sale beytepe, villa belen, belen, belen&partners, belen and partners, ankara",
    },
    ar: {
      title: "فيلا بيلين",
      description: "فيلا للبيع بيتيبي - فيلا بيتيبي للبيع - أنقرة - تركيا",
      keywords: "فيلا للبيع بيتيبي، فيلا بيتيبي، فيلا بيلين، بيلين وشركاه، أنقرة",
    }
  };

  const meta = metadataByLocale[locale] || metadataByLocale.tr;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    icons: {
      icon: [{ url: "/belenfav.png", type: "image/png" }],
      shortcut: "/favicon.ico",
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.villabelen.com/${locale}`,
      siteName: "Villa Belen",
      locale: locale === 'tr' ? 'tr_TR' : locale === 'ar' ? 'ar_AR' : 'en_US',
      type: "website",
    },
    alternates: {
      canonical: `https://www.villabelen.com/${locale}`,
      languages: {
        'tr': 'https://www.villabelen.com/tr',
        'en': 'https://www.villabelen.com/en',
        'ar': 'https://www.villabelen.com/ar',
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

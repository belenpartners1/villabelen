import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Villa Belen",
  icons: {
    icon: [{ url: "/belenfav.png", type: "image/png" }],
    shortcut: "/favicon.ico", // tarayıcı sekmelerinde standart
  },
  description:
    "Beytepe Satılık Villa - Beytepe Villa Satılık - Satılık Villa Beytepe - Satılık Beytepe Villa - Villa Satılık Beytepe - Villa Beytepe Satılık - Ankara - Turkey",
  keywords:
    "beytepe satılık villa, beytepe villa satılık , satılık villa beytepe  , satılık beytepe villa , villa satılık beytepe , villa satılık beytepe ,satılık villa , villa belen , belen , belen&partners , belen and partners, ankara ",
  openGraph: {
    title: "Villa Belen",
    description:
      "Beytepe Satılık Villa - Beytepe Villa Satılık - Satılık Villa Beytepe - Satılık Beytepe Villa - Villa Satılık Beytepe - Villa Beytepe Satılık - Ankara - Turkey",
    url: "https://www.villabelen.com",
    siteName: "Villa Belen",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.villabelen.com",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" favicon="/favicon.png">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

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
  description: " Villa Belen - Beytepe, Ankara, Turkey",
  keywords:
    "villa belen , belen , belen&partners , belen and partners , villa, lüks, mimarlık, iç mimarlık, mimar,mimari , mimari dizayn , Ankara satılık villa, Beytepe villa, Satılık villa Ankara, Beytepe satılık villa, Ankara lüks villa, Ankara villa, Villa Beytepe, Lüks villa Beytepe, Satılık ev Beytepe, Ankara Beytepe villa, Ankara Beytepe satılık lüks villalar, Beytepe’de satılık havuzlu villa, Ankara Beytepe manzaralı satılık villa, Beytepe’de bahçeli satılık villalar, Ankara Beytepe sıfır satılık villa, Beytepe güvenlikli site içinde satılık villa, Ankara’nın en güzel villaları Beytepe’de, Beytepe Ankara satılık modern villalar, Beytepe’de geniş bahçeli villa almak, Beytepe’de satılık tripleks villalar, Beytepe satılık villa fiyatları, Ankara Beytepe villa ilanları, Beytepe’de yeni projeden satılık villa, Beytepe prestijli konumda satılık villa, Beytepe özel mimarili satılık villalar, Beytepe’de doğa manzaralı satılık villa, Ankara gayrimenkul ilanları, Beytepe konut projeleri, Çankaya satılık villa, Ankara villa yatırımı, Ankara emlak piyasası, Ankara lüks konutlar, Prestijli bölgede villa Ankara, Beytepe satılık müstakil ev, Ankara villa yaşamı, Beytepe site içinde ev, Beytepe real estate, Ankara premium villa, Ankara villa sahibi olma, Beytepe ev ilanları, Ankara doğa içinde villa, Beytepe’de satılık villa var mı, Ankara Beytepe villa fiyatları ne kadar, Beytepe’de havuzlu villa nereden alınır, Ankara’nın en iyi villa bölgeleri hangileri, Beytepe villa almak mantıklı mı, Beytepe’de yeni villa projeleri 2025, Beytepe satılık villa sahibinden, Beytepe satılık villa emlakçı, Beytepe satılık villa ilanları güncel, Beytepe satılık villa arıyorum, Beytepe villa for sale, Luxury villas in Ankara, Beytepe Ankara real estate, Villas for sale in Beytepe, Luxury houses in Beytepe Ankara, Modern villas for sale in Ankara, Investment property Beytepe Ankara",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

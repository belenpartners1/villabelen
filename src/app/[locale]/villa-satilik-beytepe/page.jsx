// app/villa-satilik-beytepe/page.jsx
import Image from "next/image";

export const metadata = {
  title: "Villa Satılık Beytepe | Villa Belen - Ankara Lüks Villalar",
  description:
    "Villa satılık Beytepe bölgesinde özel mimarili, havuzlu ve geniş bahçeli lüks Villa Belen villalarını keşfedin. Ankara Beytepe’nin en prestijli yaşam alanları.",
  keywords:
    "villa satılık beytepe, beytepe satılık villa, ankara satılık villa, beytepe villa, villa belen, beytepe lüks villa, beytepe bahçeli villa, beytepe havuzlu villa",
  openGraph: {
    title: "Villa Satılık Beytepe | Villa Belen - Ankara Lüks Villalar",
    description:
      "Ankara Beytepe’de satılık villa arıyorsanız, Villa Belen’in özel tasarımlı, bahçeli ve havuzlu lüks villalarına göz atın.",
    url: "https://www.villabelen.com/villa-satilik-beytepe",
    siteName: "Villa Belen",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.villabelen.com/villa-satilik-beytepe",
  },
};

export default function VillaSatilikBeytepePage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Villa Satılık Beytepe – Villa Belen
      </h1>
      <p className="text-lg mb-6">
        Beytepe’de villa satın almak isteyenler için özel olarak tasarlanmış,
        geniş bahçeli ve havuzlu Villa Belen projelerini keşfedin. Ankara’nın en
        prestijli bölgesinde lüks bir yaşam sizleri bekliyor.
      </p>

      <Image
        src="/F.garden.webp"
        alt="Villa Satılık Beytepe - Villa Belen"
        width={1200}
        height={600}
        className="rounded-2xl shadow-lg mb-8"
      />

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Beytepe’de Villa Satın Almanın Avantajları
        </h2>
        <p className="mb-4">
          Beytepe, Ankara’nın en değerli bölgelerinden biridir. Modern mimarili
          villalar, doğayla iç içe yaşam alanları ve güvenli site yapısı ile hem
          yatırım hem de yaşam için eşsiz bir lokasyondur.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Villa Belen Özellikleri</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Geniş bahçeler ve özel havuzlar</li>
          <li>Modern iç mimari ve kaliteli malzemeler</li>
          <li>Prestijli lokasyon: Beytepe / Çankaya / Ankara</li>
          <li>Güvenlikli site yaşamı</li>
          <li>Manzaralı ve ferah yaşam alanları</li>
        </ul>
      </section>
    </main>
  );
}

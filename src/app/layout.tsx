import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Nur Eczanesi | 1961'den Beri Cerrahpaşa'da Hizmetinizde",
  description: "Cerrahpaşa Nur Eczanesi 1961 senesinden beri İstanbul'da majistral ilaç, kozmetik, anne-bebek ürünleri ve itriyat ürünleri sunmaktadır. Ecz. Ayşe O. Akın yönetiminde güvenilir eczacılık hizmeti.",
  keywords: ["eczane", "majistral ilaç", "istanbul eczane", "cerrahpaşa eczane", "nur eczanesi", "kozmetik", "anne bebek ürünleri", "cilt bakımı", "saç sağlığı", "itriyat"],
  authors: [{ name: "Nur Eczanesi" }],
  creator: "Nur Eczanesi",
  publisher: "Nur Eczanesi",
  formatDetection: {
    email: false,
    telephone: true,
    address: true,
  },
  metadataBase: new URL("https://nureczanesi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nur Eczanesi | 1961'den Beri Cerrahpaşa'da Hizmetinizde",
    description: "Cerrahpaşa Nur Eczanesi 1961 senesinden beri İstanbul'da majistral ilaç, kozmetik, anne-bebek ürünleri ve itriyat ürünleri sunmaktadır.",
    url: "https://nureczanesi.com",
    siteName: "Nur Eczanesi",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/eczaneoutside.jpg",
        width: 1200,
        height: 630,
        alt: "Nur Eczanesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nur Eczanesi | 1961'den Beri Cerrahpaşa'da Hizmetinizde",
    description: "Cerrahpaşa Nur Eczanesi 1961 senesinden beri İstanbul'da majistral ilaç, kozmetik, anne-bebek ürünleri ve itriyat ürünleri sunmaktadır.",
    images: ["/images/eczaneoutside.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Bu kodu Google Search Console'dan almanız gerekecek
  },
  category: "Eczane, Sağlık",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={poppins.variable}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}

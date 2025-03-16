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
  title: "Nur Eczanesi | 1961'den Beri Hizmetinizde",
  description: "Cerrahpaşa Nur Eczanesi 1961 senesinden beri sizlere en iyi hizmeti sunmak için çabalıyor. Majistral ilaç, kozmetik ve itriyat ürünleri bulabilirsiniz.",
  keywords: ["eczane", "majistral ilaç", "istanbul eczane", "cerrahpaşa eczane", "nur eczanesi"],
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

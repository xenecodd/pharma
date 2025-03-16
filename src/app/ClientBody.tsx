"use client";

import { useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LocalBusinessStructuredData } from "@/components/seo/structured-data";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased min-h-screen flex flex-col";
  }, []);

  return (
    <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      
      {/* Structured Data for Pharmacy */}
      <LocalBusinessStructuredData 
        name="Nur Eczanesi"
        description="Cerrahpaşa Nur Eczanesi 1961 senesinden beri İstanbul'da majistral ilaç, kozmetik, anne-bebek ürünleri ve itriyat ürünleri sunmaktadır. Ecz. Ayşe O. Akın yönetiminde güvenilir eczacılık hizmeti."
        image="/images/eczaneoutside.jpg"
        telephone="+902125882020"
        address={{
          streetAddress: "Cerrahpaşa Mah. Kocamustafapaşa Cad. No:106/A",
          addressLocality: "Fatih",
          addressRegion: "İstanbul",
          postalCode: "34098",
          addressCountry: "TR"
        }}
        geo={{
          latitude: 41.0082,
          longitude: 28.9384
        }}
        openingHours={[
          "Monday 08:30-19:00",
          "Tuesday 08:30-19:00",
          "Wednesday 08:30-19:00",
          "Thursday 08:30-19:00",
          "Friday 08:30-19:00",
          "Saturday 09:00-18:00"
        ]}
        url="https://nureczanesi.com"
        priceRange="$$"
      />
    </body>
  );
}

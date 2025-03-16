import { Metadata } from 'next';

type PageSEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
};

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/images/eczaneoutside.jpg",
  canonical = "",
  noIndex = false,
}: PageSEOProps): Metadata {
  const baseKeywords = [
    "eczane", 
    "majistral ilaç", 
    "istanbul eczane", 
    "cerrahpaşa eczane", 
    "nur eczanesi", 
    "kozmetik", 
    "anne bebek ürünleri"
  ];

  return {
    title: `${title} | Nur Eczanesi`,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: {
      canonical: canonical || undefined,
    },
    openGraph: {
      title: `${title} | Nur Eczanesi`,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Nur Eczanesi`,
      description,
      images: [ogImage],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}

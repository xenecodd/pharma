"use client";

import { useEffect } from "react";

interface LocalBusinessStructuredDataProps {
  name: string;
  description: string;
  image: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  url?: string;
  priceRange?: string;
}

export function LocalBusinessStructuredData({
  name,
  description,
  image,
  telephone,
  address,
  geo,
  openingHours,
  url,
  priceRange,
}: LocalBusinessStructuredDataProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      name,
      description,
      image,
      telephone,
      address: address
        ? {
            "@type": "PostalAddress",
            streetAddress: address.streetAddress,
            addressLocality: address.addressLocality,
            addressRegion: address.addressRegion,
            postalCode: address.postalCode,
            addressCountry: address.addressCountry,
          }
        : undefined,
      geo: geo
        ? {
            "@type": "GeoCoordinates",
            latitude: geo.latitude,
            longitude: geo.longitude,
          }
        : undefined,
      openingHoursSpecification: openingHours
        ? openingHours.map((hours) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: hours.split(" ")[0],
            opens: hours.split(" ")[1].split("-")[0],
            closes: hours.split(" ")[1].split("-")[1],
          }))
        : undefined,
      url,
      priceRange,
    };

    // Add the structured data to the page
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [
    name,
    description,
    image,
    telephone,
    address,
    geo,
    openingHours,
    url,
    priceRange,
  ]);

  return null;
}

interface ProductStructuredDataProps {
  name: string;
  description: string;
  image: string;
  brand?: string;
  offers?: {
    price?: number;
    priceCurrency?: string;
    availability?: string;
  };
}

export function ProductStructuredData({
  name,
  description,
  image,
  brand,
  offers,
}: ProductStructuredDataProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      name,
      description,
      image,
      brand: brand
        ? {
            "@type": "Brand",
            name: brand,
          }
        : undefined,
      offers: offers
        ? {
            "@type": "Offer",
            price: offers.price,
            priceCurrency: offers.priceCurrency,
            availability: offers.availability,
          }
        : undefined,
    };

    // Add the structured data to the page
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [name, description, image, brand, offers]);

  return null;
}

interface BreadcrumbStructuredDataProps {
  items: {
    name: string;
    item: string;
  }[];
}

export function BreadcrumbStructuredData({
  items,
}: BreadcrumbStructuredDataProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    };

    // Add the structured data to the page
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [items]);

  return null;
}

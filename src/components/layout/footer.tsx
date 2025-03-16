"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { PhoneCall, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="font-bold text-xl text-primary">NUR</span>
              <span className="ml-1 font-medium">Eczanesi</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              1961 senesinden beri sizlere en iyi hizmeti sunmak için çabalıyoruz
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/urunler" className="text-sm text-muted-foreground hover:text-primary">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/urunler/majistral-ilaclar" className="text-sm text-muted-foreground hover:text-primary">
                  Majistral İlaçlar
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-sm text-muted-foreground hover:text-primary">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-sm text-muted-foreground hover:text-primary">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">İletişim</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <address className="text-sm text-muted-foreground not-italic">
                  Cerrahpaşa Mahallesi<br />
                  Koca Mustafapaşa caddesi 74A<br />
                  34098 Fatih/İstanbul, Turkey
                </address>
              </div>
              <div className="flex items-center">
                <PhoneCall className="h-5 w-5 text-primary mr-2" />
                <Link href="tel:+902125860186" className="text-sm text-muted-foreground hover:text-primary">
                  +90 212 586 01 86
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NUR Eczanesi. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/gizlilik-politikasi" className="text-xs text-muted-foreground hover:text-primary">
              Gizlilik Politikası
            </Link>
            <Link href="/satis-kosullari" className="text-xs text-muted-foreground hover:text-primary">
              Satış Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

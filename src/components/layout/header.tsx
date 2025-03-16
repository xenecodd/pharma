"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ShoppingBag } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 md:px-6">
        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Logo */}
        <Link href="/" className="mr-4 flex items-center">
          <span className="font-bold text-xl text-red-600">NUR</span>
          <span className="ml-1 font-medium">Eczanesi</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Ürünler</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/urunler/majistral-ilaclar"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Majistral İlaçlar
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Cerrahpaşa Nur Eczanesinde hazırlanmakta olan ve günümüzde çok az sayıda eczane tarafından yapılmakta olan çeşitli majistral formülasyonlar
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link
                      href="/urunler/anne-bebek"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-500 hover:text-red-600 focus:bg-red-500 focus:text-red-600"
                    >
                      <div className="text-sm font-medium leading-none">Anne Bebek</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Anne ve bebek sağlığı için özel ürünler
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/urunler/cilt-bakimi"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-500 hover:text-red-600 focus:bg-red-500 focus:text-red-600"
                    >
                      <div className="text-sm font-medium leading-none">Cilt Bakımı</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Cilt sağlığı ve bakımı için özel ürünler
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/urunler/kozmetik"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-500 hover:text-red-600 focus:bg-red-500 focus:text-red-600"
                    >
                      <div className="text-sm font-medium leading-none">Kozmetik ve İtriyat</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Kozmetik ve itriyat ürünleri
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/urunler/sac-sagligi"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-500 hover:text-red-600 focus:bg-red-500 focus:text-red-600"
                    >
                      <div className="text-sm font-medium leading-none">Saç Sağlığı</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Saç sağlığı ve bakımı için özel ürünler
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/hakkimizda" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Hakkımızda
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/iletisim" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  İletişim
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Ara</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

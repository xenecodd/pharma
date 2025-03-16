import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Ürünlerimiz | Nur Eczanesi",
  description: "Cerrahpaşa Nur Eczanesinde anne bebek ürünlerinden ağız sağlığına, kozmetik ve itriyat ürünlerine kadar geniş bir ürün yelpazesi bulabilirsiniz.",
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Ürünlerimiz</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
          Cerrahpaşa Nur Eczanesinde anne bebek ürünlerinden ağız sağlığına, kozmetik ve itriyat ürünlerine kadar geniş bir ürün yelpazesi bulabilirsiniz.
        </p>
      </div>

      {/* Featured Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card rounded-lg overflow-hidden border group transition-all hover:shadow-lg">
          <div className="relative h-60">
            <Image
              src="https://ext.same-assets.com/3050152477/1961389969.jpeg"
              alt="Majistral İlaçlar"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Majistral İlaçlar</h2>
            <p className="text-muted-foreground mb-4">
              Cerrahpaşa Nur Eczanesinde hazırlanmakta olan ve günümüzde çok az sayıda eczane tarafından yapılmakta olan çeşitli majistral formülasyonlar
            </p>
            <Button asChild className="w-full group">
              <Link href="/urunler/majistral-ilaclar">
                <span>Tüm Majistral İlaçlar</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-lg overflow-hidden border group transition-all hover:shadow-lg">
          <div className="relative h-60">
            <Image
              src="https://ext.same-assets.com/1759222878/2230006792.jpeg"
              alt="Kozmetik ve İtriyat"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Kozmetik ve İtriyat</h2>
            <p className="text-muted-foreground mb-4">
              Eczanemizde çeşitli kozmetik ve itriyat ürünleri bulabilirsiniz. Cilt bakımından saç sağlığına, ağız bakımından güneş korumasına kadar birçok ürün.
            </p>
            <Button asChild className="w-full group" variant="outline">
              <Link href="/urunler/kozmetik">
                <span>Keşfedin</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-lg overflow-hidden border group transition-all hover:shadow-lg">
          <div className="relative h-60">
            <Image
              src="https://ext.same-assets.com/1759222878/2230006792.jpeg"
              alt="Anne-Bebek Ürünleri"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Anne-Bebek Ürünleri</h2>
            <p className="text-muted-foreground mb-4">
              Anne ve bebek sağlığı için özel olarak seçtiğimiz ürünleri eczanemizde bulabilirsiniz. Bebeğinizin sağlığı için en kaliteli ürünler.
            </p>
            <Button asChild className="w-full group" variant="outline">
              <Link href="/urunler/anne-bebek">
                <span>Keşfedin</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Additional Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Saç Sağlığı</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Saç dökülmesinden saç bakımına kadar her türlü saç sağlığı ürünleri.
          </p>
          <Link href="/urunler/sac-sagligi" className="text-primary hover:underline inline-flex items-center text-sm">
            <span>Daha Fazla</span>
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Cilt Bakımı</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Cilt bakımı ve güzellik için özel olarak seçtiğimiz ürünler.
          </p>
          <Link href="/urunler/cilt-bakimi" className="text-primary hover:underline inline-flex items-center text-sm">
            <span>Daha Fazla</span>
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Ağız Sağlığı</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Ağız ve diş sağlığı için özel ürünler.
          </p>
          <Link href="/urunler/agiz-sagligi" className="text-primary hover:underline inline-flex items-center text-sm">
            <span>Daha Fazla</span>
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Reçeteli İlaçlar</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Reçeteli ilaçlarınızı temin etmek için eczanemize başvurunuz.
          </p>
          <Link href="/iletisim" className="text-primary hover:underline inline-flex items-center text-sm">
            <span>İletişime Geçin</span>
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Özel Ürün Danışmanlığı</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          İhtiyacınız olan özel ürünler veya majistral formülasyonlar hakkında daha fazla bilgi almak için eczanemizi ziyaret edebilir veya telefon ile iletişime geçebilirsiniz.
        </p>
        <Button asChild size="lg">
          <Link href="/iletisim">Bizimle İletişime Geçin</Link>
        </Button>
      </div>
    </div>
  )
}

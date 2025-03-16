import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[80vh] bg-muted overflow-hidden">
          <Image
            src="/images/eczaneoutside.jpg"
            alt="Nur Eczanesi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Bu kapının ardından
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
              1961 senesinden beri sizlere en iyi hizmeti sunmak için çabalıyoruz
            </p>
            <Button asChild size="lg" className="font-medium">
              <Link href="/urunler">Ürünlerimizi Keşfedin</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ürünlerimiz</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cerrahpaşa Nur Eczanesinde anne bebek ürünlerinden ağız sağlığına bıttım sabunundan saf ozon yağına kadar bir çok kozmetik ve itriyat ürünleri bulabilirsiniz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 transition-all hover:shadow-lg">
              <div className="h-60 relative mb-4 rounded-md overflow-hidden">
                <Image
                  src="/images/majistral.jpg"
                  alt="Majistral İlaçlar"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Majistral İlaçlar</h3>
              <p className="text-muted-foreground mb-4">
                Cerrahpaşa Nur Eczanesinde hazırlanmakta olan ve günümüzde çok az sayıda eczane tarafından yapılmakta olan çeşitli majistral formülasyonlar
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/urunler/majistral-ilaclar">Daha Fazla</Link>
              </Button>
            </div>

            <div className="bg-background rounded-lg p-6 transition-all hover:shadow-lg">
              <div className="h-60 relative mb-4 rounded-md overflow-hidden">
                <Image
                  src="/images/parfume.jpg"
                  alt="Kozmetik ve İtriyat"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kozmetik ve İtriyat</h3>
              <p className="text-muted-foreground mb-4">
                Eczanemizde çeşitli kozmetik ve itriyat ürünleri bulabilirsiniz. Cilt bakımından saç sağlığına, ağız bakımından güneş korumasına kadar birçok ürün.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/urunler/kozmetik">Daha Fazla</Link>
              </Button>
            </div>

            <div className="bg-background rounded-lg p-6 transition-all hover:shadow-lg">
              <div className="h-60 relative mb-4 rounded-md overflow-hidden">
                <Image
                  src="/images/motherbabe.jpeg"
                  alt="Anne-Bebek Ürünleri"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Anne-Bebek Ürünleri</h3>
              <p className="text-muted-foreground mb-4">
                Anne ve bebek sağlığı için özel olarak seçtiğimiz ürünleri eczanemizde bulabilirsiniz. Bebeğinizin sağlığı için en kaliteli ürünler.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/urunler/anne-bebek">Daha Fazla</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hakkımızda</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              1961 senesinde hizmete başlamış olan Cerrahpaşa NUR Eczanesi'nin üçüncü kuşak eczacısı Ecz.Ayşe O. Akın Amerika'da almış olduğu eğitim, kazanmış olduğu birikim ve tecrübesini hastalarıyla paylaşmaktadır
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1473267868/256078928.jpeg"
                alt="Nur Eczanesi Dış Görünüm"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/494583573/4041989218.jpeg"
                alt="Nur Eczanesi İç Görünüm"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/3704577899/3837474697.jpeg"
                alt="Nur Eczanesi Kış"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-primary/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Bizimle İletişime Geçin</h2>
              <p className="text-lg mb-6">
                Sağlık ve güzellikle ilgili sorularınız için bize ulaşın. Eczanemiz 1961'den beri Cerrahpaşa'da hizmet vermektedir.
              </p>
              <Button asChild size="lg">
                <Link href="/iletisim">İletişim</Link>
              </Button>
            </div>
            <div className="md:w-1/2 h-64 relative rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/3654527109/1870627537.jpeg"
                alt="Nur Eczanesi İletişim"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

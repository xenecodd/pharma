import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Hakkımızda | Nur Eczanesi",
  description: "1961 senesinde hizmete başlamış olan Cerrahpaşa NUR Eczanesi'nin üçüncü kuşak eczacısı hakkında bilgiler",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Hakkımızda</h1>

        <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://ext.same-assets.com/2729476871/996439037.jpeg"
            alt="Nur Eczanesi"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Tarihçemiz</h2>
          <p className="mb-4">
            1961 senesinde hizmete başlamış olan Cerrahpaşa NUR Eczanesi'nin üçüncü kuşak eczacısı Ecz.Ayşe O. Akın Amerika'da almış olduğu eğitim, kazanmış olduğu birikim ve tecrübesini hastalarıyla paylaşmaktan mutluluk duymaktadır.
          </p>
          <p className="mb-4">
            Bu kapının ardından 1961 senesinden beri sizlere en iyi hizmeti sunmak için çabalıyoruz. Nur Eczanesi olarak uzun yıllardır Cerrahpaşa'da faaliyet göstermekteyiz ve sağlık sektöründeki tecrübemizle sizlere hizmet vermekten gurur duyuyoruz.
          </p>

          <Separator className="my-8" />

          <h2 className="text-2xl font-semibold mb-4">Vizyonumuz</h2>
          <p className="mb-4">
            Nur Eczanesi olarak, modern eczacılık uygulamalarını takip ederek, geleneksel eczacılık değerlerini koruyarak ve majistral ilaç hazırlama geleneğini yaşatarak, toplum sağlığına katkıda bulunmayı hedefliyoruz.
          </p>
          <p className="mb-4">
            Eczacılık hizmetlerimizde kaliteyi ve hasta memnuniyetini ön planda tutarak, güvenilir sağlık danışmanlığı sunmayı ve sağlık alanındaki yenilikleri takip ederek hastalarımıza en iyi hizmeti vermeyi amaçlıyoruz.
          </p>

          <Separator className="my-8" />

          <h2 className="text-2xl font-semibold mb-4">Majistral İlaç Hazırlama Geleneği</h2>
          <p className="mb-4">
            Cerrahpaşa Nur Eczanesinde hazırlanmakta olan ve günümüzde çok az sayıda eczane tarafından yapılmakta olan çeşitli majistral formülasyonlar hakkında detaylı bilgiye web sitemizden ulaşabilirsiniz.
          </p>
          <p className="mb-4">
            Majistral ilaçlar, eczacının kendi bilgi ve tecrübesiyle, hastanın özel ihtiyaçları doğrultusunda reçete edilen ilaçları eczane laboratuvarında hazırlamasıyla oluşturulur. Bu gelenek, günümüz modern eczacılığında giderek azalmakta olsa da, Nur Eczanesi olarak bu geleneği sürdürmeye önem veriyoruz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/3767568829/341015811.jpeg"
                alt="Majistral İlaç Hazırlama"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/3717343672/2366466786.jpeg"
                alt="Majistral İlaç"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/2165057009/1319732704.jpeg"
                alt="Majistral İlaç"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Ürün Çeşitliliğimiz</h2>
          <p className="mb-4">
            Cerrahpaşa Nur Eczanesinde anne bebek ürünlerinden ağız sağlığına, bıttım sabunundan saf ozon yağına kadar bir çok kozmetik ve itriyat ürünleri bulabilirsiniz. Geniş ürün yelpazemizle her türlü sağlık ve güzellik ihtiyacınıza cevap veriyoruz.
          </p>
        </div>
      </div>
    </div>
  )
}

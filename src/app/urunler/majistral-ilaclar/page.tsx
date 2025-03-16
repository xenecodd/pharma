import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { PhoneCall } from "lucide-react"

export const metadata = {
  title: "Majistral İlaçlar | Nur Eczanesi",
  description: "Cerrahpaşa Nur Eczanesinde hazırlanmakta olan ve günümüzde çok az sayıda eczane tarafından yapılmakta olan çeşitli majistral formülasyonlar",
}

export default function MajistralProductsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Majistral İlaçlar</h1>

        <div className="prose prose-lg max-w-none mb-8">
          <p>
            Cerrahpaşa Nur Eczanesinde hazırlanmakta olan ve günümüzde çok az sayıda eczane tarafından yapılmakta olan çeşitli majistral formülasyonlar hakkında detaylı bilgiye bu sayfadan ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/3767568829/341015811.jpeg"
              alt="Majistral İlaç Hazırlama"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="https://ext.same-assets.com/3717343672/2366466786.jpeg"
              alt="Majistral İlaç"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Saç Sağlığı Kategorisi */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Saç Sağlığı</h2>
          <Separator className="mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Lipozomal Finasterid Jel</h3>
              <p className="text-muted-foreground mb-4">
                Saç dökülmesini engellemek için formüle edilmiş, Finasterid etken maddeli lipozomal jel. DHT hormonu üretimini bloke ederek saç dökülmesini önler.
              </p>
              <div className="text-sm text-muted-foreground italic">
                * Detaylı bilgi için eczanemize başvurunuz.
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Minoxidil %2-7 Losyon</h3>
              <p className="text-muted-foreground mb-4">
                Saç köklerini besleyerek saç büyümesini teşvik eden, kan dolaşımını artıran ve saç dökülmesini engelleyen formül.
              </p>
              <div className="text-sm text-muted-foreground italic">
                * Farklı konsantrasyonlarda hazırlanabilir.
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Minoxidil 2.5mg Kapsül</h3>
              <p className="text-muted-foreground mb-4">
                Oral kullanım için hazırlanan, sistemik etki gösteren minoxidil kapsülleri.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Finasterid Losyon</h3>
              <p className="text-muted-foreground mb-4">
                DHT hormonu üretimini bloke eden ve saç dökülmesini önleyen, cilt üzerinden uygulanan losyon.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Saç Kıran</h3>
              <p className="text-muted-foreground mb-4">
                Alopesi areata (saç kıran) tedavisi için özel olarak hazırlanan, saç büyümesini teşvik eden formül.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Androgenetic Alopecia</h3>
              <p className="text-muted-foreground mb-4">
                Erkek tipi saç dökülmesi (androgenetic alopecia) için özel olarak hazırlanan, çeşitli etken maddelerin kombinasyonundan oluşan formül.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Sakal Kıran</h3>
              <p className="text-muted-foreground mb-4">
                Sakal bölgesinde görülen alopesi areata tedavisi için özel olarak hazırlanan, sakal büyümesini teşvik eden formül.
              </p>
            </div>
          </div>
        </div>

        {/* Cilt Sağlığı Kategorisi */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Cilt Sağlığı</h2>
          <Separator className="mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Akne (Azelaik Asit)</h3>
              <p className="text-muted-foreground mb-4">
                Azelaik asit içeren, akne tedavisinde etkili, bakteriyostatik ve keratolitik özelliklere sahip formül.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Benzoyl Peroxide %2.5 Krem</h3>
              <p className="text-muted-foreground mb-4">
                Akne tedavisi için antibakteriyel etki gösteren, P. acnes bakterisine karşı etkili krem.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Kükürt Jel %3</h3>
              <p className="text-muted-foreground mb-4">
                Antiseptik ve antiparaziter etkileri olan, akne ve seboreik dermatit tedavisinde kullanılan jel.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Uyuz (Krem-Kapsül)</h3>
              <p className="text-muted-foreground mb-4">
                Uyuz (scabies) tedavisi için özel olarak hazırlanan, haricen ve dahilen kullanım için formüller.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Cilt Beyazlatıcı (Kojik Asit)</h3>
              <p className="text-muted-foreground mb-4">
                Kojik asit içeren, melanin sentezini azaltarak cilt lekeleri ve hiperpigmentasyon tedavisinde kullanılan formül.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Leke Giderici (Alfa Arbutin)</h3>
              <p className="text-muted-foreground mb-4">
                Alfa arbutin içeren, cilt lekeleri ve hiperpigmentasyon tedavisinde kullanılan, tirozinaz enzimini inhibe eden formül.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">İz Giderici Yağ</h3>
              <p className="text-muted-foreground mb-4">
                Yara izleri, ameliyat izleri ve akne izlerinin tedavisi için geliştirilen, cildin yenilenmesini destekleyen yağ.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-2">Glikolik Asid Peel</h3>
              <p className="text-muted-foreground mb-4">
                Kimyasal peeling için kullanılan, cildi yenileyen, lekeleri ve ince çizgileri azaltan formül.
              </p>
            </div>
          </div>
        </div>

        {/* Diğer Formülasyonlar */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Diğer Formülasyonlar</h2>
          <Separator className="mb-6" />

          <div className="mb-6">
            <p className="mb-2">
              Eczanemizde hazırlanan diğer formülasyonlar hakkında bilgi almak için lütfen bizimle iletişime geçiniz.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-6">
              <li>Hyaluronik asit %2 nemlendirici</li>
              <li>Rosacea (Gül hastalığı) kremi</li>
              <li>Castellani solsyonu (mantar)</li>
              <li>Undecylenic acid mantar yağı</li>
              <li>Epsom tuz (kas-eklem ağrısı)</li>
              <li>Sedef-egzema kremleri</li>
              <li>Organik güneş kremi</li>
              <li>Ve daha fazlası...</li>
            </ul>
          </div>

          <div className="bg-muted p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Detaylı Bilgi İçin</h3>
              <p className="text-muted-foreground">
                Majistral ilaçlarımız hakkında daha detaylı bilgi almak ve ihtiyaçlarınıza uygun formülasyonlar için eczanemize başvurunuz.
              </p>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <PhoneCall className="h-5 w-5 text-primary mr-2" />
              <a href="tel:+902125860186" className="text-primary hover:underline">
                +90 212 586 01 86
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

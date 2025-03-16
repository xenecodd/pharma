import { PhoneCall, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "İletişim | Nur Eczanesi",
  description: "Nur Eczanesi iletişim bilgileri ve konum bilgisi. Cerrahpaşa Mahallesi, Koca Mustafapaşa caddesi 74A, 34098 Fatih/İstanbul",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">İletişim</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Sorularınız veya danışmak istediğiniz konular için bizimle iletişime geçebilirsiniz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Adres</h3>
                  <address className="not-italic text-muted-foreground mt-1">
                    Cerrahpaşa Mahallesi<br />
                    Koca Mustafapaşa caddesi 74A<br />
                    34098 Fatih/İstanbul, Turkey
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <PhoneCall className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Telefon</h3>
                  <a
                    href="tel:+902125860186"
                    className="text-muted-foreground hover:text-primary transition-colors mt-1 block"
                  >
                    +90 212 586 01 86
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">E-posta</h3>
                  <a
                    href="mailto:info@nureczanesi.com"
                    className="text-muted-foreground hover:text-primary transition-colors mt-1 block"
                  >
                    info@nureczanesi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Çalışma Saatleri</h3>
                  <p className="text-muted-foreground mt-1">
                    Pazartesi - Cumartesi: 08:30 - 19:00<br />
                    Pazar: Kapalı
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Yol Tarifi</h3>
              <p className="text-muted-foreground mb-4">
                Cerrahpaşa Hastanesi'ne yakın bir konumda bulunmaktayız. Eczanemize ulaşmak için
                toplu taşıma veya özel aracınızı kullanabilirsiniz.
              </p>
              <Button asChild>
                <a href="https://maps.google.com/?q=Cerrahpaşa+Mahallesi+Koca+Mustafapaşa+caddesi+74A+Fatih+İstanbul" target="_blank" rel="noopener noreferrer">
                  Google Maps'te Aç
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Konum</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6889704749913!2d28.944957!3d41.005278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb78f67726efa84a8!2sCerrahpa%C5%9Fa%20Hastanesi!5e0!3m2!1str!2str!4v1665850741428!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nur Eczanesi Konum"
              ></iframe>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Eczacımız</h3>
              <p className="text-muted-foreground">
                Ecz. Ayşe O. Akın, Cerrahpaşa NUR Eczanesi'nin üçüncü kuşak eczacısıdır. Amerika'da almış olduğu eğitim,
                kazanmış olduğu birikim ve tecrübesiyle hastalarına hizmet vermektedir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

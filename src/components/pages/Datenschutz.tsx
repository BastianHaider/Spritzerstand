import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Datenschutzerklärung | WhitePeak Digital Marketing</title>
        <meta
          name="description"
          content="Datenschutzerklärung der WhitePeak Digital Marketing GmbH. Informationen zur Verarbeitung Ihrer personenbezogenen Daten."
        />
      </Helmet>
      <Header />
      <main className="flex-grow container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight font-scandia mb-8">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Allgemeine Hinweise</h3>
                <p className="text-gray-600">
                  Die folgenden Hinweise geben einen einfachen Überblick
                  darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                2. Datenerfassung auf unserer Website
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Cookies</h3>
                <p className="text-gray-600">
                  Unsere Website verwendet Cookies. Das sind kleine Textdateien,
                  die Ihr Webbrowser auf Ihrem Endgerät speichert.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                3. Analytics und Werbung
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Google Analytics</h3>
                <p className="text-gray-600">
                  Diese Website nutzt Funktionen des Webanalysedienstes Google
                  Analytics. Anbieter ist die Google Ireland Limited.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Newsletter</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Wenn Sie den auf der Website angebotenen Newsletter beziehen
                  möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie
                  Informationen, welche uns die Überprüfung gestatten, dass Sie
                  der Inhaber der angegebenen E-Mail-Adresse sind.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                5. Plugins und Tools
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Google Web Fonts</h3>
                <p className="text-gray-600">
                  Diese Seite nutzt zur einheitlichen Darstellung von
                  Schriftarten so genannte Web Fonts, die von Google
                  bereitgestellt werden.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Ihre Rechte</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Sie haben jederzeit das Recht unentgeltlich Auskunft über
                  Herkunft, Empfänger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

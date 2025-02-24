import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AGB() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>
          Allgemeine Geschäftsbedingungen | WhitePeak Digital Marketing
        </title>
        <meta
          name="description"
          content="Allgemeine Geschäftsbedingungen der WhitePeak Digital Marketing GmbH. Rechtliche Grundlagen unserer Zusammenarbeit."
        />
      </Helmet>
      <Header />
      <main className="flex-grow container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight font-scandia mb-8">
            Allgemeine Geschäftsbedingungen
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Geltungsbereich</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB")
                  gelten für alle Verträge zwischen der WhitePeak Digital
                  Marketing GmbH (nachfolgend "WhitePeak") und ihren Kunden.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Vertragsschluss</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Der Vertrag kommt durch die Annahme des Kundenauftrags durch
                  WhitePeak zustande. Die Annahme erfolgt durch schriftliche
                  Auftragsbestätigung oder durch Beginn der Leistungserbringung.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Leistungen</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  WhitePeak erbringt Dienstleistungen im Bereich Digital
                  Marketing, insbesondere Content Marketing, SEO, Performance
                  Marketing und Social Media Marketing.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                4. Preise und Zahlungsbedingungen
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Alle Preise verstehen sich in Euro zzgl. der gesetzlichen
                  Mehrwertsteuer. Rechnungen sind innerhalb von 14 Tagen nach
                  Rechnungsstellung ohne Abzug zur Zahlung fällig.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                5. Mitwirkungspflichten des Kunden
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Der Kunde stellt WhitePeak alle für die Durchführung des
                  Auftrags erforderlichen Unterlagen und Informationen
                  rechtzeitig zur Verfügung.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                6. Gewährleistung und Haftung
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  WhitePeak haftet für Schäden nur bei Vorsatz oder grober
                  Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist
                  ausgeschlossen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                7. Schlussbestimmungen
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Es gilt österreichisches Recht. Gerichtsstand ist Wels.
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein,
                  bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
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

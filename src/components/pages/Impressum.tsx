import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Impressum | WhitePeak Digital Marketing Agentur</title>
        <meta
          name="description"
          content="Impressum der WhitePeak Digital Marketing GmbH. Alle rechtlichen Informationen und Kontaktdaten."
        />
      </Helmet>
      <Header />
      <main className="flex-grow container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight font-scandia mb-8">
            Impressum
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                Unternehmensangaben
              </h2>
              <div className="space-y-2">
                <p>
                  <strong>WhitePeak Digital Marketing GmbH</strong>
                </p>
                <p>Rainerstraße 42</p>
                <p>4614 Marchtrenk</p>
                <p>Österreich</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
              <div className="space-y-2">
                <p>Tel: +43 123 456789</p>
                <p>E-Mail: office@whitepeak.at</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                Rechtliche Informationen
              </h2>
              <div className="space-y-2">
                <p>UID-Nr: ATU12345678</p>
                <p>Firmenbuchnummer: FN 123456a</p>
                <p>Firmenbuchgericht: Landesgericht Wels</p>
                <p>Geschäftsführer: Bastian Haider, Dario Bjelobrk</p>
                <p>Mitglied der WKO</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Aufsichtsbehörde</h2>
              <p>Magistrat der Stadt Wels</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                Anwendbare Rechtsvorschriften
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Gewerbeordnung: www.ris.bka.gv.at</li>
                <li>E-Commerce-Gesetz: www.ris.bka.gv.at</li>
                <li>Mediengesetz: www.ris.bka.gv.at</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                Online-Streitbeilegung
              </h2>
              <p>
                Verbraucher haben die Möglichkeit, Beschwerden an die
                Online-Streitbeilegungsplattform der EU zu richten:{" "}
                <a
                  href="http://ec.europa.eu/odr"
                  className="text-[#006C84] hover:underline"
                >
                  http://ec.europa.eu/odr
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

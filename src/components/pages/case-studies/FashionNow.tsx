import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Quote,
  TrendingUp,
  Users,
} from "lucide-react";

export default function FashionNowCaseStudy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>E-Commerce Performance Marketing | WhitePeak Case Study</title>
        <meta
          name="description"
          content="Erfahren Sie, wie WhitePeak durch optimierte Meta & Google Ads Kampagnen den ROAS um 180% steigern und die Conversion-Rate für FashionNow um 75% erhöhen konnte."
        />
      </Helmet>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-purple-50/90 to-white py-24">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-secondary/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/2">
                  <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-secondary text-sm font-medium mb-4">
                    Case Study
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-scandia mb-6">
                    E-Commerce Performance Marketing
                  </h1>
                  <p className="text-gray-600 text-lg mb-8">
                    Wie wir durch optimierte Meta & Google Ads Kampagnen den
                    Return on Ad Spend deutlich steigern und die Conversion-Rate
                    um 75% erhöhen konnten.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="text-xs bg-brand-primary/10 text-brand-secondary px-3 py-1 rounded-full">
                      Performance Marketing
                    </span>
                    <span className="text-xs bg-brand-primary/10 text-brand-secondary px-3 py-1 rounded-full">
                      Google Ads
                    </span>
                    <span className="text-xs bg-brand-primary/10 text-brand-secondary px-3 py-1 rounded-full">
                      Meta Ads
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/80 to-brand-primary/80 opacity-60 mix-blend-multiply z-10"></div>
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
                      alt="FashionNow E-Commerce Performance Marketing"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <h3 className="text-white text-lg font-bold mb-1">
                        FashionNow
                      </h3>
                      <p className="text-white/80 text-sm">E-Commerce</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Section */}
        <div className="py-16 bg-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-12">
                Erzielte Ergebnisse
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="text-4xl font-bold text-purple-500 mb-2">
                    +180%
                  </div>
                  <p className="text-gray-700">Return on Ad Spend</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-500 mb-2">
                    +75%
                  </div>
                  <p className="text-gray-700">Conversion-Rate</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">
                    +210%
                  </div>
                  <p className="text-gray-700">Qualifizierter Traffic</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold mb-6">
                    Die Herausforderung
                  </h2>
                  <p className="text-gray-600 mb-8">
                    FashionNow, ein aufstrebender Online-Shop für nachhaltige
                    Mode, stand vor mehreren Herausforderungen im digitalen
                    Marketing. Trotz eines stetig wachsenden Marktes für
                    nachhaltige Produkte und einer qualitativ hochwertigen
                    Produktpalette blieben die Conversion-Raten niedrig und die
                    Werbeausgaben erzielten nicht den gewünschten ROI. Die
                    bestehenden Kampagnen auf Google und Meta Ads waren
                    unzureichend optimiert, zielten auf zu breite Zielgruppen ab
                    und litten unter ineffizienten Budgetallokationen.
                  </p>

                  <div className="border-l-4 border-purple-500 pl-6 py-2 mb-8 bg-gray-50">
                    <p className="text-gray-600 italic">
                      "Wir haben viel Geld in Werbung investiert, aber die
                      Ergebnisse waren enttäuschend. Unsere Conversion-Rate lag
                      unter dem Branchendurchschnitt und der ROAS war nicht
                      nachhaltig. Wir brauchten einen strategischen Partner, der
                      uns hilft, unsere Werbeausgaben zu optimieren und messbare
                      Ergebnisse zu erzielen."
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      - Julia Schmidt, E-Commerce Managerin bei FashionNow
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Unsere Lösung</h2>
                  <p className="text-gray-600 mb-6">
                    Nach einer umfassenden Analyse der bestehenden Kampagnen,
                    des Kundenverhaltens und der Wettbewerbslandschaft
                    entwickelten wir eine maßgeschneiderte
                    Performance-Marketing-Strategie mit folgenden Schwerpunkten:
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-purple-600 font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Präzise Zielgruppenanalyse und -segmentierung
                        </h3>
                        <p className="text-gray-600">
                          Wir identifizierten die profitabelsten Kundensegmente
                          basierend auf demografischen Daten, Kaufverhalten und
                          Interessen. Durch die Erstellung detaillierter Buyer
                          Personas konnten wir die Werbekampagnen gezielt auf
                          die relevantesten Zielgruppen ausrichten.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-purple-600 font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Optimierung der Kampagnenstruktur und
                          Anzeigengestaltung
                        </h3>
                        <p className="text-gray-600">
                          Wir restrukturierten die Google Ads- und Meta
                          Ads-Kampagnen, um eine klarere Hierarchie und bessere
                          Kontrolle zu ermöglichen. Gleichzeitig entwickelten
                          wir A/B-Tests für Anzeigentexte, Bilder und
                          Call-to-Actions, um die effektivsten Kombinationen zu
                          identifizieren.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-purple-600 font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Implementierung von Conversion-Tracking und
                          Remarketing
                        </h3>
                        <p className="text-gray-600">
                          Wir verbesserten das Conversion-Tracking-System, um
                          genauere Daten über den Customer Journey zu erhalten.
                          Zusätzlich implementierten wir fortschrittliche
                          Remarketing-Kampagnen, die auf verschiedene Phasen des
                          Kaufprozesses zugeschnitten waren, um Nutzer
                          zurückzugewinnen, die den Kaufprozess nicht
                          abgeschlossen hatten.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-purple-600 font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Datengetriebene Budgetallokation und Gebotsstrategien
                        </h3>
                        <p className="text-gray-600">
                          Wir entwickelten ein dynamisches
                          Budgetallokationsmodell, das Werbeausgaben basierend
                          auf Performance-Metriken automatisch auf die
                          profitabelsten Kampagnen, Anzeigengruppen und Keywords
                          verteilt. Gleichzeitig implementierten wir
                          fortschrittliche Gebotsstrategien, die auf
                          Conversion-Wert und ROAS optimiert waren.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Die Ergebnisse</h2>
                  <p className="text-gray-600 mb-6">
                    Nach drei Monaten intensiver Optimierung und
                    kontinuierlicher Anpassung der Strategie konnte FashionNow
                    beeindruckende Ergebnisse verzeichnen:
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>180% Steigerung des ROAS</strong> (Return on Ad
                        Spend) über alle Werbekanäle hinweg, was zu einer
                        deutlich verbesserten Profitabilität der
                        Marketingaktivitäten führte.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>75% Erhöhung der Conversion-Rate</strong> durch
                        optimierte Zielgruppenansprache und verbesserte
                        Anzeigenrelevanz.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>210% mehr qualifizierter Traffic</strong> auf
                        der Website, mit deutlich längeren Verweildauern und
                        mehr Seitenaufrufen pro Besuch.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>
                          42% Reduktion der Cost-per-Acquisition (CPA)
                        </strong>{" "}
                        durch effizientere Budgetallokation und optimierte
                        Gebotsstrategien.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>
                          65% Steigerung des durchschnittlichen Bestellwerts
                        </strong>{" "}
                        durch gezielte Cross-Selling- und Upselling-Kampagnen.
                      </span>
                    </li>
                  </ul>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <div className="flex items-start">
                      <Quote className="w-10 h-10 text-purple-500/20 mr-4" />
                      <div>
                        <p className="text-gray-600 italic mb-4">
                          "Die Zusammenarbeit mit WhitePeak hat unsere
                          Erwartungen übertroffen. Nicht nur die
                          Performance-Kennzahlen haben sich dramatisch
                          verbessert, sondern wir haben auch wertvolle Einblicke
                          in unser Kundenverhalten gewonnen, die wir für die
                          Weiterentwicklung unseres Produktsortiments nutzen
                          konnten. Der datengetriebene Ansatz und die
                          kontinuierliche Optimierung haben uns geholfen, unsere
                          Marketingausgaben effizienter einzusetzen und
                          gleichzeitig den Umsatz deutlich zu steigern."
                        </p>
                        <div className="flex items-center">
                          <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=julia"
                            alt="Julia Schmidt"
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <p className="font-semibold">Julia Schmidt</p>
                            <p className="text-sm text-gray-500">
                              E-Commerce Managerin, FashionNow
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Fazit</h2>
                  <p className="text-gray-600 mb-8">
                    Durch eine Kombination aus präziser Zielgruppenanalyse,
                    optimierter Kampagnenstruktur, verbessertem
                    Conversion-Tracking und datengetriebener Budgetallokation
                    konnten wir für FashionNow signifikante Verbesserungen in
                    allen relevanten Performance-Kennzahlen erzielen. Die
                    Ergebnisse zeigen, dass ein strategischer, analytischer
                    Ansatz im Performance Marketing zu einer deutlichen
                    Steigerung des ROI führen kann, selbst in einem
                    wettbewerbsintensiven Markt wie dem E-Commerce für Mode.
                  </p>

                  <div className="border-t border-gray-100 pt-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Bereit für ähnliche Ergebnisse?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Lassen Sie uns gemeinsam besprechen, wie wir auch Ihr
                      Unternehmen mit einer maßgeschneiderten
                      Performance-Marketing-Strategie zum Erfolg führen können.
                    </p>
                    <Button
                      onClick={() => (window.location.href = "/consultation")}
                      className="bg-brand-secondary hover:bg-brand-primary text-white rounded-full px-8 py-6 group transition-all duration-300"
                    >
                      <span className="flex items-center">
                        <span>Kostenlose Beratung vereinbaren</span>
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

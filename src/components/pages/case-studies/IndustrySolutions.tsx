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

export default function IndustrySolutionsCaseStudy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>B2B Content & SEO Strategie | WhitePeak Case Study</title>
        <meta
          name="description"
          content="Erfahren Sie, wie WhitePeak durch SEO-optimierten Content und gezielte Backlink-Strategie den organischen Traffic für IndustrySolutions vervierfachen und die Anzahl der qualifizierten Leads deutlich steigern konnte."
        />
      </Helmet>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-emerald-50/90 to-white py-24">
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
                    B2B Content & SEO Strategie
                  </h1>
                  <p className="text-gray-600 text-lg mb-8">
                    Wie wir durch SEO-optimierten Content und gezielte
                    Backlink-Strategie den organischen Traffic vervierfachen und
                    die Anzahl der qualifizierten Leads deutlich steigern
                    konnten.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="text-xs bg-brand-primary/10 text-brand-secondary px-3 py-1 rounded-full">
                      SEO
                    </span>
                    <span className="text-xs bg-brand-primary/10 text-brand-secondary px-3 py-1 rounded-full">
                      Content Marketing
                    </span>
                    <span className="text-xs bg-brand-primary/10 text-brand-secondary px-3 py-1 rounded-full">
                      B2B
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/80 to-brand-primary/80 opacity-60 mix-blend-multiply z-10"></div>
                    <img
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60"
                      alt="IndustrySolutions B2B Content & SEO Strategie"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <h3 className="text-white text-lg font-bold mb-1">
                        IndustrySolutions
                      </h3>
                      <p className="text-white/80 text-sm">
                        B2B / Manufacturing
                      </p>
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
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">
                    +400%
                  </div>
                  <p className="text-gray-700">Organischer Traffic</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-500 mb-2">
                    +150%
                  </div>
                  <p className="text-gray-700">Qualifizierte Leads</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="text-4xl font-bold text-purple-500 mb-2">
                    Top 3
                  </div>
                  <p className="text-gray-700">Rankings für Kernkeywords</p>
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
                    IndustrySolutions, ein führender Anbieter von
                    Automatisierungslösungen für die Fertigungsindustrie, stand
                    vor der Herausforderung, seine Online-Sichtbarkeit zu
                    verbessern und qualifizierte Leads zu generieren. Trotz
                    eines starken Produktportfolios und jahrelanger
                    Branchenerfahrung war das Unternehmen online kaum
                    auffindbar. Die Website verzeichnete wenig organischen
                    Traffic, die Conversion-Raten waren niedrig, und die
                    Content-Strategie war nicht auf die Informationsbedürfnisse
                    der Zielgruppe ausgerichtet.
                  </p>

                  <div className="border-l-4 border-emerald-500 pl-6 py-2 mb-8 bg-gray-50">
                    <p className="text-gray-600 italic">
                      "Als B2B-Unternehmen mit komplexen Produkten war es für
                      uns schwierig, online die richtigen Entscheidungsträger zu
                      erreichen. Unsere Website generierte kaum qualifizierte
                      Leads, und wir waren in den Suchergebnissen für relevante
                      Branchenbegriffe praktisch unsichtbar."
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      - Thomas Weber, Marketing Director bei IndustrySolutions
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Unsere Lösung</h2>
                  <p className="text-gray-600 mb-6">
                    Nach einer umfassenden Analyse der Wettbewerbslandschaft,
                    der Suchintentionen der Zielgruppe und der bestehenden
                    Website entwickelten wir eine integrierte Content- und
                    SEO-Strategie mit folgenden Schwerpunkten:
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-600 font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Umfassende Keyword-Recherche und Content-Mapping
                        </h3>
                        <p className="text-gray-600">
                          Wir identifizierten relevante Keywords mit hohem
                          Suchvolumen und geringem Wettbewerb, die auf die
                          verschiedenen Phasen der Customer Journey abgestimmt
                          waren. Basierend auf dieser Recherche entwickelten wir
                          einen Content-Plan, der informative, beratende und
                          transaktionale Inhalte umfasste.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-600 font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Erstellung von hochwertigem, fachspezifischem Content
                        </h3>
                        <p className="text-gray-600">
                          Wir entwickelten eine Reihe von tiefgehenden
                          Fachartikeln, Whitepapern, Case Studies und
                          Branchenberichten, die nicht nur SEO-optimiert waren,
                          sondern auch echten Mehrwert für die Zielgruppe boten.
                          Jeder Inhalt wurde sorgfältig auf die spezifischen
                          Bedürfnisse und Fragen der Entscheidungsträger in der
                          Fertigungsindustrie zugeschnitten.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-600 font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Technische SEO-Optimierung und Website-Struktur
                        </h3>
                        <p className="text-gray-600">
                          Wir optimierten die technischen Aspekte der Website,
                          verbesserten die Ladezeiten, implementierten eine
                          klare Informationsarchitektur und stellten sicher,
                          dass die Website für Mobilgeräte optimiert war.
                          Zusätzlich verbesserten wir die interne
                          Verlinkungsstruktur, um die Autorität auf wichtige
                          Seiten zu lenken.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-emerald-600 font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Strategischer Linkaufbau in der Branche
                        </h3>
                        <p className="text-gray-600">
                          Wir entwickelten eine gezielte Backlink-Strategie, die
                          sich auf hochwertige, branchenrelevante Websites
                          konzentrierte. Durch Gastbeiträge,
                          Branchenverzeichnisse, Partnerschaften und
                          PR-Aktivitäten konnten wir die Domain-Autorität
                          stärken und die Sichtbarkeit in den Suchergebnissen
                          verbessern.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Die Ergebnisse</h2>
                  <p className="text-gray-600 mb-6">
                    Nach 12 Monaten intensiver Arbeit an der Content- und
                    SEO-Strategie konnte IndustrySolutions beeindruckende
                    Ergebnisse verzeichnen:
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>
                          400% Steigerung des organischen Traffics
                        </strong>{" "}
                        im Vergleich zum Vorjahr, mit einer kontinuierlichen
                        Wachstumskurve.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>
                          Top-3-Rankings für 28 wichtige Branchenkeywords
                        </strong>
                        , darunter hochkompetitive Begriffe mit hohem
                        Suchvolumen.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>150% mehr qualifizierte Leads</strong> über die
                        Website, mit einer deutlich höheren Conversion-Rate von
                        Website-Besuchern zu Anfragen.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>
                          65% Steigerung der durchschnittlichen Verweildauer
                        </strong>{" "}
                        auf der Website und 45% Reduktion der Absprungrate.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>85% Zunahme der Domain-Autorität</strong> durch
                        den strategischen Aufbau von über 120 hochwertigen
                        Backlinks aus relevanten Quellen.
                      </span>
                    </li>
                  </ul>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <div className="flex items-start">
                      <Quote className="w-10 h-10 text-emerald-500/20 mr-4" />
                      <div>
                        <p className="text-gray-600 italic mb-4">
                          "Die Zusammenarbeit mit WhitePeak hat unsere
                          Online-Präsenz komplett transformiert. Wir werden
                          jetzt als Thought Leader in unserer Branche
                          wahrgenommen und generieren kontinuierlich hochwertige
                          Leads über unsere Website. Besonders beeindruckend
                          ist, dass wir nicht nur mehr Traffic erhalten, sondern
                          dass es sich um genau die richtige Zielgruppe handelt
                          – Entscheidungsträger, die aktiv nach unseren Lösungen
                          suchen. Die ROI dieser Investition hat unsere
                          Erwartungen weit übertroffen."
                        </p>
                        <div className="flex items-center">
                          <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=thomas"
                            alt="Thomas Weber"
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <p className="font-semibold">Thomas Weber</p>
                            <p className="text-sm text-gray-500">
                              Marketing Director, IndustrySolutions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Fazit</h2>
                  <p className="text-gray-600 mb-8">
                    Durch eine strategische Kombination aus tiefgehender
                    Keyword-Recherche, hochwertigem Fachcontent, technischer
                    SEO-Optimierung und gezieltem Linkaufbau konnten wir für
                    IndustrySolutions eine signifikante Steigerung der
                    Online-Sichtbarkeit und Lead-Generierung erreichen. Die
                    Ergebnisse zeigen, dass auch in komplexen B2B-Märkten mit
                    langen Verkaufszyklen eine gut durchdachte Content- und
                    SEO-Strategie zu messbaren Geschäftserfolgen führen kann.
                  </p>

                  <div className="border-t border-gray-100 pt-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Bereit für ähnliche Ergebnisse?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Lassen Sie uns gemeinsam besprechen, wie wir auch Ihr
                      B2B-Unternehmen mit einer maßgeschneiderten Content- und
                      SEO-Strategie zum Erfolg führen können.
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

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

export default function TechStartCaseStudy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>
          Social Media Kampagne für Tech-Startup | WhitePeak Case Study
        </title>
        <meta
          name="description"
          content="Erfahren Sie, wie WhitePeak durch eine maßgeschneiderte Social Media Strategie das Engagement um 250% steigern und die Lead-Generierung für TechStart GmbH mehr als verdoppeln konnte."
        />
      </Helmet>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50/90 to-white py-24">
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
                    Social Media Kampagne für Tech-Startup
                  </h1>
                  <p className="text-gray-600 text-lg mb-8">
                    Wie wir durch gezielte Content-Strategie und Community
                    Management das Engagement signifikant steigern und die
                    Lead-Generierung mehr als verdoppeln konnten.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="text-xs bg-brand-primary/10 text-brand-secondary px-3 py-1 rounded-full">
                      Social Media
                    </span>
                    <span className="text-xs bg-brand-primary/10 text-brand-secondary px-3 py-1 rounded-full">
                      Content Marketing
                    </span>
                    <span className="text-xs bg-brand-primary/10 text-brand-secondary px-3 py-1 rounded-full">
                      Lead Generation
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/80 to-brand-primary/80 opacity-60 mix-blend-multiply z-10"></div>
                    <img
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60"
                      alt="TechStart GmbH Social Media Kampagne"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <h3 className="text-white text-lg font-bold mb-1">
                        TechStart GmbH
                      </h3>
                      <p className="text-white/80 text-sm">SaaS / Tech</p>
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
                    +250%
                  </div>
                  <p className="text-gray-700">Steigerung des Engagements</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-500 mb-2">
                    +120%
                  </div>
                  <p className="text-gray-700">Mehr qualifizierte Leads</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="text-4xl font-bold text-purple-500 mb-2">
                    320%
                  </div>
                  <p className="text-gray-700">Return on Investment</p>
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
                    TechStart GmbH, ein aufstrebendes SaaS-Unternehmen, stand
                    vor der Herausforderung, seine Markenbekanntheit zu steigern
                    und qualifizierte Leads für seine innovative
                    Projektmanagement-Software zu generieren. Trotz eines
                    qualitativ hochwertigen Produkts fehlte es dem Unternehmen
                    an einer kohärenten Social-Media-Präsenz und einer
                    effektiven Content-Strategie, um die richtige Zielgruppe
                    anzusprechen und zu konvertieren.
                  </p>

                  <div className="border-l-4 border-brand-secondary pl-6 py-2 mb-8 bg-gray-50">
                    <p className="text-gray-600 italic">
                      "Wir hatten ein großartiges Produkt, aber es fehlte uns an
                      Sichtbarkeit und einer klaren Strategie, um unsere
                      Zielgruppe zu erreichen. Unsere Social-Media-Kanäle waren
                      inkonsistent und generierten kaum Interaktionen oder
                      Leads."
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      - Michael Berger, CMO bei TechStart GmbH
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Unsere Lösung</h2>
                  <p className="text-gray-600 mb-6">
                    Nach einer gründlichen Analyse der Zielgruppe, des
                    Wettbewerbs und der bestehenden Social-Media-Präsenz
                    entwickelten wir eine maßgeschneiderte Strategie, die auf
                    drei Säulen basierte:
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-brand-secondary font-bold">
                          1
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Zielgruppenspezifischer Content
                        </h3>
                        <p className="text-gray-600">
                          Wir entwickelten einen Content-Kalender mit
                          branchenrelevanten Themen, Erfolgsgeschichten,
                          Produktdemonstrationen und Expertentipps, die speziell
                          auf die Bedürfnisse und Schmerzpunkte der Zielgruppe
                          zugeschnitten waren.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-brand-secondary font-bold">
                          2
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Proaktives Community Management
                        </h3>
                        <p className="text-gray-600">
                          Wir implementierten ein proaktives
                          Community-Management-System, das schnelle Reaktionen
                          auf Kommentare und Nachrichten, regelmäßige
                          Interaktionen mit relevanten Branchenakteuren und die
                          aktive Teilnahme an themenrelevanten Diskussionen
                          umfasste.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-brand-secondary font-bold">
                          3
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Gezielte Werbekampagnen
                        </h3>
                        <p className="text-gray-600">
                          Wir entwickelten und optimierten zielgerichtete
                          Werbekampagnen auf LinkedIn und Twitter, die auf
                          spezifische Berufsgruppen, Branchen und
                          Interessengebiete ausgerichtet waren, um die
                          Reichweite zu maximieren und qualifizierte Leads zu
                          generieren.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Die Ergebnisse</h2>
                  <p className="text-gray-600 mb-6">
                    Innerhalb von sechs Monaten nach der Implementierung unserer
                    Strategie konnte TechStart GmbH beeindruckende Ergebnisse
                    verzeichnen:
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>250% Steigerung des Engagements</strong> auf
                        allen Social-Media-Plattformen, gemessen an Likes,
                        Kommentaren, Shares und Klicks.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>120% Zunahme der Lead-Generierung</strong> durch
                        Social-Media-Kanäle, mit einer deutlich höheren
                        Konversionsrate als zuvor.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>320% ROI</strong> auf die
                        Social-Media-Marketing-Investitionen, berechnet anhand
                        der generierten Leads und Conversions.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>35% Steigerung der Markenbekanntheit</strong>,
                        gemessen durch Brand-Monitoring-Tools und Umfragen.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">
                        <strong>42% Zunahme der Website-Besuche</strong> aus
                        Social-Media-Quellen, mit einer deutlich niedrigeren
                        Absprungrate als zuvor.
                      </span>
                    </li>
                  </ul>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <div className="flex items-start">
                      <Quote className="w-10 h-10 text-brand-secondary/20 mr-4" />
                      <div>
                        <p className="text-gray-600 italic mb-4">
                          "Die Zusammenarbeit mit WhitePeak hat unsere
                          Social-Media-Präsenz komplett transformiert. Nicht nur
                          die Zahlen sprechen für sich, sondern auch die
                          Qualität der Interaktionen und Leads hat sich deutlich
                          verbessert. Wir werden jetzt als Thought Leader in
                          unserer Branche wahrgenommen und konnten dadurch
                          wichtige Partnerschaften schließen und unseren
                          Kundenstamm erweitern."
                        </p>
                        <div className="flex items-center">
                          <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=michael"
                            alt="Michael Berger"
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <p className="font-semibold">Michael Berger</p>
                            <p className="text-sm text-gray-500">
                              CMO, TechStart GmbH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Fazit</h2>
                  <p className="text-gray-600 mb-8">
                    Durch eine strategische Kombination aus
                    zielgruppenspezifischem Content, proaktivem Community
                    Management und gezielten Werbekampagnen konnten wir
                    TechStart GmbH dabei helfen, ihre Social-Media-Präsenz
                    signifikant zu verbessern, das Engagement zu steigern und
                    qualifizierte Leads zu generieren. Die Ergebnisse zeigen
                    deutlich, dass ein durchdachter, datengetriebener Ansatz im
                    Social-Media-Marketing zu messbaren Geschäftserfolgen führen
                    kann.
                  </p>

                  <div className="border-t border-gray-100 pt-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Bereit für ähnliche Ergebnisse?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Lassen Sie uns gemeinsam besprechen, wie wir auch Ihr
                      Unternehmen mit einer maßgeschneiderten
                      Social-Media-Strategie zum Erfolg führen können.
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

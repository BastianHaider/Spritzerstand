import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Globe } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SeoOptimierung() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-emerald-50 py-20">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-scandia mb-6">
                  SEO Optimierung
                </h1>
                <p className="text-xl text-gray-600">
                  Verbessern Sie Ihre Sichtbarkeit in Suchmaschinen und
                  erreichen Sie mehr qualifizierte Besucher.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="container py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Unsere SEO Strategie
                </h2>
                <p className="text-gray-600 mb-6">
                  Wir optimieren Ihre Website ganzheitlich für Suchmaschinen und
                  verbessern Ihr Ranking nachhaltig. Unser Fokus liegt auf
                  langfristigem Erfolg durch White-Hat-SEO-Methoden.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">SEO Audit</h3>
                      <p className="text-gray-600">
                        Umfassende Analyse Ihrer Website und
                        Wettbewerbssituation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Keyword-Recherche</h3>
                      <p className="text-gray-600">
                        Identifikation relevanter Suchbegriffe mit Potenzial.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Optimierung</h3>
                      <p className="text-gray-600">
                        Technische und inhaltliche Optimierung Ihrer Website.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Unsere Leistungen</h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 mr-3" />
                    <span>OnPage Optimierung</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 mr-3" />
                    <span>OffPage Optimierung</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 mr-3" />
                    <span>Technisches SEO</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 mr-3" />
                    <span>Content Optimierung</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-8"
                  onClick={() => (window.location.href = "/consultation")}
                >
                  Jetzt beraten lassen
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

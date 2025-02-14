import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BarChart } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PerformanceMarketing() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-purple-50 py-20">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-6">
                  <BarChart className="w-8 h-8" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-scandia mb-6">
                  Performance Marketing
                </h1>
                <p className="text-xl text-gray-600">
                  Maximieren Sie Ihren ROI durch datengetriebene Werbekampagnen
                  auf allen relevanten Kanälen.
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
                  Unsere Performance Marketing Strategie
                </h2>
                <p className="text-gray-600 mb-6">
                  Wir entwickeln und optimieren Ihre Werbekampagnen
                  kontinuierlich für maximale Performance. Unser Fokus liegt auf
                  messbaren Ergebnissen und ROI-Optimierung.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Kampagnen-Setup</h3>
                      <p className="text-gray-600">
                        Professionelle Einrichtung Ihrer Werbekampagnen.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">A/B Testing</h3>
                      <p className="text-gray-600">
                        Kontinuierliche Optimierung durch systematisches
                        Testing.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Reporting</h3>
                      <p className="text-gray-600">
                        Transparente Berichterstattung und Analysen.
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
                    <div className="w-4 h-4 rounded-full bg-purple-100 mr-3" />
                    <span>Google Ads</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-purple-100 mr-3" />
                    <span>Meta Ads</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-purple-100 mr-3" />
                    <span>Display Advertising</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-purple-100 mr-3" />
                    <span>Remarketing</span>
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

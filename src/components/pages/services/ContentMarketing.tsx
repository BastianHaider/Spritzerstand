import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PenTool } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContentMarketing() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-blue-50 py-20">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
                  <PenTool className="w-8 h-8" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-scandia mb-6">
                  Content Marketing
                </h1>
                <p className="text-xl text-gray-600">
                  Erstellen Sie hochwertigen Content, der Ihre Zielgruppe
                  begeistert und zu mehr Conversions führt.
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
                  Unsere Content Marketing Strategie
                </h2>
                <p className="text-gray-600 mb-6">
                  Wir entwickeln maßgeschneiderte Content-Strategien, die Ihre
                  Marke stärken und Ihre Zielgruppe ansprechen. Unser Ansatz
                  basiert auf datengetriebenen Erkenntnissen und jahrelanger
                  Erfahrung.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Zielgruppenanalyse</h3>
                      <p className="text-gray-600">
                        Wir identifizieren Ihre ideale Zielgruppe und deren
                        Bedürfnisse.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Content-Planung</h3>
                      <p className="text-gray-600">
                        Entwicklung eines strategischen Content-Kalenders.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Content-Erstellung</h3>
                      <p className="text-gray-600">
                        Professionelle Erstellung von hochwertigem Content.
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
                    <div className="w-4 h-4 rounded-full bg-blue-100 mr-3" />
                    <span>Blog-Artikel & Whitepaper</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-100 mr-3" />
                    <span>Social Media Content</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-100 mr-3" />
                    <span>Newsletter & E-Mail Marketing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-100 mr-3" />
                    <span>Video & Podcast Produktion</span>
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

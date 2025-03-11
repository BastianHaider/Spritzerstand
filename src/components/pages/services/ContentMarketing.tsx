import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  PenTool,
  FileText,
  Instagram,
  Mail,
  Video,
  ArrowRight,
  CheckCircle,
  BarChart3,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const contentTypes = [
  {
    title: "Blog-Artikel & Whitepaper",
    icon: FileText,
    description:
      "Hochwertige, SEO-optimierte Inhalte, die Ihre Expertise zeigen und organischen Traffic generieren.",
    color: "blue",
  },
  {
    title: "Social Media Content",
    icon: Instagram,
    description:
      "Ansprechende Beiträge, die Ihre Community aufbauen und Engagement fördern.",
    color: "blue",
  },
  {
    title: "Newsletter & E-Mail Marketing",
    icon: Mail,
    description:
      "Personalisierte Kommunikation, die Leads pflegt und Kunden bindet.",
    color: "blue",
  },
  {
    title: "Video & Podcast Produktion",
    icon: Video,
    description:
      "Dynamische Medienformate, die komplexe Themen ansprechend vermitteln.",
    color: "blue",
  },
];

const stats = [
  { value: "78%", label: "höhere Conversion-Rate durch Content Marketing" },
  { value: "67%", label: "mehr organischer Traffic durch optimierte Inhalte" },
  { value: "3x", label: "höheres Engagement bei personalisierten Inhalten" },
];

export default function ContentMarketing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Animated Background */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50/90 to-white py-24 sm:py-32">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-primary/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-blue-200/30"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full bg-brand-primary/20"
            animate={{
              y: [0, 20, 0],
              scale: [1, 0.95, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <div className="container relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 mx-auto mb-8 shadow-lg shadow-blue-200">
                  <PenTool className="w-10 h-10" />
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-scandia mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600">
                  Content Marketing
                </h1>

                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Erstellen Sie hochwertigen Content, der Ihre Zielgruppe
                  begeistert, Ihre Marke stärkt und zu mehr Conversions führt.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                    onClick={() => (window.location.href = "/consultation")}
                  >
                    <span className="flex items-center">
                      <span>Kostenlose Beratung</span>
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8"
                  >
                    Fallstudien ansehen
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        {stat.value}
                      </div>
                      <p className="text-gray-700">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Unsere Content Marketing Strategie
                </h2>

                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Wir entwickeln maßgeschneiderte Content-Strategien, die Ihre
                  Marke stärken und Ihre Zielgruppe ansprechen. Unser Ansatz
                  basiert auf datengetriebenen Erkenntnissen und jahrelanger
                  Erfahrung im digitalen Marketing.
                </p>

                <div className="space-y-8">
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Zielgruppenanalyse
                        </h3>
                        <p className="text-gray-700">
                          Wir identifizieren Ihre ideale Zielgruppe, analysieren
                          deren Bedürfnisse, Schmerzpunkte und
                          Informationsbedarf. Durch detaillierte Personas und
                          Customer Journey Mapping entwickeln wir ein tiefes
                          Verständnis für Ihre potenziellen Kunden.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Content-Planung
                        </h3>
                        <p className="text-gray-700">
                          Basierend auf unserer Analyse entwickeln wir einen
                          strategischen Content-Kalender, der alle relevanten
                          Kanäle und Formate berücksichtigt. Wir identifizieren
                          Themen mit hohem Suchpotenzial und planen die optimale
                          Verteilung über verschiedene Plattformen.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Content-Erstellung & Distribution
                        </h3>
                        <p className="text-gray-700">
                          Unser Team aus erfahrenen Copywritern, Designern und
                          SEO-Experten erstellt hochwertigen Content, der
                          informiert, unterhält und zum Handeln anregt. Wir
                          optimieren die Inhalte für Suchmaschinen und
                          verbreiten sie über die effektivsten Kanäle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="sticky top-32">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

                  <h2 className="text-2xl font-bold mb-8 text-gray-900 relative z-10">
                    Unsere Content-Services
                  </h2>

                  <motion.div
                    className="space-y-6 relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {contentTypes.map((type, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                      >
                        <div className="flex items-start">
                          <div
                            className={`w-10 h-10 rounded-lg bg-${type.color}-100 text-${type.color}-600 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-${type.color}-600 group-hover:text-white transition-colors duration-300`}
                          >
                            <type.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {type.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {type.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="mt-8 relative z-10">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                      onClick={() => (window.location.href = "/consultation")}
                    >
                      <span className="flex items-center justify-center">
                        <span>Jetzt beraten lassen</span>
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                  Messbare Ergebnisse
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-6">
                  Was Sie von unserem Content Marketing erwarten können
                </h2>
                <p className="text-gray-700 text-lg">
                  Unsere Content-Strategien liefern konkrete, messbare
                  Ergebnisse für Ihr Unternehmen
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-500">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Höhere Sichtbarkeit
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Verbesserte Positionen in den Suchergebnissen und erhöhter
                    organischer Traffic durch SEO-optimierte Inhalte.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span>Bessere Rankings für relevante Keywords</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span>Mehr qualifizierte Website-Besucher</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-500">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Mehr Engagement
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Höhere Interaktionsraten durch relevante, wertvolle Inhalte,
                    die Ihre Zielgruppe ansprechen.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span>Längere Verweildauer auf der Website</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span>Mehr Social Media Interaktionen</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-500">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Bessere Conversion
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Höhere Umwandlungsraten von Besuchern zu Leads und von Leads
                    zu Kunden.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span>Mehr qualifizierte Leads</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span>Kürzere Verkaufszyklen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Bereit, Ihre Content-Strategie zu revolutionieren?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam eine maßgeschneiderte Content-Strategie
                entwickeln, die Ihre Marke stärkt und messbare Ergebnisse
                liefert.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => (window.location.href = "/consultation")}
              >
                <span className="flex items-center">
                  <span>Kostenlose Erstberatung vereinbaren</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

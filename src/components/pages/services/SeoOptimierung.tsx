import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Globe,
  Search,
  Code,
  FileText,
  ArrowRight,
  CheckCircle,
  BarChart3,
  TrendingUp,
  Zap,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const seoServices = [
  {
    title: "OnPage Optimierung",
    icon: FileText,
    description:
      "Optimierung von Inhalten, Meta-Tags, Struktur und internen Verlinkungen für bessere Rankings.",
    color: "emerald",
  },
  {
    title: "OffPage Optimierung",
    icon: Globe,
    description:
      "Aufbau hochwertiger Backlinks und Stärkung der Domain-Autorität durch strategische Maßnahmen.",
    color: "emerald",
  },
  {
    title: "Technisches SEO",
    icon: Code,
    description:
      "Verbesserung der technischen Grundlagen wie Ladezeit, Mobile-Optimierung und Crawlability.",
    color: "emerald",
  },
  {
    title: "Content Optimierung",
    icon: Search,
    description:
      "Erstellung und Optimierung von Inhalten basierend auf Keyword-Recherche und User Intent.",
    color: "emerald",
  },
];

const stats = [
  { value: "92%", label: "mehr organischer Traffic durch SEO-Optimierung" },
  { value: "Top 3", label: "Rankings für relevante Keywords" },
  {
    value: "4.5x",
    label: "höhere Conversion-Rate durch qualifizierten Traffic",
  },
];

export default function SeoOptimierung() {
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
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-emerald-50/90 to-white py-24 sm:py-32">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-primary/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-emerald-200/30"
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
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-5 mx-auto mb-8 shadow-lg shadow-emerald-200">
                  <Globe className="w-10 h-10" />
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-scandia mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-600">
                  SEO Optimierung
                </h1>

                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Verbessern Sie Ihre Sichtbarkeit in Suchmaschinen, erreichen
                  Sie mehr qualifizierte Besucher und steigern Sie Ihren Umsatz
                  nachhaltig.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
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
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-full px-8"
                  >
                    SEO Audit anfordern
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
                      className="bg-emerald-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="text-4xl font-bold text-emerald-600 mb-2">
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
                  Unsere SEO Strategie
                </h2>

                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Wir optimieren Ihre Website ganzheitlich für Suchmaschinen und
                  verbessern Ihr Ranking nachhaltig. Unser Fokus liegt auf
                  langfristigem Erfolg durch White-Hat-SEO-Methoden und
                  datengetriebene Entscheidungen.
                </p>

                <div className="space-y-8">
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-emerald-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          SEO Audit & Analyse
                        </h3>
                        <p className="text-gray-700">
                          Wir führen eine umfassende Analyse Ihrer Website und
                          der Wettbewerbssituation durch. Dabei identifizieren
                          wir technische Probleme, Content-Lücken und
                          Optimierungspotenziale. Diese Analyse bildet die
                          Grundlage für unsere maßgeschneiderte SEO-Strategie.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-emerald-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Keyword-Recherche & Strategie
                        </h3>
                        <p className="text-gray-700">
                          Basierend auf umfangreicher Keyword-Recherche
                          identifizieren wir relevante Suchbegriffe mit hohem
                          Potenzial. Wir analysieren Suchvolumen, Wettbewerb und
                          User Intent, um die optimale Strategie für Ihre
                          Branche und Ziele zu entwickeln.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-emerald-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Optimierung & Monitoring
                        </h3>
                        <p className="text-gray-700">
                          Wir setzen technische und inhaltliche Optimierungen
                          um, bauen hochwertige Backlinks auf und verbessern
                          kontinuierlich die User Experience. Durch regelmäßiges
                          Monitoring und Reporting passen wir unsere Strategie
                          an und maximieren Ihren SEO-Erfolg.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="sticky top-32">
                <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

                  <h2 className="text-2xl font-bold mb-8 text-gray-900 relative z-10">
                    Unsere SEO-Services
                  </h2>

                  <motion.div
                    className="space-y-6 relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {seoServices.map((service, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                      >
                        <div className="flex items-start">
                          <div
                            className={`w-10 h-10 rounded-lg bg-${service.color}-100 text-${service.color}-600 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-${service.color}-600 group-hover:text-white transition-colors duration-300`}
                          >
                            <service.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="mt-8 relative z-10">
                    <Button
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
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
                <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-4">
                  Messbare Ergebnisse
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-6">
                  Was Sie von unserer SEO-Optimierung erwarten können
                </h2>
                <p className="text-gray-700 text-lg">
                  Unsere SEO-Strategien liefern konkrete, messbare Ergebnisse
                  für Ihr Unternehmen
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-emerald-500">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Bessere Rankings
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Höhere Positionen in den Suchergebnissen für relevante
                    Keywords und Suchanfragen.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      <span>Top-Positionen für wichtige Keywords</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      <span>Verbesserte lokale Sichtbarkeit</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-emerald-500">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Mehr Traffic
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Deutliche Steigerung des organischen Traffics durch
                    verbesserte Sichtbarkeit.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      <span>Mehr qualifizierte Besucher</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      <span>Geringere Absprungrate</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-emerald-500">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Höhere Conversion
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Mehr Leads und Verkäufe durch zielgerichteten,
                    qualifizierten Traffic.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      <span>Bessere Conversion-Raten</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      <span>Höherer ROI Ihrer Marketingausgaben</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-emerald-600 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Bereit, Ihre Sichtbarkeit zu steigern?
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam eine maßgeschneiderte SEO-Strategie
                entwickeln, die Ihre Online-Präsenz stärkt und messbare
                Ergebnisse liefert.
              </p>
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => (window.location.href = "/consultation")}
              >
                <span className="flex items-center">
                  <span>Kostenlosen SEO-Check vereinbaren</span>
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

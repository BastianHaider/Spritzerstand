import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  BarChart,
  LineChart,
  PieChart,
  Target,
  ArrowRight,
  CheckCircle,
  Zap,
  DollarSign,
  BarChart3,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const performanceServices = [
  {
    title: "Google Ads",
    icon: Target,
    description:
      "Zielgerichtete Suchanzeigen, Display-Kampagnen und YouTube-Werbung für maximale Reichweite und Conversion.",
    color: "purple",
  },
  {
    title: "Meta Ads",
    icon: PieChart,
    description:
      "Effektive Werbekampagnen auf Facebook, Instagram und dem Meta Audience Network.",
    color: "purple",
  },
  {
    title: "Display Advertising",
    icon: LineChart,
    description:
      "Visuelle Anzeigen auf Premium-Websites und in Apps für Branding und Reichweite.",
    color: "purple",
  },
  {
    title: "Remarketing",
    icon: BarChart,
    description:
      "Gezielte Ansprache von Website-Besuchern, die noch nicht konvertiert haben.",
    color: "purple",
  },
];

const stats = [
  { value: "480%", label: "durchschnittlicher ROAS unserer Kampagnen" },
  { value: "-35%", label: "niedrigere Cost-per-Acquisition" },
  { value: "2.3x", label: "höhere Conversion-Rate durch A/B-Testing" },
];

export default function PerformanceMarketing() {
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
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-purple-50/90 to-white py-24 sm:py-32">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-primary/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

          {/* Animated chart elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-16 h-16"
            animate={{
              y: [0, -15, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path
                d="M10,90 L30,50 L50,70 L70,30 L90,10"
                stroke="#9333ea"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="200"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 left-1/5 w-24 h-24"
            animate={{
              y: [0, 20, 0],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.rect
                x="10"
                y="40"
                width="15"
                height="50"
                rx="2"
                fill="#9333ea30"
                initial={{ height: 0, y: 90 }}
                animate={{ height: 50, y: 40 }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
              />
              <motion.rect
                x="30"
                y="30"
                width="15"
                height="60"
                rx="2"
                fill="#9333ea50"
                initial={{ height: 0, y: 90 }}
                animate={{ height: 60, y: 30 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />
              <motion.rect
                x="50"
                y="20"
                width="15"
                height="70"
                rx="2"
                fill="#9333ea70"
                initial={{ height: 0, y: 90 }}
                animate={{ height: 70, y: 20 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />
              <motion.rect
                x="70"
                y="10"
                width="15"
                height="80"
                rx="2"
                fill="#9333ea90"
                initial={{ height: 0, y: 90 }}
                animate={{ height: 80, y: 10 }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />
            </svg>
          </motion.div>

          <div className="container relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 mx-auto mb-8 shadow-lg shadow-purple-200">
                  <BarChart className="w-10 h-10" />
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-scandia mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-700 to-purple-600">
                  Performance Marketing
                </h1>

                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Maximieren Sie Ihren ROI durch datengetriebene Werbekampagnen
                  auf allen relevanten Kanälen und erreichen Sie messbare
                  Ergebnisse.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
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
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full px-8"
                  >
                    Kampagnen-Audit anfordern
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
                      className="bg-purple-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="text-4xl font-bold text-purple-600 mb-2">
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
                  Unsere Performance Marketing Strategie
                </h2>

                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Wir entwickeln und optimieren Ihre Werbekampagnen
                  kontinuierlich für maximale Performance. Unser Fokus liegt auf
                  messbaren Ergebnissen, ROI-Optimierung und datengetriebenen
                  Entscheidungen.
                </p>

                <div className="space-y-8">
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Strategisches Kampagnen-Setup
                        </h3>
                        <p className="text-gray-700">
                          Wir entwickeln maßgeschneiderte Kampagnenstrukturen
                          basierend auf Ihren Geschäftszielen, Zielgruppen und
                          Wettbewerbsanalysen. Unsere Experten richten Ihre
                          Kampagnen mit präzisen Targeting-Optionen, optimierten
                          Anzeigentexten und effektiven Gebotstrategien ein.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Kontinuierliche Optimierung & A/B Testing
                        </h3>
                        <p className="text-gray-700">
                          Durch systematisches A/B-Testing und datenbasierte
                          Optimierung verbessern wir kontinuierlich die
                          Performance Ihrer Kampagnen. Wir testen verschiedene
                          Anzeigenformate, Botschaften, Zielgruppen und
                          Landingpages, um die effektivsten Kombinationen zu
                          identifizieren.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Transparentes Reporting & Analyse
                        </h3>
                        <p className="text-gray-700">
                          Wir liefern detaillierte, verständliche Berichte mit
                          allen relevanten KPIs und Metriken. Unsere Analysen
                          gehen über reine Zahlen hinaus und bieten wertvolle
                          Einblicke und Handlungsempfehlungen für die
                          kontinuierliche Verbesserung Ihrer Kampagnen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="sticky top-32">
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

                  <h2 className="text-2xl font-bold mb-8 text-gray-900 relative z-10">
                    Unsere Performance-Services
                  </h2>

                  <motion.div
                    className="space-y-6 relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {performanceServices.map((service, index) => (
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
                            <h3 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
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
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
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
                <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                  Messbare Ergebnisse
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-6">
                  Was Sie von unserem Performance Marketing erwarten können
                </h2>
                <p className="text-gray-700 text-lg">
                  Unsere Performance-Strategien liefern konkrete, messbare
                  Ergebnisse für Ihr Unternehmen
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-purple-500">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Höherer ROI
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Maximierung Ihres Return on Investment durch effiziente
                    Budgetallokation und Kampagnenoptimierung.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <span>Bessere Kosten-Nutzen-Verhältnisse</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <span>Optimierte Werbeausgaben</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-purple-500">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Mehr Conversions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Steigerung der Conversion-Raten durch gezielte Ansprache und
                    optimierte Landingpages.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <span>Höhere Abschlussraten</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <span>Geringere Abbruchraten</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-purple-500">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Skalierbarkeit
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Flexible Skalierung erfolgreicher Kampagnen für nachhaltiges
                    Wachstum.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <span>
                        Schnelles Hochskalieren erfolgreicher Kampagnen
                      </span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <span>Kontinuierliches Wachstum</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Bereit, Ihre Performance zu steigern?
              </h2>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam eine maßgeschneiderte
                Performance-Marketing-Strategie entwickeln, die Ihren ROI
                maximiert und messbare Ergebnisse liefert.
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => (window.location.href = "/consultation")}
              >
                <span className="flex items-center">
                  <span>Kostenloses Kampagnen-Audit vereinbaren</span>
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

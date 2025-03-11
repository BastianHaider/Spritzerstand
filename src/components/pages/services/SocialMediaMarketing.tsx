import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Megaphone,
  Users,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Instagram,
  Facebook,
  Linkedin,
  BarChart3,
  Heart,
  Share2,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const socialServices = [
  {
    title: "Content Creation",
    icon: Instagram,
    description:
      "Professionelle Erstellung von ansprechenden Inhalten für alle relevanten Social-Media-Plattformen.",
    color: "rose",
  },
  {
    title: "Community Management",
    icon: MessageSquare,
    description:
      "Aktive Betreuung und Moderation Ihrer Social-Media-Kanäle für maximales Engagement.",
    color: "rose",
  },
  {
    title: "Social Media Ads",
    icon: TrendingUp,
    description:
      "Zielgerichtete Werbekampagnen auf Social-Media-Plattformen für mehr Reichweite und Conversions.",
    color: "rose",
  },
  {
    title: "Influencer Marketing",
    icon: Users,
    description:
      "Strategische Kooperationen mit relevanten Influencern in Ihrer Branche.",
    color: "rose",
  },
];

const stats = [
  { value: "85%", label: "höhere Engagement-Rate durch optimierte Inhalte" },
  { value: "3.2x", label: "mehr Reichweite durch strategische Kampagnen" },
  { value: "+64%", label: "Steigerung der Brand Awareness" },
];

export default function SocialMediaMarketing() {
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
        <div className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-rose-50/90 to-white py-24 sm:py-32">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-rose-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-primary/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

          {/* Animated social media icons */}
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
            <div className="relative w-full h-full">
              <motion.div
                className="absolute top-0 left-0 w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center text-white"
                animate={{
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Instagram className="w-4 h-4" />
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white"
                animate={{
                  x: [0, -5, 0],
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Facebook className="w-5 h-5" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-0 w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center text-white"
                animate={{
                  x: [0, 8, 0],
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Linkedin className="w-3 h-3" />
              </motion.div>
            </div>
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
            <div className="relative w-full h-full">
              <motion.div
                className="absolute top-1/4 left-1/4 flex items-center space-x-1"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                <span className="text-xs font-medium text-gray-700">42</span>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 right-1/4 flex items-center space-x-1"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Share2 className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-medium text-gray-700">12</span>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 flex items-center space-x-1"
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <MessageSquare className="w-4 h-4 text-green-500" />
                <span className="text-xs font-medium text-gray-700">8</span>
              </motion.div>
            </div>
          </motion.div>

          <div className="container relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 text-white p-5 mx-auto mb-8 shadow-lg shadow-rose-200">
                  <Megaphone className="w-10 h-10" />
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-scandia mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-rose-700 to-rose-600">
                  Social Media Marketing
                </h1>

                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Bauen Sie eine starke Social Media Präsenz auf, verbinden Sie
                  sich mit Ihrer Zielgruppe und steigern Sie Ihre
                  Markenbekanntheit nachhaltig.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
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
                    className="border-rose-600 text-rose-600 hover:bg-rose-50 rounded-full px-8"
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
                      className="bg-rose-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="text-4xl font-bold text-rose-600 mb-2">
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
                  Unsere Social Media Strategie
                </h2>

                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Wir entwickeln eine maßgeschneiderte Social Media Strategie,
                  die Ihre Marke stärkt, echte Verbindungen zu Ihrer Zielgruppe
                  aufbaut und messbare Ergebnisse liefert. Unser Ansatz basiert
                  auf datengetriebenen Erkenntnissen und jahrelanger Erfahrung.
                </p>

                <div className="space-y-8">
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-rose-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Strategie-Entwicklung
                        </h3>
                        <p className="text-gray-700">
                          Wir analysieren Ihre Zielgruppe, Wettbewerber und
                          aktuelle Social-Media-Trends, um eine maßgeschneiderte
                          Strategie zu entwickeln. Dabei definieren wir klare
                          Ziele, relevante Plattformen und den optimalen
                          Content-Mix für Ihre Marke.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-rose-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Content-Erstellung & Planung
                        </h3>
                        <p className="text-gray-700">
                          Unser Kreativteam erstellt hochwertige,
                          plattformspezifische Inhalte, die Ihre Zielgruppe
                          begeistern und zum Handeln anregen. Mit einem
                          strategischen Content-Kalender sorgen wir für
                          konsistente Präsenz und maximale Wirkung.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-rose-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Community Management & Analyse
                        </h3>
                        <p className="text-gray-700">
                          Wir betreuen Ihre Social-Media-Kanäle aktiv,
                          interagieren mit Ihrer Community und reagieren zeitnah
                          auf Anfragen. Durch kontinuierliche Analyse und
                          Reporting optimieren wir Ihre Strategie und maximieren
                          Ihren ROI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="sticky top-32">
                <div className="bg-gradient-to-br from-rose-50 to-white rounded-2xl p-8 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-rose-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

                  <h2 className="text-2xl font-bold mb-8 text-gray-900 relative z-10">
                    Unsere Social Media Services
                  </h2>

                  <motion.div
                    className="space-y-6 relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {socialServices.map((service, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                      >
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                            <service.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
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
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-lg py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
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
                <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-4">
                  Messbare Ergebnisse
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-6">
                  Was Sie von unserem Social Media Marketing erwarten können
                </h2>
                <p className="text-gray-700 text-lg">
                  Unsere Social-Media-Strategien liefern konkrete, messbare
                  Ergebnisse für Ihr Unternehmen
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-rose-500">
                  <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Größere Community
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Aufbau einer engagierten, loyalen Community rund um Ihre
                    Marke.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                      <span>Mehr Follower und Abonnenten</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                      <span>Höhere Interaktionsraten</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-rose-500">
                  <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Stärkere Marke
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Steigerung der Markenbekanntheit und -wahrnehmung in Ihrer
                    Zielgruppe.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                      <span>Höhere Brand Awareness</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                      <span>Verbessertes Markenimage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-rose-500">
                  <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Mehr Conversions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Umwandlung von Social-Media-Nutzern in Leads und Kunden.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                      <span>Höhere Klickraten auf Ihre Website</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                      <span>Mehr qualifizierte Leads</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-rose-600 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Bereit, Ihre Social Media Präsenz zu stärken?
              </h2>
              <p className="text-rose-100 text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam eine maßgeschneiderte
                Social-Media-Strategie entwickeln, die Ihre Marke stärkt und
                messbare Ergebnisse liefert.
              </p>
              <Button
                size="lg"
                className="bg-white text-rose-600 hover:bg-rose-50 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => (window.location.href = "/consultation")}
              >
                <span className="flex items-center">
                  <span>Kostenlose Social Media Analyse vereinbaren</span>
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

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart,
  Globe,
  Megaphone,
  PenTool,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Content Marketing",
    description:
      "Erstellen Sie hochwertigen Content, der Ihre Zielgruppe begeistert und zu mehr Conversions führt.",
    icon: PenTool,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    hoverBg: "hover:bg-blue-50",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    href: "/services/content-marketing",
    benefits: [
      "Zielgruppengerechte Inhalte",
      "SEO-optimierte Texte",
      "Storytelling & Branding",
      "Content-Strategie",
    ],
  },
  {
    title: "SEO Optimierung",
    description:
      "Verbessern Sie Ihre Sichtbarkeit in Suchmaschinen und erreichen Sie mehr qualifizierte Besucher.",
    icon: Globe,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    hoverBg: "hover:bg-emerald-50",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-emerald-600",
    href: "/services/seo-optimierung",
    benefits: [
      "Keyword-Recherche",
      "OnPage & OffPage SEO",
      "Technische Optimierung",
      "Ranking-Verbesserung",
    ],
  },
  {
    title: "Performance Marketing",
    description:
      "Maximieren Sie Ihren ROI durch datengetriebene Werbekampagnen auf allen relevanten Kanälen.",
    icon: BarChart,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    hoverBg: "hover:bg-purple-50",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
    href: "/services/performance-marketing",
    benefits: [
      "Google & Meta Ads",
      "Conversion-Optimierung",
      "A/B Testing",
      "ROI-Maximierung",
    ],
  },
  {
    title: "Social Media Marketing",
    description:
      "Bauen Sie eine starke Social Media Präsenz auf und verbinden Sie sich mit Ihrer Zielgruppe.",
    icon: Megaphone,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    hoverBg: "hover:bg-rose-50",
    gradientFrom: "from-rose-500",
    gradientTo: "to-rose-600",
    href: "/services/social-media-marketing",
    benefits: [
      "Content-Erstellung",
      "Community Management",
      "Influencer Marketing",
      "Paid Social Ads",
    ],
  },
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="services" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-secondary/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-secondary text-sm font-medium mb-4">
              Unsere Expertise
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-6"
              itemProp="name"
            >
              Maßgeschneiderte Lösungen für Ihr
              <span className="relative ml-3 inline-block">
                <span className="relative z-10">Marketing</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-primary/30 -z-10 rounded"></span>
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Wir kombinieren Kreativität mit datengetriebenen Strategien, um
              messbare Ergebnisse für Ihr Unternehmen zu erzielen.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div
                className={`h-full rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 ${hoveredService === index ? "shadow-xl scale-105" : "hover:shadow-md hover:scale-102"} relative overflow-hidden`}
              >
                {/* Decorative corner accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rounded-full bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}
                ></div>

                {/* Icon with gradient background */}
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>

                  <h3 className="text-xl font-bold font-scandia mb-3 text-brand-dark group-hover:text-brand-secondary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Benefits list */}
                  <ul className="space-y-2 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle
                          className={`w-4 h-4 mr-2 mt-0.5 ${service.color} flex-shrink-0`}
                        />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="relative z-10 mt-auto">
                  <Button
                    className={`w-full bg-white border border-gray-200 hover:border-transparent hover:text-white group-hover:bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} transition-all duration-300`}
                    onClick={() => (window.location.href = service.href)}
                  >
                    <span className="flex items-center justify-center w-full">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

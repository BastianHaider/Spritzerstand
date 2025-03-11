import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, BarChart3, TrendingUp, Users } from "lucide-react";

export default function CaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const caseStudies = [
    {
      client: "TechStart GmbH",
      industry: "SaaS / Tech",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60",
      title: "Social Media Kampagne für Tech-Startup",
      metrics: [
        {
          label: "Engagement",
          value: "+250%",
          icon: Users,
          color: "text-blue-500",
        },
        {
          label: "Leads",
          value: "+120%",
          icon: TrendingUp,
          color: "text-emerald-500",
        },
        {
          label: "ROI",
          value: "320%",
          icon: BarChart3,
          color: "text-purple-500",
        },
      ],
      description:
        "Durch gezielte Content-Strategie und Community Management konnten wir das Engagement signifikant steigern und die Lead-Generierung mehr als verdoppeln.",
      tags: ["Social Media", "Content Marketing", "Lead Generation"],
      year: "2023",
    },
    {
      client: "FashionNow",
      industry: "E-Commerce",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
      title: "E-Commerce Performance Marketing",
      metrics: [
        {
          label: "ROAS",
          value: "+180%",
          icon: BarChart3,
          color: "text-purple-500",
        },
        {
          label: "Conversion",
          value: "+75%",
          icon: TrendingUp,
          color: "text-emerald-500",
        },
        {
          label: "Traffic",
          value: "+210%",
          icon: Users,
          color: "text-blue-500",
        },
      ],
      description:
        "Optimierte Meta & Google Ads Kampagnen führten zu einer deutlichen Steigerung des Return on Ad Spend und einer Conversion-Rate-Steigerung von 75%.",
      tags: ["Performance Marketing", "Google Ads", "Meta Ads"],
      year: "2023",
    },
    {
      client: "IndustrySolutions",
      industry: "B2B / Manufacturing",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60",
      title: "B2B Content & SEO Strategie",
      metrics: [
        {
          label: "Org. Traffic",
          value: "+400%",
          icon: Users,
          color: "text-blue-500",
        },
        {
          label: "Leads",
          value: "+150%",
          icon: TrendingUp,
          color: "text-emerald-500",
        },
        {
          label: "Rankings",
          value: "Top 3",
          icon: BarChart3,
          color: "text-purple-500",
        },
      ],
      description:
        "Durch SEO-optimierten Content und gezielte Backlink-Strategie konnten wir den organischen Traffic vervierfachen und die Anzahl der qualifizierten Leads deutlich steigern.",
      tags: ["SEO", "Content Marketing", "B2B"],
      year: "2022",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="case-study"
      className="py-16 sm:py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 w-full"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-brand-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-brand-secondary/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-secondary text-sm font-medium mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-6">
              Unsere
              <span className="relative mx-3 inline-block">
                <span className="relative z-10">Erfolgsgeschichten</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-primary/30 -z-10 rounded"></span>
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Echte Resultate durch datengetriebenes Marketing und
              maßgeschneiderte Strategien
            </p>
          </motion.div>
        </div>

        <div
          ref={containerRef}
          className="max-w-6xl mx-auto w-full px-4 sm:px-6"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8 sm:space-y-16"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-4 sm:gap-8 bg-white rounded-2xl shadow-lg overflow-hidden w-full`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-2/5 h-56 sm:h-64 md:h-auto relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/80 to-brand-primary/80 opacity-60 mix-blend-multiply z-10"></div>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-medium px-3 py-1 rounded-full">
                      {study.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-white text-lg font-bold mb-1">
                      {study.client}
                    </h3>
                    <p className="text-white/80 text-sm">{study.industry}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-3/5 p-4 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-4">
                      {study.title}
                    </h3>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                      {study.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center p-2 sm:p-3 bg-gray-50 rounded-lg"
                        >
                          <metric.icon
                            className={`w-5 h-5 ${metric.color} mb-1`}
                          />
                          <span
                            className={`text-base sm:text-xl font-bold ${metric.color}`}
                          >
                            {metric.value}
                          </span>
                          <span className="text-[10px] sm:text-xs text-gray-500">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                      {study.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {study.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-brand-primary/10 text-brand-secondary px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <a
                      href={
                        index === 0
                          ? "/case-studies/techstart"
                          : index === 1
                            ? "/case-studies/fashionnow"
                            : "/case-studies/industrysolutions"
                      }
                      className="inline-flex items-center text-sm font-medium border border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white px-4 py-2 rounded-md transition-all duration-300 group"
                    >
                      Vollständige Case Study
                      <ArrowUpRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

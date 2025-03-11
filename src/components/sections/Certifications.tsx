import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Google Ads Search",
    image: "/images/certifications/ads-search.png",
    issuer: "Google",
    year: "2023",
    description:
      "Expertise in der Erstellung und Optimierung von Google Suchanzeigen",
    link: "#",
  },
  {
    name: "Google Analytics",
    image:
      "https://lh3.googleusercontent.com/JMYTnLvCsXZvGQQer7OMnFEDh_NP-GsBrjMTds_LSOdVWUY9_xmzgQdMnKPZ05PVsIcQYQmJfJ4XU1Zj6-tT3qzr=w128-h128-e365-rj-sc0x00ffffff",
    issuer: "Google",
    year: "2023",
    description: "Professionelle Analyse und Auswertung von Website-Daten",
    link: "#",
  },
  {
    name: "Meta Blueprint",
    image:
      "https://scontent.fvie1-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-blueprint-certification-logo.svg?_nc_cat=1&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=qQDwEgL1K1MAX9Gn9Ck&_nc_ht=scontent.fvie1-1.fna&oh=00_AfDXXHG-AKVHDvDJPF9oE3kGRHJaQoESdF1uTxQdLgQpQw&oe=64C3F1B1",
    issuer: "Meta",
    year: "2023",
    description:
      "Zertifizierte Expertise in Meta Ads und Social Media Marketing",
    link: "#",
  },
  {
    name: "HubSpot Inbound Marketing",
    image:
      "https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_the-logo.svg",
    issuer: "HubSpot",
    year: "2022",
    description: "Spezialisierung auf Inbound Marketing Strategien",
    link: "#",
  },
  {
    name: "SEMrush SEO",
    image: "https://cdn.semrush.com/static/index/semrush-logo-700x394.jpg",
    issuer: "SEMrush",
    year: "2023",
    description:
      "Professionelle Suchmaschinenoptimierung und Content-Strategie",
    link: "#",
  },
];

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const visibleCertifications = 3; // Number of visible certifications on desktop

  const nextCertification = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCertification = () => {
    setDirection("left");
    setActiveIndex(
      (prev) => (prev - 1 + certifications.length) % certifications.length,
    );
  };

  // Calculate visible certifications based on activeIndex
  const getVisibleCertifications = () => {
    const result = [];
    for (let i = 0; i < visibleCertifications; i++) {
      const index = (activeIndex + i) % certifications.length;
      result.push({
        ...certifications[index],
        position: i,
      });
    }
    return result;
  };

  const variants = {
    enter: (direction) => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-brand-secondary/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/4"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-secondary text-sm font-medium mb-4">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-6">
              Unsere
              <span className="relative mx-3 inline-block">
                <span className="relative z-10">Zertifizierungen</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-primary/30 -z-10 rounded"></span>
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Unsere Expertise wird durch offizielle Zertifizierungen und
              kontinuierliche Weiterbildung bestätigt
            </p>
          </motion.div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="flex justify-center items-stretch gap-8">
            {getVisibleCertifications().map((cert, index) => (
              <motion.div
                key={`${cert.name}-${cert.position}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="w-1/3 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5"></div>
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-h-32 max-w-full object-contain relative z-10"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-secondary transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <span className="text-xs font-medium bg-brand-primary/10 text-brand-secondary px-2 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    Ausgestellt von {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">
                    {cert.description}
                  </p>
                  <a
                    href={cert.link}
                    className="inline-flex items-center text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors duration-300 mt-auto"
                  >
                    Zertifikat ansehen
                    <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevCertification}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-dark hover:text-brand-secondary transition-colors duration-300 focus:outline-none"
            aria-label="Vorherige Zertifizierung"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextCertification}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-dark hover:text-brand-secondary transition-colors duration-300 focus:outline-none"
            aria-label="Nächste Zertifizierung"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? "right" : "left");
                  setActiveIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-brand-secondary w-6" : "bg-gray-300 hover:bg-gray-400"}`}
                aria-label={`Gehe zu Zertifizierung ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile view - grid layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="h-32 bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-base font-bold text-brand-dark">
                    {cert.name}
                  </h3>
                  <span className="text-xs font-medium bg-brand-primary/10 text-brand-secondary px-2 py-0.5 rounded-full">
                    {cert.year}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-2">
                  Ausgestellt von {cert.issuer}
                </p>
                <a
                  href={cert.link}
                  className="inline-flex items-center text-xs font-medium text-brand-secondary mt-2"
                >
                  Details
                  <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

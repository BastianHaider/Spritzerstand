import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);

  // Client logos from uploaded images
  const logos = [
    {
      id: 1,
      alt: "Pegasus Solution",
      src: "/images/clients/pegasus.png",
      bgColor: "bg-gray-900",
      invert: false,
    },
    {
      id: 2,
      alt: "Sun Energy",
      src: "/images/clients/sun-energy.png",
      bgColor: "bg-gray-900",
      invert: false,
    },
    {
      id: 3,
      alt: "Blocks Tech",
      src: "/images/clients/blocks.png",
      bgColor: "bg-white",
      invert: true,
    },
    {
      id: 4,
      alt: "Servas AI",
      src: "/images/clients/servas.png",
      bgColor: "bg-gradient-to-br from-orange-400 to-red-600",
      invert: false,
    },
  ];

  // Rotate through logos every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, rotateY: -90 },
    animate: { opacity: 1, rotateY: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, rotateY: 90, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-3">
            Unsere Kunden vertrauen uns
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wir arbeiten mit führenden Unternehmen in verschiedenen Branchen
            zusammen und liefern maßgeschneiderte Marketinglösungen für
            nachhaltigen Erfolg
          </p>
        </motion.div>

        <div ref={containerRef} className="overflow-hidden">
          {/* Desktop Logo Grid with Rotation */}
          <div className="hidden md:flex flex-wrap justify-center gap-8">
            {logos.map((logo, index) => (
              <div
                key={logo.id}
                className="perspective-1200 w-[180px] h-[180px]"
              >
                <AnimatePresence mode="wait">
                  {index === activeLogoIndex && (
                    <motion.div
                      key={`rotating-${logo.id}`}
                      variants={logoVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`w-full h-full flex items-center justify-center grayscale-0 rounded-xl overflow-hidden shadow-lg ${logo.bgColor}`}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className={`max-h-[70%] max-w-[70%] object-contain ${logo.invert ? "invert" : ""}`}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Static Logo Display */}
          <motion.div
            className="hidden md:grid grid-cols-4 gap-8 items-center justify-items-center mt-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {logos.map((logo) => (
              <motion.div
                key={`static-${logo.id}`}
                variants={itemVariants}
                className={`w-full max-w-[180px] h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 rounded-xl overflow-hidden ${logo.bgColor}`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`max-h-full max-w-full object-contain p-4 ${logo.invert ? "invert" : ""}`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Logo Slider */}
          <div className="md:hidden overflow-hidden">
            <div className="flex space-x-4 animate-marquee py-4">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className={`flex-shrink-0 w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 rounded-xl overflow-hidden mx-4 ${logo.bgColor}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`max-h-full max-w-full object-contain p-3 ${logo.invert ? "invert" : ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

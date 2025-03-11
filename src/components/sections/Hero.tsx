import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { smoothScroll } from "@/lib/smoothScroll";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    // No interval needed for static text

    // Simulate loading time for the animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative">
      {/* Main Hero Section */}
      <div className="min-h-[100vh] relative overflow-hidden">
        {/* Blurred gradient background like in the image */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-red-500 z-0"></div>

        {/* Additional blur effects */}
        <div className="absolute inset-0 backdrop-blur-3xl z-0"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-800/40 via-purple-600/30 to-red-400/40 blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tl from-purple-900/50 via-purple-700/40 to-red-500/50 blur-3xl z-0"></div>

        <div className="container mx-auto px-4 py-32 md:py-40 relative z-20 flex flex-col items-center justify-center min-h-[70vh]">
          {/* Centered Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase mb-8 glow">
              ERREICHE NEUE <span className="text-white">*</span>
              <br />
              HÖHEN MIT{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-brand-primary inline-block"
                >
                  WHITEPEAK
                </motion.span>
              </AnimatePresence>
            </h1>

            <div className="mt-8">
              <Button
                onClick={() => (window.location.href = "/consultation")}
                className="bg-yellow-300 hover:bg-yellow-400 text-brand-secondary font-medium rounded-full px-10 py-7 text-lg"
              >
                <span className="flex items-center">
                  <span>Kostenlose Beratung</span>
                  <ArrowRight className="ml-2 h-6 w-6" />
                </span>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 mx-auto w-fit z-20 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => smoothScroll("services")}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="flex flex-col items-center text-white"
          >
            <span className="text-sm font-medium mb-1">Entdecken Sie mehr</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Feature boxes removed as requested */}

      {/* Second Section - Value Proposition with normal padding (no feature boxes) */}
      <div className="bg-white pt-16 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 max-w-3xl">
              Wir kreieren wirkungsvolle Marken durch die Verbindung von
              Kreativität und Strategie für einzigartige Ergebnisse
            </h2>
            <p className="text-gray-600 max-w-2xl mb-8">
              Die Kraft von Innovation, Designkunst und strategischer
              Zusammenarbeit ermöglicht es uns, Ihre Marke auf die nächste Stufe
              zu heben.
            </p>
            <Button
              variant="outline"
              className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white rounded-full"
              onClick={() => smoothScroll("services")}
            >
              <span className="flex items-center">
                <span>Unsere Leistungen</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

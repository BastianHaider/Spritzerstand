import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { smoothScroll } from "@/lib/smoothScroll";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = [
    { text: "Content Marketing", color: "text-blue-600" },
    { text: "Leads", color: "text-emerald-600" },
    { text: "Advertising", color: "text-purple-600" },
  ];

  // Parallax effects
  const mountainBackY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const mountainMidY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const mountainFrontY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const cloudsY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    // Simulate loading time for the animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative isolate overflow-hidden bg-gradient-to-b from-brand-light via-brand-light to-white min-h-screen flex flex-col justify-center"
    >
      {/* 3D Mountain Scene with Parallax */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-50/80 to-brand-light/0"></div>

        {/* Clouds layer */}
        <motion.div
          className="absolute inset-0"
          style={{ y: cloudsY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0.7 : 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <div className="absolute top-[10%] left-[5%] w-[20%] h-[10%] bg-white rounded-full filter blur-md opacity-60"></div>
          <div className="absolute top-[15%] left-[25%] w-[30%] h-[8%] bg-white rounded-full filter blur-md opacity-70"></div>
          <div className="absolute top-[8%] right-[15%] w-[25%] h-[12%] bg-white rounded-full filter blur-md opacity-50"></div>
        </motion.div>

        {/* Background mountains */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[40%]"
          style={{ y: mountainBackY }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="absolute bottom-0 left-[-10%] w-[120%] h-full">
            <svg
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,400 L100,350 L200,380 L300,330 L400,360 L500,300 L600,350 L700,320 L800,370 L900,340 L1000,380 L1100,350 L1200,390 L1200,400 L0,400 Z"
                fill="#a4b8c4"
                opacity="0.6"
              />
            </svg>
          </div>
        </motion.div>

        {/* Middle mountains */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[45%]"
          style={{ y: mountainMidY }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5 }}
        >
          <div className="absolute bottom-0 left-[-10%] w-[120%] h-full">
            <svg
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,400 L0,250 L100,300 L200,200 L300,250 L400,180 L500,280 L600,220 L700,300 L800,230 L900,280 L1000,200 L1100,250 L1200,220 L1200,400 L0,400 Z"
                fill="#8da9b9"
                opacity="0.8"
              />
            </svg>
          </div>
        </motion.div>

        {/* Front mountain (WhitePeak) */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[50%]"
          style={{ y: mountainFrontY }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1.6, delay: 0.7 }}
        >
          <div className="absolute bottom-0 left-[20%] w-[60%] h-full">
            <svg
              viewBox="0 0 600 400"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <defs>
                <linearGradient
                  id="peakGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#e0e7ff" />
                  <stop offset="100%" stopColor="#c7d2fe" />
                </linearGradient>
              </defs>
              <path
                d="M0,400 L150,400 L300,100 L450,400 L600,400 L600,400 L0,400 Z"
                fill="url(#peakGradient)"
                className="drop-shadow-lg"
              />
              {/* Snow cap */}
              <path
                d="M270,160 L300,100 L330,160 L300,180 Z"
                fill="white"
                className="drop-shadow-md"
              />
            </svg>
          </div>
        </motion.div>

        {/* Glow effect on the peak */}
        <motion.div
          className="absolute bottom-[45%] left-[50%] w-4 h-4 rounded-full bg-white shadow-[0_0_40px_20px_rgba(255,255,255,0.8)]"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? [0, 0.8, 0] : 0 }}
          transition={{
            duration: 3,
            delay: 1.5,
            repeat: Infinity,
            repeatDelay: 5,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-32 sm:pt-32 sm:pb-40 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          style={{ y: titleY, opacity: titleOpacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-6 inline-block"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-secondary text-sm font-medium">
              Digital Marketing Agentur
            </span>
          </motion.div>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight font-scandia mb-6"
            itemProp="headline"
          >
            <span className="block text-brand-dark relative">
              <span className="relative inline-block">
                <span>Erreichen Sie neue</span>
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-3 bg-brand-primary/30 -z-10 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.8 }}
                />
              </span>
            </span>
            <span className="block text-brand-dark mt-2">
              <span className="glow font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-secondary bg-size-200 animate-gradient-x">
                Höhen
              </span>{" "}
              <span>mit</span>{" "}
              <span className="text-brand-secondary font-bold">WhitePeak</span>
            </span>
          </h1>

          <div className="mt-2 sm:mt-4 relative overflow-hidden h-[40px] sm:h-[60px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentWord}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-xl sm:text-2xl font-medium ${words[currentWord].color}`}
              >
                Spezialisiert auf {words[currentWord].text}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-brand-dark/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            Ihre führende Digital Marketing Agentur in Oberösterreich. Wir
            kombinieren Kreativität mit datengetriebenen Strategien für messbare
            Erfolge und nachhaltiges Wachstum.
          </motion.p>

          <motion.div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <Button
              size="lg"
              onClick={() => (window.location.href = "/consultation")}
              className="bg-brand-secondary hover:bg-brand-primary text-white border-none rounded-full px-8 py-6 group transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <span>Kostenlose Beratung</span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute top-0 right-full w-full h-full bg-white opacity-20 skew-x-30 transition-transform duration-500 group-hover:right-0"></span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-brand-secondary text-brand-secondary hover:text-white hover:bg-brand-secondary/10 rounded-full px-8"
            >
              Mehr erfahren
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={() => smoothScroll("services")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-brand-dark/70 mb-2">
            Entdecken Sie mehr
          </span>
          <ChevronDown className="h-6 w-6 text-brand-secondary" />
        </motion.div>
      </motion.div>
    </div>
  );
}

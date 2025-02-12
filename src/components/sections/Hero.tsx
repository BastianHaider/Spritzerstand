import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = [
    { text: "Content Marketing", color: "text-blue-600" },
    { text: "Leads", color: "text-emerald-600" },
    { text: "Advertising", color: "text-purple-600" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative isolate px-4 sm:px-6 pt-14 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-40">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight font-scandia">
            <span className="glow bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 block sm:inline">
              Maßgeschneiderte Lösungen für
            </span>{" "}
            <div className="mt-2 sm:mt-0 sm:inline-block">
              <span className="inline-block sm:w-[250px]">
                <span
                  key={currentWord}
                  className={`slide-up inline-block ${words[currentWord].color}`}
                >
                  {words[currentWord].text}
                </span>
              </span>
            </div>
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 px-4 sm:px-0">
            Effektive Strategien zur Kundengewinnung, reichweitenstarke
            Social-Media-Kampagnen und hochwertige Content-Marketing Lösungen.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4 sm:px-0">
            <Button
              size="lg"
              onClick={() => (window.location.href = "/consultation")}
            >
              Kostenlose Beratung
            </Button>
            <Button variant="outline" size="lg">
              Mehr erfahren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

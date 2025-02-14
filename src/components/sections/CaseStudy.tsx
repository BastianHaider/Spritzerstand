import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function CaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const socialPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60",
      title: "Social Media Kampagne für Startup",
      stats: "+250% Engagement",
      description:
        "Durch gezielte Content-Strategie und Community Management konnten wir das Engagement signifikant steigern.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
      title: "E-Commerce Performance",
      stats: "+180% ROAS",
      description:
        "Optimierte Meta & Google Ads Kampagnen führten zu einer deutlichen Steigerung des Return on Ad Spend.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60",
      title: "B2B Content Marketing",
      stats: "+400% Traffic",
      description:
        "Durch SEO-optimierten Content und gezielte Backlink-Strategie konnten wir den organischen Traffic vervierfachen.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-4">
              Unsere Erfolge
            </h2>
            <p className="text-gray-600 text-lg">
              Echte Resultate durch datengetriebenes Marketing
            </p>
          </ScrollReveal>
        </div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Laptop frame */}
          <div className="relative aspect-[16/9] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] p-[20px] shadow-xl perspective-1200">
            {/* Screen */}
            <div className="absolute inset-0 bg-white rounded-[1.5rem] overflow-hidden">
              {/* Screen content */}
              <motion.div
                style={{ y }}
                className="relative h-[115%] bg-gradient-to-b from-gray-50 to-white pt-8"
              >
                <div className="grid gap-8 px-8">
                  {socialPosts.map((post, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <h3 className="text-xl font-bold mb-2">
                            {post.title}
                          </h3>
                          <div className="text-2xl font-bold text-[#006C84] mb-3">
                            {post.stats}
                          </div>
                          <p className="text-gray-600">{post.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Laptop base */}
          <div className="absolute left-1/2 bottom-0 w-[40%] h-[3.5%] -translate-x-1/2 translate-y-1/2">
            <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-gray-800 to-gray-900 transform-gpu -skew-x-12 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

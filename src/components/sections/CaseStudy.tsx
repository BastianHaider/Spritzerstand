import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function CaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section
      id="case-study"
      className="py-20 sm:py-32 bg-white overflow-hidden"
    >
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
          {/* MacBook Pro frame */}
          <div className="relative aspect-[3/2] macbook-pro">
            {/* MacBook body - Moved before screen to be in front */}
            <div className="absolute left-1/2 bottom-0 w-[140%] h-[5%] -translate-x-1/2 translate-y-1/2 z-10">
              {/* Main body */}
              <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[#a1a1a1] to-[#999] transform-gpu -skew-x-12 rounded-lg shadow-lg">
                {/* Black strip */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#666]" />
              </div>
              {/* Bottom edge */}
              <div className="absolute inset-x-[10%] bottom-0 h-[2px] bg-[#888] transform-gpu -skew-x-12" />
            </div>
            {/* Screen bezel */}
            <div className="absolute inset-0 bg-black rounded-[1.5rem] p-[16px] shadow-lg">
              {/* Camera notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[20px] bg-black rounded-b-xl z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#333] ring-2 ring-[#222] ring-opacity-50" />
              </div>

              {/* Screen */}
              <div className="absolute inset-0 bg-white rounded-[0.8rem] overflow-hidden border-4 border-[#333]">
                {/* Screen content */}
                <div className="relative h-full bg-gradient-to-b from-gray-50 to-white p-6">
                  <div className="grid grid-cols-1 gap-4 h-full overflow-y-auto">
                    {socialPosts.map((post, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-lg flex"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-1/3 object-cover"
                        />
                        <div className="p-4 flex-1">
                          <h3 className="text-sm font-bold mb-1 line-clamp-1">
                            {post.title}
                          </h3>
                          <div className="text-lg font-bold text-[#006C84] mb-2">
                            {post.stats}
                          </div>
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {post.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

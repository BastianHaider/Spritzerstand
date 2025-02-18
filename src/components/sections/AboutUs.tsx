import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { SlideIn } from "@/components/ui/slide-in";

export default function AboutUs() {
  const team = [
    {
      name: "Bastian Haider",
      role: "Co-Founder & CEO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=bastian",
      bio: "Digital Marketing Experte mit langjähriger Erfahrung in der Entwicklung erfolgreicher Marketing-Strategien.",
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:b.haider@whitepeak.at", label: "Email" },
      ],
    },
    {
      name: "Dario Bjelobrk",
      role: "Co-Founder & CTO",
      image: "/images/team/dario.png",
      bio: "Vertriebs- und Marketingexperte mit Fokus auf innovative Lösungen und nachhaltige Kundenbeziehungen.",
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:d.bjelobrk@whitepeak.at", label: "Email" },
      ],
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <SlideIn direction="right">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-4">
              Über uns
            </h2>
          </SlideIn>
          <p className="text-gray-600 text-lg">
            Lernen Sie die Gründer von WhitePeak kennen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <Card
              key={member.name}
              className="overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mb-6 bg-[#FFCCBB] p-2"
                  />
                  <h3 className="text-xl font-bold mb-1 font-scandia text-[#006C84]">
                    {member.name}
                  </h3>
                  <p className="text-[#6EB5C0] font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex gap-4">
                    {member.social.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="text-[#006C84]/70 hover:text-[#006C84] transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

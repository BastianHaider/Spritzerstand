import { Linkedin, Mail, Award, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const team = [
    {
      name: "Bastian Haider",
      role: "Co-Founder & CEO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=bastian",
      bio: "Digital Marketing Experte mit langjähriger Erfahrung in der Entwicklung erfolgreicher Marketing-Strategien.",
      expertise: ["Content Strategy", "SEO", "Business Development"],
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:b.haider@whitepeak.at", label: "Email" },
      ],
    },
    {
      name: "Dario Bjelobrk",
      role: "Co-Founder & CTO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=dario",
      bio: "Vertriebs- und Marketingexperte mit Fokus auf innovative Lösungen und nachhaltige Kundenbeziehungen.",
      expertise: ["Performance Marketing", "Analytics", "CRM"],
      social: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:d.bjelobrk@whitepeak.at", label: "Email" },
      ],
    },
  ];

  const values = [
    {
      title: "Exzellenz",
      description:
        "Wir streben in jedem Projekt nach höchster Qualität und messbaren Ergebnissen.",
      icon: Award,
      color: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Innovation",
      description:
        "Wir bleiben stets am Puls der Zeit und setzen auf zukunftsweisende Strategien.",
      icon: Lightbulb,
      color: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      title: "Zielorientierung",
      description:
        "Wir fokussieren uns auf konkrete Ziele und messbare Erfolge für unsere Kunden.",
      icon: Target,
      color: "bg-emerald-50",
      iconColor: "text-emerald-500",
    },
    {
      title: "Partnerschaft",
      description:
        "Wir sehen uns als langfristigen Partner und nicht nur als Dienstleister.",
      icon: Users,
      color: "bg-rose-50",
      iconColor: "text-rose-500",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand-secondary/10 rounded-full blur-3xl translate-y-1/4 translate-x-1/4"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-secondary text-sm font-medium mb-4">
              Unser Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-6">
              Die Köpfe hinter
              <span className="relative ml-3 inline-block">
                <span className="relative z-10">WhitePeak</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-primary/30 -z-10 rounded"></span>
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Lernen Sie die Experten kennen, die Ihre Marketingziele in
              messbare Erfolge verwandeln
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group-hover:translate-y-[-8px]">
                <div className="h-24 bg-gradient-to-r from-brand-primary/80 to-brand-secondary/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=800')] opacity-20 mix-blend-overlay"></div>
                  <div className="absolute -bottom-16 left-6">
                    <div className="p-2 bg-white rounded-full ring-4 ring-white">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-20 px-6 pb-6">
                  <h3 className="text-xl font-bold font-scandia text-brand-dark group-hover:text-brand-secondary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-brand-secondary/80 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>

                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2 border-t border-gray-100">
                    {member.social.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="text-gray-400 hover:text-brand-secondary transition-colors duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-secondary text-sm font-medium mb-4">
                Unsere Werte
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-scandia mb-6">
                Was uns antreibt
              </h2>
              <p className="text-gray-600 text-lg max-w-xl mx-auto mb-12">
                Diese Grundsätze leiten unsere tägliche Arbeit und
                Zusammenarbeit mit unseren Kunden
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-50">
                  <div
                    className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-brand-dark group-hover:text-brand-secondary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

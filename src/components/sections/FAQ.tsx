import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, Search, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const faqCategories = [
  { id: "all", label: "Alle Fragen" },
  { id: "services", label: "Leistungen" },
  { id: "pricing", label: "Preise" },
  { id: "process", label: "Ablauf" },
];

const faqs = [
  {
    question: "Was kostet eine Beratung?",
    answer:
      "Die Erstberatung ist kostenlos. In diesem Gespräch analysieren wir Ihre aktuelle Situation und entwickeln erste Lösungsansätze.",
    category: "pricing",
  },
  {
    question: "Wie lange dauert die Zusammenarbeit?",
    answer:
      "Die Dauer der Zusammenarbeit hängt von Ihren Zielen und dem gewählten Service ab. Typische Projekte laufen zwischen 3-12 Monaten.",
    category: "process",
  },
  {
    question: "Welche Branchen betreuen Sie?",
    answer:
      "Wir haben Erfahrung in verschiedenen Branchen, darunter E-Commerce, B2B, Dienstleistungen und lokale Unternehmen.",
    category: "services",
  },
  {
    question: "Wie messen Sie den Erfolg?",
    answer:
      "Wir definieren zu Beginn klare KPIs und liefern monatliche Reports mit detaillierten Analysen und Optimierungsvorschlägen.",
    category: "process",
  },
  {
    question: "Gibt es Mindestvertragslaufzeiten?",
    answer:
      "Ja, je nach Service haben wir Mindestlaufzeiten von 3-6 Monaten, um nachhaltige Ergebnisse erzielen zu können.",
    category: "pricing",
  },
  {
    question: "Welche Marketing-Kanäle nutzen Sie?",
    answer:
      "Wir setzen auf einen Multi-Channel-Ansatz und wählen die Kanäle basierend auf Ihrer Zielgruppe und Ihren Zielen aus. Dazu gehören Social Media, SEO, Content Marketing, E-Mail Marketing und bezahlte Werbung.",
    category: "services",
  },
  {
    question: "Wie oft erhalte ich Berichte über die Performance?",
    answer:
      "Sie erhalten monatliche detaillierte Berichte mit allen relevanten KPIs und Metriken. Zusätzlich bieten wir regelmäßige Strategie-Meetings an, um die Ergebnisse zu besprechen und die Strategie anzupassen.",
    category: "process",
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState([]);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleToggle = (value) => {
    setExpandedItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-secondary text-sm font-medium mb-4">
              Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-6">
              Häufig gestellte
              <span className="relative mx-3 inline-block">
                <span className="relative z-10">Fragen</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-primary/30 -z-10 rounded"></span>
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren
              Dienstleistungen und Prozessen
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search and filter */}
          <motion.div
            className="mb-10 flex flex-col md:flex-row gap-6 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-brand-secondary focus:border-brand-secondary bg-white"
                placeholder="Suchen Sie nach Fragen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id ? "bg-brand-secondary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-1">
              <Accordion
                type="multiple"
                value={expandedItems}
                className="w-full divide-y divide-gray-100"
              >
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-none"
                    >
                      <AccordionTrigger
                        onClick={() => handleToggle(`item-${index}`)}
                        className="text-left font-semibold text-brand-dark px-6 py-4 hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <div className="flex items-start">
                          <HelpCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0 mt-0.5" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 px-6 pb-6 pt-0 pl-14">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {faq.answer}
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                      <MessageCircle className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Keine Ergebnisse gefunden
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Wir konnten keine Fragen finden, die Ihren Suchkriterien
                      entsprechen.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("all");
                      }}
                    >
                      Alle Fragen anzeigen
                    </Button>
                  </div>
                )}
              </Accordion>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-600 mb-6">
              Haben Sie weitere Fragen? Wir sind für Sie da!
            </p>
            <Button
              onClick={() => (window.location.href = "/consultation")}
              className="bg-brand-secondary hover:bg-brand-primary text-white rounded-full px-8 py-6 group transition-all duration-300"
            >
              <span className="flex items-center">
                <span>Kontakt aufnehmen</span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

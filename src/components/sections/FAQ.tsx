import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const faqs = [
  {
    question: "Was kostet eine Beratung?",
    answer:
      "Die Erstberatung ist kostenlos. In diesem Gespräch analysieren wir Ihre aktuelle Situation und entwickeln erste Lösungsansätze.",
  },
  {
    question: "Wie lange dauert die Zusammenarbeit?",
    answer:
      "Die Dauer der Zusammenarbeit hängt von Ihren Zielen und dem gewählten Service ab. Typische Projekte laufen zwischen 3-12 Monaten.",
  },
  {
    question: "Welche Branchen betreuen Sie?",
    answer:
      "Wir haben Erfahrung in verschiedenen Branchen, darunter E-Commerce, B2B, Dienstleistungen und lokale Unternehmen.",
  },
  {
    question: "Wie messen Sie den Erfolg?",
    answer:
      "Wir definieren zu Beginn klare KPIs und liefern monatliche Reports mit detaillierten Analysen und Optimierungsvorschlägen.",
  },
  {
    question: "Gibt es Mindestvertragslaufzeiten?",
    answer:
      "Ja, je nach Service haben wir Mindestlaufzeiten von 3-6 Monaten, um nachhaltige Ergebnisse erzielen zu können.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-gray-600 text-lg">
              Hier finden Sie Antworten auf die wichtigsten Fragen
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-[#006C84]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

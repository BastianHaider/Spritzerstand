import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Globe, Megaphone, PenTool } from "lucide-react";

const services = [
  {
    title: "Content Marketing",
    description:
      "Erstellen Sie hochwertigen Content, der Ihre Zielgruppe begeistert und zu mehr Conversions führt.",
    icon: PenTool,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "SEO Optimierung",
    description:
      "Verbessern Sie Ihre Sichtbarkeit in Suchmaschinen und erreichen Sie mehr qualifizierte Besucher.",
    icon: Globe,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Performance Marketing",
    description:
      "Maximieren Sie Ihren ROI durch datengetriebene Werbekampagnen auf allen relevanten Kanälen.",
    icon: BarChart,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Social Media Marketing",
    description:
      "Bauen Sie eine starke Social Media Präsenz auf und verbinden Sie sich mit Ihrer Zielgruppe.",
    icon: Megaphone,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
];

export default function Services() {
  return (
    <section className="py-20 sm:py-32 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-gray-600 text-lg">
            Wir bieten maßgeschneiderte Lösungen für Ihr digitales Marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg ${service.bgColor} ${service.color} flex items-center justify-center mb-4`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="font-scandia">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className={`group-hover:${service.color} -ml-4`}
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

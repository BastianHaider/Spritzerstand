import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Here you would normally handle the actual subscription
    }
  };

  const navigation = {
    main: [
      { name: "Über uns", href: "/#about" },
      { name: "Leistungen", href: "/#services" },
      { name: "Erfolge", href: "/#case-study" },
      { name: "FAQ", href: "/#faq" },
      { name: "Blog", href: "/blog" },
    ],
    services: [
      { name: "Content Marketing", href: "/services/content-marketing" },
      {
        name: "Social Media Marketing",
        href: "/services/social-media-marketing",
      },
      { name: "SEO Optimierung", href: "/services/seo-optimierung" },
      {
        name: "Performance Marketing",
        href: "/services/performance-marketing",
      },
    ],
    social: [
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "LinkedIn", icon: Linkedin, href: "#" },
    ],
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="bg-white pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center">
                <span className="bg-brand-secondary/90 text-white px-3 py-1 rounded-md mr-1 font-bold text-xl inline-block">
                  White
                </span>
                <span className="font-bold text-xl text-brand-dark">Peak</span>
              </div>

              <p className="text-brand-dark/70 text-sm leading-relaxed">
                Ihre Digital Marketing Agentur für nachhaltiges Wachstum und
                messbare Erfolge. Wir kombinieren Kreativität mit Datenanalyse
                für maximale Resultate.
              </p>

              <div className="flex flex-col space-y-3 text-sm text-brand-dark/70">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-brand-secondary/80" />
                  <span>Musterstraße 123, 10115 Berlin</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-brand-secondary/80" />
                  <span>kontakt@whitepeak.de</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-brand-secondary/80" />
                  <span>+49 (0) 30 12345678</span>
                </div>
              </div>

              <div className="flex space-x-3 pt-2">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    aria-label={item.name}
                  >
                    <item.icon className="h-4 w-4 text-gray-500 group-hover:text-brand-secondary/80 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-brand-dark/70 hover:text-brand-secondary/90 text-sm flex items-center group transition-colors duration-200"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-brand-dark/70 hover:text-brand-secondary/90 text-sm flex items-center group transition-colors duration-200"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-6">
                Newsletter
              </h3>
              <p className="text-brand-dark/70 text-sm mb-4">
                Abonnieren Sie unseren Newsletter für Marketing-Insights und
                Branchentrends.
              </p>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Ihre E-Mail Adresse"
                      className="bg-gray-50 border-gray-100 focus:border-brand-secondary/70 pl-4 pr-12 py-2 rounded-md w-full text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button
                      type="submit"
                      className="absolute right-1 top-1 bottom-1 px-3 bg-brand-secondary/90 hover:bg-brand-secondary text-white rounded-sm"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="bg-green-50 text-green-700 p-4 rounded-md text-sm flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Vielen Dank für Ihre Anmeldung!
                </div>
              )}
              <p className="text-xs text-brand-dark/50 mt-3">
                Wir respektieren Ihre Privatsphäre. Keine Weitergabe Ihrer
                Daten.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-100 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-brand-dark/60 text-sm">
                © {new Date().getFullYear()} WhitePeak. Alle Rechte
                vorbehalten.
              </p>
              <div className="flex gap-6">
                <a
                  href="/datenschutz"
                  className="text-brand-dark/60 hover:text-brand-secondary/80 text-sm transition-colors duration-200"
                >
                  Datenschutzerklärung
                </a>
                <a
                  href="/agb"
                  className="text-brand-dark/60 hover:text-brand-secondary/80 text-sm transition-colors duration-200"
                >
                  AGB
                </a>
                <a
                  href="/impressum"
                  className="text-brand-dark/60 hover:text-brand-secondary/80 text-sm transition-colors duration-200"
                >
                  Impressum
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

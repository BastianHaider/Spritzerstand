import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Content Marketing", href: "#" },
      { name: "Social Media", href: "#" },
      { name: "SEO", href: "#" },
      { name: "Advertising", href: "#" },
    ],
    social: [
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "LinkedIn", icon: Linkedin, href: "#" },
    ],
  };

  return (
    <footer className="bg-[#FFCCBB] text-[#006C84]">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-scandia">WhitePeak</h3>
            <p className="text-[#006C84]/80 text-sm">
              Ihre Digital Marketing Agentur für nachhaltiges Wachstum und
              messbare Erfolge.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#006C84]/80 hover:text-[#006C84]"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[#006C84]/80 hover:text-[#006C84] text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[#006C84]/80 hover:text-[#006C84] text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Newsletter</h3>
            <p className="text-[#006C84]/80 text-sm mb-4">
              Abonnieren Sie unseren Newsletter für die neuesten Updates.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-white/90 border-[#006C84]/20"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#006C84]/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#006C84]/80 text-sm">
              © {new Date().getFullYear()} WhitePeak. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[#006C84]/80 hover:text-[#006C84] text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#006C84]/80 hover:text-[#006C84] text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

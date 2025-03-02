import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Menu,
  Phone,
  ArrowRight,
  ChevronRight,
  Trophy,
  BadgeCheck,
  Clock,
} from "lucide-react";
import { smoothScroll } from "@/lib/smoothScroll";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track current section for active menu highlighting
      const sections = ["services", "case-study", "about", "faq"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Unsere Leistungen" },
    { href: "/#case-study", label: "Erfolge" },
    { href: "/#about", label: "Über uns" },
    { href: "/#faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "py-2 shadow-lg bg-white"
          : "py-4 bg-gradient-to-r from-white via-white to-white/90 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Stats Bar with Animated Background */}
        <div className="hidden lg:flex h-12 items-center justify-center relative overflow-hidden rounded-full mb-3 bg-gradient-to-r from-brand-primary/5 via-brand-secondary/5 to-brand-primary/5">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle,_transparent_20%,_white_70%)] opacity-60"></div>

          <div className="flex items-center gap-12 py-2 px-6 z-10">
            <div className="flex items-center gap-2 group">
              <div className="relative">
                <Trophy className="h-5 w-5 text-brand-primary group-hover:text-brand-secondary transition-colors duration-300" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-brand-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-primary text-sm group-hover:text-brand-secondary transition-colors duration-300">
                  500+
                </span>
                <span className="text-gray-600 text-xs">Zufriedene Kunden</span>
              </div>
            </div>

            <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

            <div className="flex items-center gap-2 group">
              <div className="relative">
                <BadgeCheck className="h-5 w-5 text-brand-primary group-hover:text-brand-secondary transition-colors duration-300" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-brand-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-primary text-sm group-hover:text-brand-secondary transition-colors duration-300">
                  95%
                </span>
                <span className="text-gray-600 text-xs">
                  Kundenzufriedenheit
                </span>
              </div>
            </div>

            <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

            <div className="flex items-center gap-2 group">
              <div className="relative">
                <Clock className="h-5 w-5 text-brand-primary group-hover:text-brand-secondary transition-colors duration-300" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-brand-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-primary text-sm group-hover:text-brand-secondary transition-colors duration-300">
                  10+ Jahre
                </span>
                <span className="text-gray-600 text-xs">Erfahrung</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-16 items-center justify-between relative">
          {/* Logo with animation effects */}
          <a href="/" className="flex items-center group">
            <div className="relative overflow-hidden">
              <span className="bg-brand-secondary text-white px-3 py-1 rounded-md mr-1 font-bold text-xl lg:text-2xl inline-block relative z-10">
                White
                <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              </span>
              <span className="font-bold text-xl lg:text-2xl text-brand-dark group-hover:text-brand-secondary transition-colors duration-300">
                Peak
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </div>
          </a>

          {/* Main Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {menuItems.map((item) => {
                  const isActive =
                    (item.href === "/" && activeSection === "") ||
                    (item.href.includes(activeSection) && activeSection !== "");

                  return (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink
                        className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "text-brand-primary"
                            : "text-gray-700 hover:text-brand-secondary"
                        }`}
                        href={item.href}
                        onClick={(e) => {
                          if (item.href.startsWith("/#")) {
                            e.preventDefault();
                            smoothScroll(item.href.substring(2));
                          }
                        }}
                      >
                        {item.label}
                        {isActive && (
                          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-brand-primary rounded-full"></span>
                        )}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              className="hidden md:inline-flex relative overflow-hidden bg-brand-secondary hover:bg-brand-primary text-white border-none rounded-full px-6 py-2 group transition-all duration-500 shadow-sm hover:shadow-lg"
              onClick={() => (window.location.href = "/consultation")}
            >
              <span className="relative z-10 flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>Kontakt</span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute top-0 right-full w-full h-full bg-white opacity-20 skew-x-30 transition-transform duration-500 group-hover:right-0"></span>
            </Button>

            {/* Mobile menu trigger */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-transparent bg-gray-50/80 text-brand-dark hover:text-brand-secondary hover:bg-gray-100/80 transition-all duration-300"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="border-l-brand-primary/20">
                <div className="pt-8">
                  <a href="/" className="flex items-center mb-8">
                    <span className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-3 py-1 rounded-md mr-1 font-bold text-xl">
                      White
                    </span>
                    <span className="font-bold text-xl text-brand-dark">
                      Peak
                    </span>
                  </a>
                  <nav className="flex flex-col gap-6">
                    {menuItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-lg font-medium text-brand-dark hover:text-brand-primary flex items-center justify-between group transition-colors duration-300"
                        onClick={(e) => {
                          if (item.href.startsWith("/#")) {
                            e.preventDefault();
                            smoothScroll(item.href.substring(2));
                          }
                        }}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    ))}
                    <Button
                      className="mt-6 bg-secondary hover:from-brand-secondary hover:to-brand-primary text-white border-none rounded-full px-6 py-6 flex items-center justify-center transition-all duration-300"
                      onClick={() => (window.location.href = "/consultation")}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      <span>Kontakt aufnehmen</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

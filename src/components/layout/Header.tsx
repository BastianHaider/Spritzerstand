import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { smoothScroll } from "@/lib/smoothScroll";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Unsere Leistungen" },
    { href: "/#case-study", label: "Erfolge" },
    { href: "/#about", label: "Über uns" },
    { href: "/#faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E2E8E4] bg-white backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container">
        <div className="flex h-8 items-center justify-center gap-8 text-xs border-b border-[#E2E8E4]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#006C84]">500+</span>
            <span className="text-gray-600">Zufriedene Kunden</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#006C84]">95%</span>
            <span className="text-gray-600">Kundenzufriedenheit</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#006C84]">10+ Jahre</span>
            <span className="text-gray-600">Erfahrung</span>
          </div>
        </div>
        <div className="flex h-16 items-center justify-between">
          <a
            href="/"
            className="font-bold text-xl text-[#006C84] hover:text-[#6EB5C0] transition-colors"
          >
            WhitePeak
          </a>
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith("/#")) {
                          e.preventDefault();
                          smoothScroll(item.href.substring(2));
                        }
                      }}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4">
            <Button
              className="hidden md:inline-flex bg-[#6EB5C0] hover:bg-[#FFCCBB] text-white border-none"
              onClick={() => (window.location.href = "/consultation")}
            >
              Kontakt
            </Button>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#E2E8E4] text-[#006C84] hover:text-[#6EB5C0] hover:border-[#6EB5C0]"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-[#006C84] hover:text-[#6EB5C0] transition-colors"
                      onClick={(e) => {
                        if (item.href.startsWith("/#")) {
                          e.preventDefault();
                          smoothScroll(item.href.substring(2));
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button
                    className="mt-4 bg-[#6EB5C0] hover:bg-[#FFCCBB] text-white border-none"
                    onClick={() => (window.location.href = "/consultation")}
                  >
                    Kontakt
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

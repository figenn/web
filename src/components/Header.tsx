import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { T } from "@/components/T";
import { useApp } from "@/contexts/AppContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages, Language } from "@/lib/i18n";

export const Header = () => {
  const { language, setLanguage, theme, toggleTheme } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 pt-3 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-background/80 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="#"
            className="text-2xl font-bold flex items-center space-x-2"
          >
            <img src="/logo.png" alt="Logo" className="h-8 w-24" />
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#assets"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <T id="assets" />
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <T id="pricing" />
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <T id="testimonials" />
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                {languages[language]}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {Object.entries(languages).map(([key, value]) => (
                <DropdownMenuItem
                  key={key}
                  onClick={() => setLanguage(key as Language)}
                  className="cursor-pointer"
                >
                  {value}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button variant="ghost" size="sm">
            <T id="login" />
          </Button>
          <Button>
            <T id="signup" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#assets"
              className="text-sm font-medium py-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <T id="assets" />
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium py-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <T id="pricing" />
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium py-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <T id="testimonials" />
            </a>

            <div className="flex flex-col space-y-2 pt-2 border-t border-border">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="justify-start">
                    {languages[language]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {Object.entries(languages).map(([key, value]) => (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => setLanguage(key as Language)}
                      className="cursor-pointer"
                    >
                      {value}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="sm" className="justify-start">
                <T id="login" />
              </Button>
              <Button size="sm" className="justify-start">
                <T id="signup" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

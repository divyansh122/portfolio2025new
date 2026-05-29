import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Terminal } from "lucide-react";

const navItems = [
  { href: "/", label: "./home" },
  { href: "/about", label: "./about" },
  { href: "/experience", label: "./experience" },
  { href: "/projects", label: "./projects" },
  { href: "/client-work", label: "./client_work" },
  { href: "/contact", label: "./contact" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-bg border-b border-terminal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-terminal-green font-semibold text-sm sm:text-base hover:opacity-80 transition-opacity">
            <Terminal className="w-4 h-4" />
            divyansh@portfolio:~$
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 text-sm">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? "text-terminal-green bg-terminal-border"
                      : "text-gray-400 hover:text-terminal-green hover:bg-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-terminal-green p-2 rounded-lg hover:bg-gray-900 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden mobile-menu fixed top-16 right-0 w-64 h-screen bg-black bg-opacity-98 backdrop-blur-lg border-l border-terminal-border ${
            isMobileMenuOpen ? "open" : ""
          }`}
        >
          <div className="p-6 space-y-2">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 rounded-lg transition-all ${
                    isActive
                      ? "text-terminal-green bg-terminal-border"
                      : "text-gray-400 hover:text-terminal-green hover:bg-gray-900"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[-1]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}

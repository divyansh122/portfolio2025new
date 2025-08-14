import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: './home' },
    { href: '#about', label: './about' },
    { href: '#experience', label: './experience' }, 
    { href: '#projects', label: './projects' },
    { href: '#contact', label: './contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-bg border-b border-terminal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-terminal-green font-semibold text-sm sm:text-base">divyansh@portfolio:~$</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-300 hover:text-terminal-green transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-terminal-green p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden mobile-menu fixed top-16 right-0 w-64 h-screen bg-black bg-opacity-95 backdrop-blur-lg border-l border-terminal-border ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="block text-gray-300 hover:text-terminal-green transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
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

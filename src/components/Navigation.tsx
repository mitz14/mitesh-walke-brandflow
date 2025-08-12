import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-luxury ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-minimal' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-lg font-medium tracking-wider transition-luxury ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}
          >
            MW
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm tracking-wider transition-luxury hover:opacity-70 ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-luxury ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-charcoal/10">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-6 py-2 text-sm tracking-wider text-charcoal hover:bg-charcoal/5 transition-luxury"
                >
                  {item.label.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 border-b transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-200' 
        : 'bg-white/90 backdrop-blur-sm border-gray-100'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with animation */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-bold text-lg">HM</span>
            </div>
            <span className="font-inter font-semibold text-xl text-primary transition-colors duration-300 group-hover:text-primary/80">
              Hannan Marketplace
            </span>
          </div>

          {/* Desktop Navigation with hover effects */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-primary transition-all duration-300 font-inter font-medium group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-accent hover:bg-accent/90 text-primary font-inter font-semibold relative overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <span className="relative z-10">Schedule a Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-all duration-300 font-inter font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                    transition: `all 0.3s ease-out ${index * 0.1}s`
                  }}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-accent hover:bg-accent/90 text-primary font-inter font-semibold mt-4 mx-4">
                Schedule a Call
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-medium">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary/80 transition-colors">
              Portfolio
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-green-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-green-600 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('music')} className="hover:text-green-600 transition-colors">
              Music
            </button>
            <button onClick={() => scrollToSection('photography')} className="hover:text-green-600 transition-colors">
              Photography
            </button>
            <button onClick={() => scrollToSection('dog')} className="hover:text-green-600 transition-colors">
              My Dog
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-green-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-green-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-left py-2 hover:text-green-600 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('music')} className="text-left py-2 hover:text-green-600 transition-colors">
                Music
              </button>
              <button onClick={() => scrollToSection('photography')} className="text-left py-2 hover:text-green-600 transition-colors">
                Photography
              </button>
              <button onClick={() => scrollToSection('dog')} className="text-left py-2 hover:text-green-600 transition-colors">
                My Dog
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-green-600 transition-colors">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
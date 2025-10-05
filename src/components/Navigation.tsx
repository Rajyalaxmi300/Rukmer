import { Menu, X } from 'lucide-react';
import { useState } from 'react';

// The onLoginClick prop is no longer needed as the Login button is removed
// interface NavigationProps {
//   onLoginClick: () => void;
// }

// The component no longer accepts onLoginClick as a prop
export default function Navigation(/*{ onLoginClick }: NavigationProps*/) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-wider hover:scale-110 transition-transform duration-300 cursor-pointer" onClick={() => scrollToSection('hero')}>RUKMER</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="hover:text-white hover:scale-110 transition-all duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="hover:text-white hover:scale-110 transition-all duration-300 relative group"
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-white hover:scale-110 transition-all duration-300 relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="hover:text-white hover:scale-110 transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </button>
              {/* Removed Login Button from desktop view */}
              {/* <button
                onClick={onLoginClick}
                className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-110 hover:shadow-lg hover:shadow-white/30 animate-pulse-glow"
              >
                Login
              </button> */}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
            >
              Contact
            </button>
            {/* Removed Login Button from mobile view */}
            {/* <button
              onClick={onLoginClick}
              className="block w-full text-left px-3 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors"
            >
              Login
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
}
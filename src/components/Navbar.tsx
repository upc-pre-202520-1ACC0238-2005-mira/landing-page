import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/xantina_logo.jpg" 
              alt="Xantina" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a 
              href="#baristas" 
              className="text-[#452C20] hover:text-[#202245] transition-colors duration-300 text-sm tracking-wide uppercase"
            >
              Para Baristas
            </a>
            <a 
              href="#cafeterias" 
              className="text-[#452C20] hover:text-[#202245] transition-colors duration-300 text-sm tracking-wide uppercase"
            >
              Para Cafeterías
            </a>
            <a 
              href="#comunidad" 
              className="text-[#452C20] hover:text-[#202245] transition-colors duration-300 text-sm tracking-wide uppercase"
            >
              Comunidad
            </a>
            <a 
              href="#tienda" 
              className="text-[#452C20] hover:text-[#202245] transition-colors duration-300 text-sm tracking-wide uppercase"
            >
              Tienda
            </a>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <button className="bg-[#202245] text-white px-8 py-3 hover:bg-[#452C20] transition-all duration-300 text-sm tracking-wide uppercase">
              Comenzar
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#452C20] hover:text-[#202245] focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-8 pt-4 border-t border-[#9A857C]/20">
            <div className="flex flex-col space-y-6">
              <a 
                href="#baristas" 
                className="text-[#452C20] hover:text-[#202245] transition-colors duration-300 text-sm tracking-wide uppercase"
              >
                Para Baristas
              </a>
              <a 
                href="#cafeterias" 
                className="text-[#452C20] hover:text-[#202245] transition-colors duration-300 text-sm tracking-wide uppercase"
              >
                Para Cafeterías
              </a>
              <a 
                href="#comunidad" 
                className="text-[#452C20] hover:text-[#202245] transition-colors duration-300 text-sm tracking-wide uppercase"
              >
                Comunidad
              </a>
              <a 
                href="#tienda" 
                className="text-[#452C20] hover:text-[#202245] transition-colors duration-300 text-sm tracking-wide uppercase"
              >
                Tienda
              </a>
              <button className="bg-[#202245] text-white px-8 py-3 hover:bg-[#452C20] transition-all duration-300 text-sm tracking-wide uppercase text-center">
                Comenzar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


import image_83fe2099ab8429eac2604f73c5cdbf898df73f30 from 'figma:asset/83fe2099ab8429eac2604f73c5cdbf898df73f30.png';
import image_b9f8654bf3dbdfb8f6447f8b6c9f8707ec91020a from 'figma:asset/b9f8654bf3dbdfb8f6447f8b6c9f8707ec91020a.png';
import { Link, useLocation } from 'wouter';
import irealLogo from "figma:asset/8019337346e42685a7658c0e179d5405b7bca63a.png";
import textureBackground from "figma:asset/3b26c86cf0d9a65bedd642225608efa70234e9e9.png";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage?: 'home' | 'funcionalidades' | 'sobre-nosotros';
}

export default function Header({ currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <div className="bg-[#e3ddd3] h-[89px] w-full fixed top-0 z-50">
      <div className="max-w-[1280px] mx-auto relative h-full bg-[rgba(0,0,0,0)] px-4 md:px-8 lg:px-0">
        {/* Logo */}
        <Link href="/">
          <div className="absolute left-4 md:left-8 lg:left-[154px] top-[24px] cursor-pointer">
            <img src={image_83fe2099ab8429eac2604f73c5cdbf898df73f30} alt="ireal logo" className="h-[32px] md:h-[36px] lg:h-[40px] w-auto" />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="absolute right-4 top-[24px] lg:hidden z-50 p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <div className="absolute left-[414px] top-[25px]">
            <Link href="/funcionalidades">
              <span 
                className={`font-['Playfair_Display:Regular',sans-serif] text-[24px] transition-colors cursor-pointer ${
                  currentPage === 'funcionalidades' ? 'text-[#8a0f1c]' : 'text-black hover:text-[#8a0f1c]'
                }`}
              >
                Funcionalidades
              </span>
            </Link>
          </div>

          <div className="absolute left-[653px] top-[25px]">
            <Link href="/sobre-nosotros">
              <span 
                className={`font-['Playfair_Display:Regular',sans-serif] text-[24px] transition-colors cursor-pointer ${
                  currentPage === 'sobre-nosotros' ? 'text-[#8a0f1c]' : 'text-black hover:text-[#8a0f1c]'
                }`}
              >
                Sobre nosotros
              </span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="absolute right-[40px] top-[18px]">
            <button
              onClick={() => { window.location.href = "https://www.hola.com/"; }}
              className="bg-[#8a0f1c] hover:bg-[#6d0c16] hover:shadow-[0_0_40px_rgba(138,15,28,1),0_0_60px_rgba(138,15,28,0.6),0_0_80px_rgba(138,15,28,0.3)] hover:scale-105 transition-all duration-300 rounded-[45px] px-6 py-3 cursor-pointer"
            >
              <span className="font-['Playfair_Display:Bold',sans-serif] text-[18px] text-white whitespace-nowrap">
                Early access
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[89px] left-0 right-0 bg-[#e3ddd3] border-t border-[#8a0f1c]/20 shadow-lg">
            <nav className="flex flex-col py-4 px-6 space-y-4">
              <Link href="/funcionalidades">
                <span 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-['Playfair_Display:Regular',sans-serif] text-[20px] transition-colors cursor-pointer block ${
                    currentPage === 'funcionalidades' ? 'text-[#8a0f1c]' : 'text-black hover:text-[#8a0f1c]'
                  }`}
                >
                  Funcionalidades
                </span>
              </Link>
              <Link href="/sobre-nosotros">
                <span 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-['Playfair_Display:Regular',sans-serif] text-[20px] transition-colors cursor-pointer block ${
                    currentPage === 'sobre-nosotros' ? 'text-[#8a0f1c]' : 'text-black hover:text-[#8a0f1c]'
                  }`}
                >
                  Sobre nosotros
                </span>
              </Link>
              
              {/* Mobile CTA Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = "https://www.hola.com/";
                }}
                className="bg-[#8a0f1c] hover:bg-[#6d0c16] hover:shadow-[0_0_40px_rgba(138,15,28,1),0_0_60px_rgba(138,15,28,0.6),0_0_80px_rgba(138,15,28,0.3)] hover:scale-105 transition-all duration-300 rounded-[45px] px-6 py-3 cursor-pointer mt-2"
              >
                <span className="font-['Playfair_Display:Bold',sans-serif] text-[18px] text-white">
                  Early access
                </span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

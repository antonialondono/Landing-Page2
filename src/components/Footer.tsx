import image_b9f8654bf3dbdfb8f6447f8b6c9f8707ec91020a from 'figma:asset/b9f8654bf3dbdfb8f6447f8b6c9f8707ec91020a.png';

export default function Footer() {
  return (
    <footer className="bg-[#e3ddd3] px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <img src={image_b9f8654bf3dbdfb8f6447f8b6c9f8707ec91020a} alt="ireal logo" className="h-10 sm:h-11 lg:h-12 w-auto" />
          </div>

          {/* Copyright */}
          <div className="font-['Playfair_Display:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] text-black text-center leading-[1.4]">
            <p className="mb-0">Hecho con magia desde Colombia | &copy; 2025 IREAL</p>
            <p className="mb-0">Todos los derechos reservados</p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <p className="font-['Playfair_Display:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] text-black">
              Únete a nuestra comunidad.
            </p>
            <a
              href="https://www.instagram.com/ireal.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de IREAL"
              className="w-7 h-7 sm:w-8 sm:h-8 inline-flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="black" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="black" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="black" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

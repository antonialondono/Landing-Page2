import image_83fe2099ab8429eac2604f73c5cdbf898df73f30 from 'figma:asset/83fe2099ab8429eac2604f73c5cdbf898df73f30.png';
import image_b9f8654bf3dbdfb8f6447f8b6c9f8707ec91020a from 'figma:asset/b9f8654bf3dbdfb8f6447f8b6c9f8707ec91020a.png';
import svgPaths from "../imports/svg-p8g4h757qp";
import imgConejitoIreal1 from "figma:asset/0c64869cf09fa20db0fe6087a043c9dd9fd487eb.png";
import backgroundTexture from "figma:asset/c0ebaf603f34f7296fe2945fb463f36f2c41a92d.png";
import raggedPaper from 'figma:asset/757003912e14f35ab050ef2a91465b149b96e040.png';
import Header from './Header';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col" style={{
      backgroundImage: `url(${backgroundTexture})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '400px 400px'
    }}>
      {/* Header */}
      <Header />

      {/* Main Content - Constrained to 1280px */}
      <main className="flex-1 w-full max-w-[1280px] mx-auto pt-[89px]">
        <div className="relative w-full h-auto lg:h-[1705px]">
          {/* Ragged paper divider */}
          <img 
            src={raggedPaper} 
            alt="" 
            className="absolute left-0 top-[50px] lg:top-[100px] w-full h-auto pointer-events-none z-0"
          />

          {/* Desktop Hero Section */}
          <div className="hidden lg:block absolute h-[201.71px] left-[930px] rounded-[45px] top-[1028px] w-[310px]">
            {/* Logo above tagline */}
            <img 
              src={image_b9f8654bf3dbdfb8f6447f8b6c9f8707ec91020a} 
              alt="ireal logo" 
              className="absolute left-[-755px] top-[-730px] h-[120px] w-auto z-10"
            />
            
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[123px] leading-[normal] left-[-755px] not-italic text-[40px] text-black top-[-603px] w-[508px] z-10">Convierte tus ideas en contenido mágico</p>
            
            <button
              onClick={() => { window.location.href = "https://ireal-app.com/"; }}
              className="absolute bg-[#8a0f1c] h-[74px] left-[-759px] rounded-[45px] top-[-491px] w-[423px] hover:bg-[#6d0c16] hover:shadow-[0_0_40px_rgba(138,15,28,1),0_0_60px_rgba(138,15,28,0.6),0_0_80px_rgba(138,15,28,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span className="font-['Playfair_Display:Bold',sans-serif] text-[24px] text-white tracking-[0.5px]">
                Ingresa al early access
              </span>
            </button>
            
            <div className="absolute h-[476px] left-[-247px] top-[-852px] w-[577px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[214.29%] left-[-54.94%] max-w-none top-[-63.45%] w-[213.35%]" src={imgConejitoIreal1} />
              </div>
            </div>
          </div>

          {/* Mobile Hero Section - Simplified but keeping original structure */}
          <div className="lg:hidden relative px-4 pt-8 pb-4">
            <div className="relative" style={{ minHeight: '450px' }}>
              {/* Rabbit mascot */}
              <div className="absolute h-[140px] right-[-15px] top-[-20px] w-[170px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[214.29%] left-[-54.94%] max-w-none top-[-63.45%] w-[213.35%]" src={imgConejitoIreal1} />
                </div>
              </div>

              {/* Logo */}
              <img 
                src={image_b9f8654bf3dbdfb8f6447f8b6c9f8707ec91020a} 
                alt="ireal logo" 
                className="relative h-[45px] w-auto z-10 mb-3 mt-16"
              />
              
              {/* Tagline */}
              <p className="relative font-['Inter:Regular',sans-serif] text-[18px] text-black w-full max-w-[240px] z-10 leading-[1.2] mb-5">
                Convierte tus ideas en contenido mágico
              </p>
              
              {/* CTA Button */}
              <button
                onClick={() => { window.location.href = "https://ireal-app.com/"; }}
                className="relative z-10 w-full max-w-[400px] mt-16 bg-[#8a0f1c] hover:bg-[#6d0c16] hover:shadow-[0_0_40px_rgba(138,15,28,1),0_0_60px_rgba(138,15,28,0.6),0_0_80px_rgba(138,15,28,0.3)] hover:scale-105 transition-all duration-300 rounded-[45px] py-4 cursor-pointer"
              >
                <span className="font-['Playfair_Display:Bold',sans-serif] text-[18px] text-white">
                  Ingresa al early access
                </span>
              </button>
            </div>
          </div>

          {/* Three Steps Section Title */}
          <p className="font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] text-[#8a0f1c] text-center px-4 text-[40px] lg:text-[64px] mb-4 lg:mb-0 lg:absolute lg:h-[169px] lg:left-[641px] lg:top-[801px] lg:translate-x-[-50%] lg:w-[578px]">
            Haz magia en tres simples pasos
          </p>

          {/* Desktop Cards - Original positioning */}
          <div className="hidden lg:block">
            {/* Card 1: CREA */}
            <div className="absolute h-[201.71px] left-[73px] rounded-[45px] top-[1028px] w-[310px]">
              <div className="absolute bg-white h-[181px] left-0 rounded-[45px] top-[20.71px] w-[310px]">
                <div aria-hidden="true" className="absolute border-2 border-neutral-200 border-solid inset-0 pointer-events-none rounded-[45px]" />
              </div>
              <div className="absolute h-[143px] left-[2px] top-[41.71px] w-[305px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-0.7%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 305 144">
                    <g opacity="0.5">
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="8.00008" x2="294" y1="0.500013" y2="0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="21.5231" y2="21.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="40.523" y2="40.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="61.523" y2="61.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 82.0231)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 102.023)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 124.023)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="8.00007" x2="294" y1="143.5" y2="143.5" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[47px] leading-[normal] left-[calc(50%-134px)] not-italic text-[20px] text-black top-[101px] w-[283px]">Transforma tus pensamientos en ideas con IA.</p>
              <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.052873097360134125)+(var(--transform-inner-height)*0.9986012578010559)))] items-center justify-center left-[61.28px] top-0 w-[calc(1px*((var(--transform-inner-height)*0.052873097360134125)+(var(--transform-inner-width)*0.9986012578010559)))]" style={{ "--transform-inner-width": "179", "--transform-inner-height": "32" } as React.CSSProperties}>
                <div className="flex-none rotate-[3.031deg]">
                  <div className="bg-[rgba(159,201,115,0.6)] h-[32px] w-[179px]" />
                </div>
              </div>
              <p className="absolute bottom-[100.71px] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-65px)] text-[#8a0f1c] text-[48px] text-nowrap top-[37px] whitespace-pre">CREA</p>
            </div>

            {/* Card 2: PlANEA */}
            <div className="absolute h-[201.71px] left-[498px] rounded-[45px] top-[1028px] w-[310px]">
              <div className="absolute bg-white h-[181px] left-0 rounded-[45px] top-[20.71px] w-[310px]">
                <div aria-hidden="true" className="absolute border-2 border-neutral-200 border-solid inset-0 pointer-events-none rounded-[45px]" />
              </div>
              <div className="absolute h-[143px] left-[2px] top-[41.71px] w-[305px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-0.7%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 305 144">
                    <g opacity="0.5">
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="8.00008" x2="294" y1="0.500013" y2="0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="21.5231" y2="21.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="40.523" y2="40.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="61.523" y2="61.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 82.0231)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 102.023)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 124.023)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="8.00007" x2="294" y1="143.5" y2="143.5" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-127px)] not-italic text-[20px] text-black top-[101px] w-[282px]">Organiza tu contenido con planes inteligentes.</p>
              <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.052873097360134125)+(var(--transform-inner-height)*0.9986012578010559)))] items-center justify-center left-[61.28px] top-0 w-[calc(1px*((var(--transform-inner-height)*0.052873097360134125)+(var(--transform-inner-width)*0.9986012578010559)))]" style={{ "--transform-inner-width": "179", "--transform-inner-height": "32" } as React.CSSProperties}>
                <div className="flex-none rotate-[3.031deg]">
                  <div className="bg-[rgba(159,201,115,0.6)] h-[32px] w-[179px]" />
                </div>
              </div>
              <p className="absolute bottom-[100.71px] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-85px)] text-[#8a0f1c] text-[48px] text-nowrap top-[37px] whitespace-pre">PLANEA</p>
            </div>

            {/* Card 3: AGENDA */}
            <div className="absolute h-[201.71px] left-[930px] rounded-[45px] top-[1028px] w-[310px]">
              <div className="absolute bg-white h-[181px] left-0 rounded-[45px] top-[20.71px] w-[310px]">
                <div aria-hidden="true" className="absolute border-2 border-neutral-200 border-solid inset-0 pointer-events-none rounded-[45px]" />
              </div>
              <div className="absolute h-[143px] left-[2px] top-[41.71px] w-[305px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-0.7%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 305 144">
                    <g opacity="0.5">
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="8.00008" x2="294" y1="0.500013" y2="0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="21.5231" y2="21.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="40.523" y2="40.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="61.523" y2="61.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 82.0231)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 102.023)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 124.023)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="8.00007" x2="294" y1="143.5" y2="143.5" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="absolute bottom-[102.71px] font-['Inter:Regular',sans-serif] font-normal h-[47px] leading-[normal] left-[calc(50%-124px)] not-italic text-[20px] text-black translate-y-[100%] w-[293px]">Programa tus posts automáticamente.</p>
              <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.052873097360134125)+(var(--transform-inner-height)*0.9986012578010559)))] items-center justify-center left-[61.28px] top-0 w-[calc(1px*((var(--transform-inner-height)*0.052873097360134125)+(var(--transform-inner-width)*0.9986012578010559)))]" style={{ "--transform-inner-width": "179", "--transform-inner-height": "32" } as React.CSSProperties}>
                <div className="flex-none rotate-[3.031deg]">
                  <div className="bg-[rgba(159,201,115,0.6)] h-[32px] w-[179px]" />
                </div>
              </div>
              <p className="absolute bottom-[100.71px] font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-100px)] text-[#8a0f1c] text-[48px] text-nowrap top-[37px] whitespace-pre">AGENDA</p>
            </div>
          </div>

          {/* Mobile Cards - Keeping exact same card structure as desktop */}
          <div className="lg:hidden flex flex-col gap-6 px-4 mb-12">
            {/* Card 1: CREA */}
            <div className="relative h-[201.71px] rounded-[45px] w-full max-w-[310px] mx-auto">
              <div className="absolute bg-white h-[181px] left-0 rounded-[45px] top-[20.71px] w-full">
                <div aria-hidden="true" className="absolute border-2 border-neutral-200 border-solid inset-0 pointer-events-none rounded-[45px]" />
              </div>
              <div className="absolute h-[143px] left-[2px] top-[41.71px] right-[3px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-0.7%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 305 144">
                    <g opacity="0.5">
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="8.00008" x2="294" y1="0.500013" y2="0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="21.5231" y2="21.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="40.523" y2="40.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="61.523" y2="61.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 82.0231)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 102.023)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 124.023)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="8.00007" x2="294" y1="143.5" y2="143.5" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-center not-italic text-[20px] text-black top-[115px] left-[14px] right-[14px]">Transforma tus pensamientos en ideas con IA.</p>
              <div className="absolute flex items-center justify-center left-[61.28px] top-0" style={{ height: '35px', width: '180px' }}>
                <div className="flex-none rotate-[3.031deg]">
                  <div className="bg-[rgba(159,201,115,0.6)] h-[32px] w-[179px]" />
                </div>
              </div>
              <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] left-1/2 -translate-x-1/2 text-[#8a0f1c] text-[48px] text-nowrap top-[37px] whitespace-pre">CREA</p>
            </div>

            {/* Card 2: PLANEA */}
            <div className="relative h-[201.71px] rounded-[45px] w-full max-w-[310px] mx-auto">
              <div className="absolute bg-white h-[181px] left-0 rounded-[45px] top-[20.71px] w-full">
                <div aria-hidden="true" className="absolute border-2 border-neutral-200 border-solid inset-0 pointer-events-none rounded-[45px]" />
              </div>
              <div className="absolute h-[143px] left-[2px] top-[41.71px] right-[3px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-0.7%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 305 144">
                    <g opacity="0.5">
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="8.00008" x2="294" y1="0.500013" y2="0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="21.5231" y2="21.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="40.523" y2="40.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="61.523" y2="61.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 82.0231)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 102.023)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 124.023)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="8.00007" x2="294" y1="143.5" y2="143.5" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-center not-italic text-[20px] text-black top-[115px] left-[14px] right-[14px]">Organiza tu contenido con planes inteligentes.</p>
              <div className="absolute flex items-center justify-center left-[61.28px] top-0" style={{ height: '35px', width: '180px' }}>
                <div className="flex-none rotate-[3.031deg]">
                  <div className="bg-[rgba(159,201,115,0.6)] h-[32px] w-[179px]" />
                </div>
              </div>
              <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] left-1/2 -translate-x-1/2 text-[#8a0f1c] text-[48px] text-nowrap top-[37px] whitespace-pre">PLANEA</p>
            </div>

            {/* Card 3: AGENDA */}
            <div className="relative h-[201.71px] rounded-[45px] w-full max-w-[310px] mx-auto">
              <div className="absolute bg-white h-[181px] left-0 rounded-[45px] top-[20.71px] w-full">
                <div aria-hidden="true" className="absolute border-2 border-neutral-200 border-solid inset-0 pointer-events-none rounded-[45px]" />
              </div>
              <div className="absolute h-[143px] left-[2px] top-[41.71px] right-[3px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-0.7%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 305 144">
                    <g opacity="0.5">
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="8.00008" x2="294" y1="0.500013" y2="0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="21.5231" y2="21.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="40.523" y2="40.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="3.77484e-05" x2="305" y1="61.523" y2="61.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 82.0231)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 102.023)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" transform="matrix(1 -7.64868e-05 7.45198e-05 1 7.54969e-05 124.023)" x2="305" y1="-0.5" y2="-0.5" />
                      <line stroke="var(--stroke-0, #A9A9A9)" strokeOpacity="0.8" x1="8.00007" x2="294" y1="143.5" y2="143.5" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-center not-italic text-[20px] text-black top-[115px] left-[14px] right-[14px]">Programa tus posts automáticamente.</p>
              <div className="absolute flex items-center justify-center left-[61.28px] top-0" style={{ height: '35px', width: '180px' }}>
                <div className="flex-none rotate-[3.031deg]">
                  <div className="bg-[rgba(159,201,115,0.6)] h-[32px] w-[179px]" />
                </div>
              </div>
              <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[normal] left-1/2 -translate-x-1/2 text-[#8a0f1c] text-[48px] text-nowrap top-[37px] whitespace-pre">AGENDA</p>
            </div>
          </div>

          {/* Banner with Description - Desktop */}
          <div className="hidden lg:block absolute h-[162.302px] left-[143px] top-[1332px] w-[1034px]">
            <div className="absolute bottom-[-4.93%] left-[-0.39%] right-[-0.39%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1042 171">
                <g filter="url(#filter0_d_1_334)">
                  <path d={svgPaths.p13a30680} fill="white" fillOpacity="0.75" shapeRendering="crispEdges" />
                  <path d={svgPaths.p36770500} shapeRendering="crispEdges" stroke="#F5F5F5" strokeWidth="1.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="170.302" id="filter0_d_1_334" width="1042" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_334" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_334" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          
          <div className="hidden lg:block absolute font-['Inter:Regular',sans-serif] font-normal h-[67.626px] leading-[normal] left-[calc(50%+10.5px)] not-italic text-[24px] text-black text-center top-[1355.19px] translate-x-[-50%] w-[889px]">
            <p className="mb-0">{`Con IREAL, el proceso creativo se siente ligero, intuitivo y encantador. `}</p>
            <p>Diseñado para creadores, emprendedores y equipos que quieren ahorrar tiempo sin perder autenticidad.</p>
          </div>

          {/* Banner with Description - Mobile */}
          <div className="lg:hidden px-4 pb-12">
            <div className="relative max-w-[600px] mx-auto" style={{ minHeight: '200px' }}>
              <svg className="w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1042 171" style={{ height: '200px' }}>
                <g filter="url(#filter0_d_1_334_mobile)">
                  <path d={svgPaths.p13a30680} fill="white" fillOpacity="0.75" shapeRendering="crispEdges" />
                  <path d={svgPaths.p36770500} shapeRendering="crispEdges" stroke="#F5F5F5" strokeWidth="1.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="220" id="filter0_d_1_334_mobile" width="1042" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_334" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_334" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
              
              {/* Text overlay on the banner */}
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <div className="font-['Inter:Regular',sans-serif] text-[15px] text-black text-center leading-[1.5] max-w-[520px]">
                  <p className="mb-2">Con IREAL, el proceso creativo se siente ligero, intuitivo y encantador.</p>
                  <p>Diseñado para creadores, emprendedores y equipos que quieren ahorrar tiempo sin perder autenticidad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Full width outside main container */}
      <Footer />
    </div>
  );
}

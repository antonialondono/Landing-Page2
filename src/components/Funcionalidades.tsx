import { Link } from 'wouter';
import svgPaths from "../imports/svg-p8g4h757qp";
import { imgGroup4 } from "../imports/svg-f88ki";
import ideasMockup from "figma:asset/9e1161065b8cbfe3337dfda5b5e3a1607d1d219f.png";
import planesMockup from "figma:asset/7abc6a028e335824821e246f97eae2472cbfb499.png";
import agendaMockup from "figma:asset/139f14f0603986edc0646197781a5cc8a3888294.png";
import decorativePlanea from "figma:asset/0da8c45c99e0da08c7cce4e1f1cdaad1ec3d5b1d.png";
import decorativeAgenda from "figma:asset/d4ac6bb73103c2cb3be0ec4c1577db09f1b02847.png";
import newBackgroundTexture from "figma:asset/c0ebaf603f34f7296fe2945fb463f36f2c41a92d.png";
import planeaBackground from "figma:asset/bf852304654d48f9d5409f6229633fce2e49cdfc.png";
import Header from './Header';
import Footer from './Footer';

export default function Funcionalidades() {
  return (
    <div className="relative w-full min-h-screen flex flex-col" style={{
      backgroundImage: `url(${newBackgroundTexture})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '400px 400px'
    }}>
      {/* Header */}
      <Header currentPage="funcionalidades" />

      {/* Main Content - Constrained to 1280px like landing page */}
      <main className="flex-1 pt-[129px] max-w-[1280px] mx-auto w-full">{/* 89px header + 40px spacing */}
        {/* Hero Section */}
        <section className="relative px-4 md:px-12 lg:px-[120px] py-[40px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 gap-12 md:gap-24 items-start">
              <div className="pt-4 md:pt-8">
                  <h1 className="font-['Playfair_Display:Regular',sans-serif] text-[36px] md:text-[56px] lg:text-[72px] leading-[1.1] text-[#8a0f1c] mb-[32px] md:mb-[40px] lg:mb-[48px] mt-[24px] md:mt-[35px] lg:mt-[45px] mr-[0px] ml-[0px]">
            Crea, planea y programa como por arte de magia
          </h1>
                <p className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[20px] lg:text-[24px] text-black leading-[1.5]">
                  Deja que la inspiración te encuentre.<br /> Nosotros nos encargamos de darle forma.
                </p>
              </div>
              <div className="relative">
                {/* Mockup placeholder */}
                <div className="mt-6 md:mt-12"></div>
              </div>
            </div>
          </div>
        </section>

        {/* IDEA Section */}
        <section className="relative px-4 md:px-12 lg:px-[120px] pt-[0px] pb-[40px] md:pb-[60px] lg:pb-[80px]">
          <div className="max-w-[1200px] mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="font-['Playfair_Display:Regular',sans-serif] text-[40px] md:text-[52px] lg:text-[64px] text-[#8a0f1c] mb-3 md:mb-4">IDEA</h2>
                <p className="font-['Inter:Regular',sans-serif] text-[16px] md:text-[18px] lg:text-[20px] text-black leading-[1.5]">
                  Transforma tus pensamientos en borradores con nuestro asistente mágico de IA.
                </p>
              </div>
              <div className="relative">
                {/* Ideas mockup */}
                <img src={ideasMockup} alt="Ideas interface mockup" className="w-full rounded-[20px] shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* PLANEA Section */}
        <section className="relative px-4 md:px-12 lg:px-[120px] py-[50px] md:py-[75px] lg:py-[100px]">
          {/* Background image layer */}
          <img 
            src={planeaBackground} 
            alt="" 
            className="absolute w-full h-full object-contain hidden lg:block"
            style={{
              top: '20px',
              left: 0,
              zIndex: 0,
              transform: 'scaleX(1.5)'
            }}
          />
          
          {/* Decorative image */}
          <div className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden hidden lg:block" style={{ zIndex: 1 }}>
            <img src={decorativePlanea} alt="" className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] xl:w-[500px] h-auto opacity-100" />
          </div>
          
          <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 10 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
              <div className="relative order-2 lg:order-1">
                
                {/* Content Plans mockup */}
                <img src={planesMockup} alt="Planes de contenido interface mockup" className="w-full rounded-[20px] shadow-lg" />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="font-['Playfair_Display:Regular',sans-serif] text-[40px] md:text-[52px] lg:text-[64px] text-[#8a0f1c] mb-3 md:mb-4">PLANEA</h2>
                <p className="font-['Inter:Regular',sans-serif] text-[16px] md:text-[18px] lg:text-[20px] text-black leading-[1.5]">
                  Planea tus contenidos y deja que IREAL se encargue del resto.
                </p>
              </div>
            </div>
          </div>
       </section>

        {/* AGENDA Section */}
        <section className="relative px-4 md:px-12 lg:px-[120px] py-[40px] md:py-[60px] lg:py-[80px]">
          {/* Decorative image */}
          <div className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden hidden lg:block">
            <img src={decorativeAgenda} alt="" className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] xl:w-[500px] h-auto opacity-100" />
          </div>
          
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="font-['Playfair_Display:Regular',sans-serif] text-[40px] md:text-[52px] lg:text-[64px] text-[#8a0f1c] mb-3 md:mb-4">AGENDA</h2>
                <p className="font-['Inter:Regular',sans-serif] text-[16px] md:text-[18px] lg:text-[20px] text-black leading-[1.5]">
                  Organiza tus publicaciones con un calendario intuitivo y recomendaciones automáticas.
                </p>
              </div>

              <div className="relative">
                {/* Calendar mockup */}
                <img src={agendaMockup} alt="Calendario interface mockup" className="w-full rounded-[20px] shadow-lg mt-0 md:mt-8" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Full width outside main container */}
      <Footer />
    </div>
  );
}

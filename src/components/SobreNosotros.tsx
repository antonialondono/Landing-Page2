import image_ddbf12f2c4822e8f31a770266d5f18c664604895 from 'figma:asset/ddbf12f2c4822e8f31a770266d5f18c664604895.png';
import { Link } from 'wouter';
import magiciansImage from "figma:asset/44de38aa27bdd62df2a3258b93cc5ea6bbf86849.png";
import backgroundTexture from "figma:asset/c0ebaf603f34f7296fe2945fb463f36f2c41a92d.png";
import Header from './Header';
import Footer from './Footer';

export default function SobreNosotros() {
  return (
    <div className="relative w-full min-h-screen bg-[#f5f1eb]" style={{
      backgroundImage: `url(${backgroundTexture})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '400px 400px'
    }}>
      {/* Header */}
      <Header currentPage="sobre-nosotros" />

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 lg:px-[120px] py-[40px] md:py-[60px] lg:py-[80px] pt-[129px]">{/* 89px header + 40px spacing */}
        {/* Hero Section */}
        <div className="mb-12 md:mb-16">
          <h1 className="font-['Playfair_Display:Regular',sans-serif] text-[36px] md:text-[56px] lg:text-[72px] leading-[1.1] text-[#8a0f1c] mb-[32px] md:mb-[40px] lg:mb-[48px] max-w-full lg:max-w-[600px] mt-[24px] md:mt-[35px] lg:mt-[45px] mr-[0px] ml-[0px]">
            Donde la creatividad y la magia se encuentran
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Column - Text */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <p className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[20px] lg:text-[24px] text-black leading-[1.5]">
                  En IREAL creemos que crear contenido no debería ser complicado. Debería sentirse mágico
                </p>

                <p className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[20px] lg:text-[24px] text-black leading-[1.5]">
                  Nacimos para acompañar a creadores, freelancers y equipos que quieren expresarse sin perder tiempo entre plataformas.
                </p>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="relative flex justify-center lg:justify-start">
              <img 
                src={image_ddbf12f2c4822e8f31a770266d5f18c664604895} 
                alt="Magicians illustration" 
                className="w-full max-w-[400px] lg:max-w-none lg:w-full h-auto rounded-[45px] scale-110 md:scale-125"
              />
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-10 md:mb-12 max-w-full lg:max-w-[900px]">
          <p className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[20px] lg:text-[24px] text-black leading-[1.6] mb-6 md:mb-8">
            Nuestra magia está en la tecnología: un asistente inteligente que te entiende, te inspira y te ayuda a mantener tu presencia digital viva y auténtica.
          </p>

          <p className="font-['Inter:Regular',sans-serif] text-[18px] md:text-[20px] lg:text-[24px] text-black leading-[1.6]">
            IREAL nació para recordarte que la tecnología también puede inspirar. Que detrás de cada publicación hay una historia, y que cada historia merece ser contada con un toque de magia.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16">
          <Link href="/">
            <p className="font-['Playfair_Display:Regular',sans-serif] text-[20px] md:text-[24px] lg:text-[28px] text-[#8a0f1c] cursor-pointer hover:underline">
              Únete a nuestra comunidad y empieza a crear con propósito.
            </p>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
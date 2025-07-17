import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';

import Social from "@/components/Social";
import Foto from "@/components/Foto";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center 
        justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desenvolvedor de Software:</span>
            <h1 className="h2 mb-6">Olá, eu sou <br /><span className="text-accent">Wedson Tavares</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">desenvolvedor de software com sólida experiência na criação de soluções digitais inovadoras e funcionais. Minha paixão é transformar ideias em produtos que entregam valor real, combinando design inteligente com tecnologia de ponta.</p>
            {/* btn */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span><a href="/assets/Jose_Wedson_Tavares_CV.pdf" download>Download CV</a></span>
                <FiDownload className="text-xl flex gap-46" />
              </Button>
              <div className="mb-0 xl: mb-">
                <Social containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full 
                flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary
                hover-transition-all duration-500'/>
              </div>
            </div>
          </div>
          {/* foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Foto />
          </div>
        </div>
      </div>
      <Stats />

    </section>
  );
}

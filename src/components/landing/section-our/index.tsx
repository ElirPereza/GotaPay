import { Reveal } from "@/components/shared/Reveal/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const SectionOur = () => {
  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 bg-[#10b981]"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#1c2233]">
          Lo que dicen nuestros usuarios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal position="left" >
            <Card className="bg-[#2b344f] text-white">
              <CardContent className="p-6">
                <p className="mb-4">
                  "PrestaYa me ayudó a obtener el préstamo que necesitaba para
                  mi negocio. El proceso fue rápido y fácil."
                </p>
                <p className="font-bold text-[#10b981]">
                  - María G., Emprendedora
                </p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal position="right" >
            <Card className="bg-[#2b344f] text-white">
              <CardContent className="p-6">
                <p className="mb-4">
                  "Como inversor, he encontrado excelentes oportunidades para
                  hacer crecer mi dinero mientras ayudo a otros."
                </p>
                <p className="font-bold text-[#10b981]">
                  - Carlos R., Inversor
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SectionOur;

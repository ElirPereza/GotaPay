import { Reveal } from "@/components/shared/Reveal/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Users } from "lucide-react";

const SectionCharacter = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-[#10b981]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#1c2233]">
          Características principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal position="right" delay={0.2} >
            <Card className="bg-primary text-white">
              <CardContent className="flex flex-col items-center p-6">
                <Shield className="w-12 h-12 text-[#10b981] mb-4" />
                <h3 className="text-xl font-bold mb-2">Seguro y confiable</h3>
                <p className="text-center text-gray-300">
                  Transacciones protegidas y verificación de usuarios
                </p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal position="right" delay={0.4} >
            <Card className="bg-[#2b344f] text-white">
              <CardContent className="flex flex-col items-center p-6">
                <ArrowRight className="w-12 h-12 text-[#10b981] mb-4" />
                <h3 className="text-xl font-bold mb-2">Rápido y sencillo</h3>
                <p className="text-center text-gray-300">
                  Proceso de solicitud y aprobación en minutos
                </p>
              </CardContent>
            </Card> 
          </Reveal>
          <Reveal position="right" delay={0.6}>
            <Card className="bg-[#2b344f] text-white">
              <CardContent className="flex flex-col items-center p-6">
                <Users className="w-12 h-12 text-[#10b981] mb-4" />
                <h3 className="text-xl font-bold mb-2">Comunidad activa</h3>
                <p className="text-center text-gray-300">
                  Conecte con inversores y prestatarios confiables
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SectionCharacter;

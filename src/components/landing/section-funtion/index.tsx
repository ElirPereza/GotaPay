import { Reveal } from '@/components/shared/Reveal/Reveal'
import React from 'react'

const SectionFuntion = () => {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-[#f1f3f5]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#1c2233]">
              Cómo funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Reveal position='bottom' className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#10b981] text-white flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2 text-[#1c2233]">Regístrese</h3>
                <p className="text-center text-gray-600">Cree una cuenta y verifique su identidad</p>
              </Reveal>
              <Reveal position='bottom' className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#10b981] text-white flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2 text-[#1c2233]">Solicite o invierta</h3>
                <p className="text-center text-gray-600">Elija el monto y los términos que le convengan</p>
              </Reveal>
              <Reveal position='bottom' className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#10b981] text-white flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2 text-[#1c2233]">Reciba fondos o gane intereses</h3>
                <p className="text-center text-gray-600">Disfrute de transacciones rápidas y seguras</p>
              </Reveal>
            </div>
          </div>
        </section>
  )
}

export default SectionFuntion
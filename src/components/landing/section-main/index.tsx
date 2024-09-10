import { Reveal } from '@/components/shared/Reveal/Reveal'
import { Button } from '@/components/ui/button'
import React from 'react'

const SectionMain = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#1c2233] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Reveal position='bottom'  className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Préstamos rápidos y seguros entre personas
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Conectamos a prestamistas y prestatarios de forma segura y eficiente. Obtenga el dinero que necesita o invierta en la comunidad.
                </p>
              </Reveal>
              <Reveal position='right' className="space-x-4">
                <Button className="bg-[#10b981] text-white hover:bg-[#0d9668]">Solicitar préstamo</Button>
                <Button variant="outline" className="text-[#10b981] border-[#10b981] hover:bg-[#10b981] hover:text-white">
                  Invertir
                </Button>
              </Reveal>
            </div>
          </div>
        </section>
  )
}

export default SectionMain
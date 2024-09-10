import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const SectionRegister = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1c2233] text-white">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ¿Listo para empezar?
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
            Únase a nuestra comunidad de préstamos entre personas y experimente una nueva forma de manejar sus finanzas.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <form className="flex space-x-2">
            <Input className="flex-1 bg-white text-[#1c2233]" placeholder="Ingrese su email" type="email" />
            <Button className="bg-[#10b981] text-white hover:bg-[#0d9668]">Registrarse</Button>
          </form>
          <p className="text-xs text-gray-400">
            Al registrarse, acepta nuestros términos y condiciones.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SectionRegister
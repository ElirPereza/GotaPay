"use "
import { Protect } from "@clerk/nextjs";
import React from "react";




const Settings = () => {
  return (
    <div>
      <section> general content</section>
      <Protect role="org:admin">
        {/* Sección visible solo para administradores */}
        <section> Contenido para administradores </section>
      </Protect>

      <Protect role="org:owner">
        {/* Sección visible solo para propietarios */}
        <section> Contenido para propietarios </section>
      </Protect>
    </div>
  );
};

export default Settings;

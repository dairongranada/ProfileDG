import React from "react";
import Me from "../../../../image/me.jpeg";
import {IoLogoWhatsapp,IoLogoInstagram } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="flex w-screen  flex-col items-center justify-center relative bg-primary pb-10">
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-screen-xl">
        <div className="w-full h-420 flex items-center justify-center">
          <div className="w-275 h-340 bg-[#6a6b6b] rounded-md relative">
            <div className="cardme w-full h-full absolute left-5 top-5 object-cover rounded-lg drop-shadow-2xl">
              <img className="w-full h-full absolute object-cover rounded-lg drop-shadow-2xl" src={Me} alt="Dairon Granada"/>

              <div class="content">
                <p class="title"><span>Redes Sociales </span></p>
                <ul class="sci">
                  <li>
                    <a href="https://instagram.com/dairongranadaa">
                      <IoLogoInstagram/>
                    </a>
                  </li>

                  <li>
                    <a href="https://wa.me/573218666262">
                      <IoLogoWhatsapp/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-320 flex flex-col">

          <p className="text-lg text-textBase text-left p-4">
              Soy un programador junior de Armenia, Quindío (Colombia), especializado en desarrollo Back-End, principalmente con Django. 
              También tengo experiencia con Python, Node.js y TypeScript. En el área de Front-End, cuento con conocimientos en React, JavaScript, 
              HTML y CSS (Bootstrap y Tailwind CSS).
          </p>

          <p className="text-lg text-textBase text-left p-4">
              He trabajado en todas las etapas del ciclo de desarrollo de aplicaciones web dinámicas, desde la planificación hasta la implementación.
               Aunque mi enfoque principal es el Back-End (python), actualmente utilizo React.js para el desarrollo del Front-End cuando es necesario.
          </p>

        </div>

      </section>
    </div>
  );
};

export default About;

import React from "react";
import Me from "../../../../image/me.jpeg";
import {IoLogoWhatsapp,IoLogoInstagram } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="flex w-screen  flex-col items-center justify-center relative bg-primary pb-10">
      <section className="w-full grid grid-cols-1 gap-4 md:max-w-screen-xl pl-10 pr-10">
        {/* <div className="w-full h-420 flex items-center justify-center">
          <div className="w-275 h-340 bg-[#6a6b6b] rounded-md relative">
            <div className="cardme w-full h-full absolute left-5 top-5 object-cover rounded-lg drop-shadow-2xl">
              <img className="w-full h-full absolute object-cover rounded-lg drop-shadow-2xl" src={Me}alt="Dairon Granada"/>

              <div class="content">
                <p class="title"><span>Redes Sociales </span></p>
                <ul class="sci">
                  <li>
                    <a href="https://instagram.com/dairongranadaa23">
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
        </div> */}

        <div className="w-full h-320 flex flex-col">

          <p className="text-lg text-textBase text-left p-4">
          Soy un programador jr de Armenia - Quindio (Colombia)  
          con conocimiento en Back-End usando python, Django,Node js, 
          Typescript, en el apartado de Front-End usando Html, 
          css(Boostrap, Tailwind), JavaScript, React.
          </p>

          <p className="text-lg text-textBase text-left p-4">
            Experimentado con todas las etapas del ciclo de desarrollo de
            proyectos web dinámicos, tengo conocimiento en diferentes áreas en
            desarrollo y el framework con el que trabajo actualmente es React.js
          </p>

        </div>
      </section>
    </div>
  );
};

export default About;

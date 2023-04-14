import React, { useEffect } from 'react'
import Nav from "../../Layouts/Nav/Nav";
import About from "../../Layouts/Views/Me/About";
import Bot from "../../Layouts/Views/Main/Bot";
import Experiences from "../../Layouts/Views/Me/Experiences";
import Works from "../../Layouts/Views/Me/Works";
import Contacts from "../../Layouts/Views/Contact/Contacts";
import $ from "jquery";



export const Home = () => {

  useEffect(() => {
    $('.ContModal').hide();

  }, [])



  return (
    <>
      <Nav />
      <Bot />
      <About />
      <Experiences />
      <Works />
      <Contacts />

      <div className='w-full flex gap-px flex-wrap flex-col items-center justify-evenly relative bg-primary pb-10' >
        <h5 className='text-2xl text-gray-400'  >Contador de visitas</h5>
        <a href="https://www.contadorvisitasgratis.com" title="contador de visitas">
          <img 
              src="https://counter2.optistats.ovh/private/contadorvisitasgratis.php?c=p19wt4huuukycwhwnka9t8eflkl8lsh6" 
              border="0" 
              title="contador de visitas" 
              alt="contador de visitas"/>
        </a>
      </div>



      <hr />
      <div className='bg-primary pb-10  pl-20 pt-5 border-t-sky-50' >
        <span className='Copyright text-slate-500' >Copyright © 2023 - Designed by Dairon Granada</span>
      </div>




    </>
  )
}

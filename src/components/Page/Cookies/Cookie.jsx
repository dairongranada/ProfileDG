import React,{useState} from 'react'
import "./Cookies.css"
import cookieIMG from"./cookie.png"

import Cookies from 'universal-cookie';



export const Cookie = () => {

  const newCook = new Cookies();



  const [first, setfirst] = useState(false)
  const onchange = ()=>{
    setfirst(true)
    newCook.set("09e91", "f537f99bed6b1716a83",{path:"/"})
  }
  

  return (
    <div className='cookie-container'>
      
      {!newCook.get('09e91') &&
      
        <div className="cookie-banner-container">
            <img src={cookieIMG} alt={cookieIMG} className="h-10 w-auto flex absolute cookie1" />
            <img src={cookieIMG} alt={cookieIMG} className="h-10 w-auto flex absolute cookie2" />
            <img src={cookieIMG} alt={cookieIMG} className="h-10 w-auto flex absolute cookie3" />
            <img src={cookieIMG} alt={cookieIMG} className="h-10 w-auto flex absolute cookie4" />
            <h3 className="text-3xl mb-0 leading-7">Cookies</h3>

            <p className="text-center mb-4 text-1xl	 mt-2">
                Las cookies se usan para optimizar 
                nuestro sitio web y nuestro Servicio
   
            </p>
            <div>
              <span onClick={onchange} class="text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">Aceptar</span>
              <span onClick={onchange} class="mx-3 text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">Rechazar</span>
            </div>
        </div>
        
      }
    </div>
  )
}

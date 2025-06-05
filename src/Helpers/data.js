import { IoCodeWorking, IoLogoGithub, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";

import img1 from '../image/project-1.png'
import img2 from '../image/project-2.png'
import img3 from '../image/project-3.png'


export const Experience = [
    {
        id: 1,
        date: "2021 - 2023 - Tecnologo Finalizado.",
        iconsSrc: <IoCodeWorking />,
        title: "Analisis y desarrollo en sistemas de informacion",
        location: "Armenia - Quindio (Cololmbia)",
        name_company: "SENA Centro de comercio y turismo",
        describe: `Desarrollo y testear aplicaciones en tecnologías de desarrollo de software. Utilizando técnicas y patrones de construcción de sistemas de información.`,
        info: `https://senacertificados.co/analisis-desarrollo-de-sistemas-de-informacion/`,
        click:"Haz click para mas info"
    },   
    {
        id: 2,
        date: "2023 - Presente.",
        iconsSrc: <IoCodeWorking />,
        title: "Backend Developer",
        location: "Armenia - Quindio (Cololmbia)",
        name_company: "Don Pollo S.A.S",
        describe: `Me especializo en el desarrollo visual y estructural de aplicaciones web, optimizando la experiencia del usuario en distintos dispositivos y navegadores. Además, he implementado automatizaciones RPA con Python, desarrollado aplicaciones web empresariales y administrado bases de datos, contribuyendo así a mejorar la eficiencia operativa.`,
        describe_tecnologias: `Tecnologias:Python, Django, JavaScript, MySQl etc...`,
    },
]

export const Projects = [
    {
        id: 1,
        name: "Style Tatto",
        imageSrc: img1,
        techs: "Python (Django), React, MySQL",
        github: "https://github.com/dairongranada/RazersGaming-",
    },
    {
        id: 2,
        name: "Razers Gaming",
        imageSrc: img2,
        techs: "React, Firebase ",
        github: "https://github.com/dairongranada/RazersGaming-",
    },
    {
        id: 3,
        name: "Blog (Desarrollo en Proceso)",
        imageSrc: img3,
        techs: "... ... ...",
    },
]



export const SocialLinks = [
    {
        id: '3',
        name: 'Whatsapp',
        iconsSrc: <IoLogoWhatsapp className="text-whatssap text-3xl cursor-pointer" />,
        link: 'https://wa.me/573218666262'
    },
        {
        id: '2',
        name: 'Github',
        iconsSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
        link: 'https://github.com/dairongranada'
    },
    {
        id: '1',
        name: 'Instagram',
        iconsSrc: <IoLogoInstagram className="text-red-600 text-3xl cursor-pointer" />,
        link: 'https://instagram.com/dairongranadaa'
    }
]
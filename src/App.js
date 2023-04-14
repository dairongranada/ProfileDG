
import {useState} from 'react'
import { Home } from "./components/Page/Home/Home.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [changeLoading, setchangeLoading] = useState(true);

  setTimeout(function(){
    setchangeLoading(false)
}, 500);

  return (
    <>
      <ToastContainer />

      {changeLoading &&

        <div className='w-full h-screen flex gap-px flex-wrap flex-col items-center justify-evenly relative bg-primary pb-10' >
          <div className="pl">
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__text text-textBase ">Cargando....</div>
          </div>
        </div>
        
      }   

      {!changeLoading &&
        <Home />
        

      }   


    </>
  );
}

export default App;

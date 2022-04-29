import {
    BrowserRouter as Router,

    Routes,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-white bg-green">
        <div className="flex flex-col items-center h-screen gap-5 p-16 wrapper">
          <h2 className="text-center text-white">Hola! soy tu nutricionista, te pido por favor que completes el siguiente formulario a fin de que...</h2>
    
            <Link to="/ficha" className="p-3 bg-white rounded-lg text-green">Ficha Nutricional</Link>
            <Link to="/pacientes" className="p-3 bg-white rounded-lg text-green">pacientes</Link>
       
        </div>
    </div>
  )
}

export default Home
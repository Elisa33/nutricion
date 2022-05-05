import {
    BrowserRouter as Router,

    Routes,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-white bg-gradient-to-b from-primary to-yellow">
        <div className="flex flex-col items-center justify-center h-screen gap-8 p-16 wrapper">
          <h2 className="font-light text-center text-white">¡Hola! soy tu nutricionista, te pido por favor que completes el siguiente formulario</h2>
            <div className="w-1 h-1 p-2 bg-white rounded-full animate-bounce"></div>
            <Link to="/ficha" className="w-40 p-3 text-center bg-white border-2 border-white rounded-lg text-green hover:text-white hover:bg-transparent">Ficha Nutricional</Link>
            <Link to="/pacientes" className="w-40 p-3 text-center bg-white border-2 border-white rounded-lg text-green hover:text-white hover:bg-green">Lista Pacientes</Link>
        </div>
    </div>
  )
}

export default Home
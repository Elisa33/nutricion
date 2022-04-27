import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-green text-white h-screen p-16 flex flex-col items-center gap-5">
        <h2 className="text-white text-center">Hola! soy tu nutricionista, a te pido por favor que completes el siguiente formulario a fin de que....</h2>
        <Link to="/ficha" className="bg-white p-3 rounded-lg text-green">Ficha Nutricional</Link>
    </div>
  )
}

export default Home
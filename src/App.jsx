import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import FichaNutricional from './components/FichaNutricional';
import Pacientes from './components/Pacientes';
import Paciente from './components/Paciente';
import Home from './components/Home';

function App() {

  return (
    <HashRouter> 
        <Routes>
          <Route path="/ficha" element={<FichaNutricional />}/>
          <Route path="/pacientes/:id" element={<Paciente />}/>
          <Route path="/pacientes" element={<Pacientes />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
    </HashRouter>
    
  )
}

export default App

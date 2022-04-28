import React, {useState, useEffect} from 'react'
import { Link, HashRouter } from "react-router-dom";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../firebase'
const Pacientes = () => {

    
  const [respuestas, setRespuestas] = useState([])
  //const [verPdf, setVerPdf ] = useState(null)

  useEffect(()=>{
    const obtenerDatos = async ()=>{
      try {
            const data = await getDocs(collection(db, "answers"));
            const arrayData = data.docs.map(doc =>({id:doc.id,...doc.data()}))
            //console.log(arrayData)
            setRespuestas(arrayData)
            
      
      } catch (error) {
        console.log(error) 
      }
    }
    obtenerDatos();
  },[])


  return (
    <div className="min-h-screen bg-green">
      <div className="pt-10 wrapper">
        <h1>Listado pacientes</h1>
        {/* <nav>
            <button onClick={()=>{setVerPdf(!verPdf)}} className='p-4 m-6 bg-white rounded-md text-green'>Ver pdf</button>
            <button className='p-4 m-6 bg-white rounded-md text-green'>Descargar pdf</button>
        </nav> */}
        <div className='py-20'>

        <HashRouter>
          {respuestas.map((item)=>(
          
                  <Link key={item.id} to={`/pacientes/${item.id}`} className="capitalize text-accent">
                  {item.data.datos.nombre} {item.data.datos.apellido}
                  </Link>
          
          ))}
        </HashRouter>
        </div>
    </div>
    </div>
  )
}

export default Pacientes
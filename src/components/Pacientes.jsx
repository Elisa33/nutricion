import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
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
    <div>
        <h1>Listado pacientes</h1>
        <nav>
            <button onClick={()=>{setVerPdf(!verPdf)}} className='p-4 rounded-md bg-white m-6 text-green'>Ver pdf</button>
            <button className='p-4 rounded-md bg-white m-6 text-green'>Descargar pdf</button>
        </nav>
        <ul>

        {respuestas.map((item)=>(
            <li key={item.id}>
                <Link to={`/pacientes/${item.id}`}>
                {item.data.datos.nombre} {item.data.datos.apellido}
                </Link>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Pacientes
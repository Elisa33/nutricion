import React, {useEffect, useState} from 'react'
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom'
import { db } from '../firebase'

const Paciente = () => {

    const idPaciente = useParams();
    console.log(idPaciente.id)

    const [paciente, setPaciente] = useState({})

    useEffect(()=>{
        const obtenerDatos = async ()=>{
          try {
            const pacienteDatos = doc(db, "answers", idPaciente.id);
                const docSnap = await getDoc(pacienteDatos);

                if (docSnap.exists()) {
                //console.log(docSnap.data().data);
                setPaciente(docSnap.data().data);
                paciente && console.log(paciente)
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }
                
          
          } catch (error) {
            console.log(error) 
          }
        }
        obtenerDatos();
      },[])

    
  return (
    <div>
       {
           paciente && (
               <div>{paciente.datos.nombre}</div>
           )
       }
    </div>
  )
}

export default Paciente
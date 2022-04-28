import React, {useEffect, useState} from 'react'
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom'
import { db } from '../firebase'

const Paciente = () => {

    const idPaciente = useParams();

    const [paciente, setPaciente] = useState({})
    const {datos, carnes, dieta, frutas} = paciente;
    //console.log(typeof(carnes))

    frutas && console.log(frutas)
    //paciente && console.log(paciente)
        
    //paciente[0].frutas.map((elem)=> console.log(elem))
    frutas && Object.entries(frutas).forEach(([key, value]) => {
        if(value){

            console.log(key)
        }
        })

    useEffect(()=>{
        const obtenerDatos = async ()=>{
          try {
            const pacienteDatos = doc(db, "answers", idPaciente.id);
                const docSnap = await getDoc(pacienteDatos);

                if (docSnap.exists()) {
                //console.log(docSnap.data().data);
                setPaciente(docSnap.data().data);
               
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
    <div className="bg-green">
      <div className="pt-10 wrapper">
        <h1>Datos del Paciente</h1>
     
        {
            datos && (
                <div className='capitalize'>{datos.nombre} {datos.apellido}</div>
            )
        }
        <h2>Dieta</h2>
        {
            dieta && (
                <div className='capitalize'>{dieta.almuerzo} {dieta.almuerzohora}</div>
            )
        }
        <h2>Frutas</h2>
        
        {
           frutas && Object.entries(frutas).forEach(([key, value]) => {
            if(value){
                <div>hol - {key}</div>

            }
           })
        }
       
       
          
           

           
       
       
       
       
        </div>
    </div>
  )
}

export default Paciente
import React, {useEffect, useState} from 'react'
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom'
import { db } from '../firebase'

const Paciente = () => {

    const idPaciente = useParams();

    const [paciente, setPaciente] = useState({})
    const {datos, carnes, dieta, frutas, verduras, hc, infusiones, lacteos, semillas, frutossecos, legumbres, panes, actividad, otros } = paciente;

    otros && console.log(otros)
    paciente && console.log(paciente)
    
        
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
        <section className='grid gap-5 px-5 py-8 rounded-lg bg-neutral'>

        <div>
          <h2>Datos del Paciente</h2>
          {
              datos && (
                  <div>
                    <p className='capitalize'>Nombre completo: {datos.nombre} {datos.apellido}</p>
                    <div className='flex gap-4 capitalize'>
                    <p>Edad: {datos.edad} </p> 
                    <p>Altura: {datos.altura} </p> 
                    <p>Peso: {datos.peso} </p>
                    </div>
                    <p className='capitalize'>Email: {datos.email} </p>
                    <p className='capitalize'>Teléfono: {datos.telefono} </p>
                  </div>
              )
          }
        </div>
       

        
        <div>
          <h2>Historia Clinica</h2>
          {
             hc && Object.entries(hc).map(([key, value]) => (
                  value &&  <p>{key} - {value}</p>
             ))
          }
        </div>
        <div>
          <h2>Alimentos</h2>
          <h3>Infusiones</h3>
          {
             infusiones && Object.entries(infusiones).map(([key, value]) => (
                  value &&  <span>{key}  </span>
             ))
          }
          <h3>Lácteos</h3>
          {
             lacteos && Object.entries(lacteos).map(([key, value]) => (
                  value &&  <span>{key}  </span>
             ))
          }
          <h3>Carnes</h3>
          {
             carnes && Object.entries(carnes).map(([key, value]) => (
                  value &&  <span>{key}  </span>
             ))
          }
          <h3>Panes</h3>
          {
             panes && Object.entries(panes).map(([key, value]) => (
                  value &&  <span>{key}  </span>
             ))
          }
          <h3>Semillas</h3>
          {
             semillas && Object.entries(semillas).map(([key, value]) => (
                  value &&  <span>{key}  </span>
             ))
          }
          <h3>Frutas Secas</h3>
          {
             frutossecos && Object.entries(frutossecos).map(([key, value]) => (
                  value &&  <span>{key}  </span>
             ))
          }
          <h3>Legumbres</h3>
          {
             legumbres && Object.entries(legumbres).map(([key, value]) => (
                  value &&  <span>{key}  </span>
             ))
          }
        </div>
        
        <div>
          <h2>Verduras que no consume</h2>
          
          {
             verduras && Object.entries(verduras).map(([key, value]) => (
                  value &&  <p>{key}</p>
             ))
          }
        </div>
        <div>
          <h2>Frutas que no consume</h2>
          
          {
             frutas && Object.entries(frutas).map(([key, value]) => (
                  value &&  <p>{key}</p>
             ))
          }
        </div>
        <div className="">
          <h2>Recordatorio</h2>
          {
              dieta && (
                  <div>
                    <p className='normal-case'>Desayuno: {dieta.desayuno} {dieta.desayunohora}hs</p>
                    {
                      dieta.colacion &&  <p className='normal-case'>Colacion: {dieta.colacion} {dieta.colacionhora}hs</p>
                    }
                   
                    <p className='normal-case'>Almuerzo: {dieta.almuerzo} {dieta.almuerzohora}hs</p>
                    {
                      dieta.colaciondos &&  <p className='normal-case'>Colaciondos: {dieta.colaciondos} {dieta.colaciondoshora}hs</p>
                    }
                    <p className='normal-case'>Merienda: {dieta.merienda} {dieta.meriendahora}hs</p>
                    <p className='normal-case'>Cena: {dieta.cena} {dieta.cenahora}hs</p>
                    {
                      dieta.otros &&  <p className='normal-case'>otros: {dieta.otros} {dieta.otroshora}hs</p>
                    }
                  </div>
              )
          }
        </div>
        <div>
          <h2>Actividad fisica</h2>
         
          
          {/* {actividad.tipo &&  <p className='normal-case'>Tipo: {actividad.tipo} </p>  }
          {actividad.tiempo &&  <p className='normal-case'>tiempo: {actividad.tiempo} hs</p>   }
          {actividad.bebidas &&  <p className='normal-case'>bebidas: {actividad.bebidas} </p>  } */}
        </div>
        <div>
          <h2>Otros</h2>
          
          {/* {otros.comidafavorita &&  <p className='normal-case'>Comida favorita: {otros.comidafavorita}</p>          }
          {otros.motivoconsulta &&  <p className='normal-case'>Motivo consulta: {otros.motivoconsulta}</p>          }
          {otros.comoconociste &&  <p className='normal-case'>Como me conociste: {otros.comoconociste} </p> }  */}        
        </div>
        
        
       
       
          
           

           
       
       
       
        </section>
        </div>
    </div>
  )
}

export default Paciente
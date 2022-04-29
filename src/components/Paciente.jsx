import React, {useEffect, useState} from 'react'
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom'
import { db } from '../firebase'

const Paciente = () => {

    const idPaciente = useParams();

    const [paciente, setPaciente] = useState({})
    const {datos, carnes, dieta, frutas, verduras, hc, infusiones, lacteos, semillas, frutossecos, legumbres, panes, actividad, otros } = paciente;

    hc && console.log(hc.suplementos)
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
                  <div className='space-y-1'>
                    <p className=''><span className="text-green">Nombre completo:</span> {datos.nombre} {datos.apellido}</p>
                    <div className='flex gap-4 capitalize'>
                    <p>Edad: {datos.edad} </p> 
                    <p>Altura: {datos.altura} </p> 
                    <p>Peso: {datos.peso} </p>
                    </div>
                    <p>Email: {datos.email} </p>
                    <p className='capitalize'>Teléfono: {datos.telefono} </p>
                  </div>
              )
          }
        </div>
       
        <div>
          <h2>Historia Clinica</h2>

          {
            hc &&(
              <div className='space-y-1'>
                {hc.suplementos && <p>Suplementos: {hc.textosuplementos}</p>}
                {hc.dieta && <p>Dieta: {hc.textodieta}</p>}
                {hc.fuera && <p>Come afuera: {hc.textofuera}</p>}
                {hc.metabolica && <p>Enfermedad metabólica: {hc.textometabolica}</p>}
                {hc.alergias && <p>Alergias: {hc.textoalergias}</p>}
                {hc.lactosa && <p>Lactosa: {hc.textolactosa}</p>}
                {hc.irritable && <p>Colon irritable: {hc.textoirritable}</p>}
                {hc.estrenimiento && <p>Estrenimiento: {hc.estrenimiento}</p>}
                {hc.intoleracia && <p>Intoleracia: {hc.textointoleracia}</p>}
                {hc.vesicula && <p>Vesicula: {hc.textovesicula}</p>}
                {hc.diverticulos && <p>Diverticulos: {hc.textodiverticulos}</p>}
                {hc.renal && <p>Renal: {hc.textorenal}</p>}
                {hc.medicacion && <p>Medicacion: {hc.textomedicacion}</p>}
                {hc.anticonceptivos && <p>Anticonceptivos: {hc.textoanticonceptivos}</p>}
              </div>
            )
          }
          
        </div>
        <div>
          <h2>Alimentos</h2>
          <h4 className="pt-2">Infusiones</h4>
          {
             infusiones && Object.entries(infusiones).map(([key, value]) => (
                  value &&  <span className='capitalize'>{key}  </span>
             ))
          }
          <h4 className="pt-3">Lácteos</h4>
          {
             lacteos && Object.entries(lacteos).map(([key, value]) => (
                  value &&  <span className='capitalize'>{key}  </span>
             ))
          }
          <h4 className="pt-3">Carnes</h4>
          {
             carnes && Object.entries(carnes).map(([key, value]) => (
                  value &&  <span className='capitalize'>{key}  </span>
             ))
          }
          <h4 className="pt-3">Panes</h4>
          {
             panes && Object.entries(panes).map(([key, value]) => (
                  value &&  <span className='capitalize'>{key}  </span>
             ))
          }
          <h4 className="pt-3">Semillas</h4>
          {
             semillas && Object.entries(semillas).map(([key, value]) => (
                  value &&  <span className='capitalize'>{key}  </span>
             ))
          }
          <h4 className="pt-3">Frutas Secas</h4>
          {
             frutossecos && Object.entries(frutossecos).map(([key, value]) => (
                  value &&  <span className='capitalize'>{key}  </span>
             ))
          }
          <h4 className="pt-3">Legumbres</h4>
          {
             legumbres && Object.entries(legumbres).map(([key, value]) => (
                  value &&  <span className='capitalize'>{key}  </span>
             ))
          }
        </div>
        
        <div>
          <h2>Verduras que no consume</h2>
          
          {
             verduras && Object.entries(verduras).map(([key, value]) => (
                  value &&  <p className='capitalize'>{key}</p>
             ))
          }
        </div>
        <div>
          <h2>Frutas que no consume</h2>
          
          {
             frutas && Object.entries(frutas).map(([key, value]) => (
                  value &&  <p className='capitalize'>{key}</p>
             ))
          }
        </div>
        <div className="">
          <h2>Recordatorio</h2>
          {
              dieta && (
                  <div>
                    {
                      dieta.desayuno && <p className='normal-case'>{dieta.desayunohora}hs Desayuno: {dieta.desayuno} </p>
                    }
                    {
                      dieta.colacion &&  <p className='normal-case'>{dieta.colacionhora}hs Colacion: {dieta.colacion} </p>
                    }
                   
                    {
                      dieta.almuerzo && <p className='normal-case'>{dieta.almuerzohora}hs Almuerzo: {dieta.almuerzo} </p>
                    }
                    {
                      dieta.colaciondos &&  <p className='normal-case'>{dieta.colaciondoshora}hs Colacion: {dieta.colaciondos}</p>
                    }
                    {
                      dieta.merienda && <p className='normal-case'>{dieta.meriendahora}hs Merienda: {dieta.merienda} </p>
                    }
                    {
                      dieta.cena && <p className='normal-case'>{dieta.cenahora}hs Cena: {dieta.cena} </p>
                    }
                    {
                      dieta.otros &&  <p className='normal-case'>otros: {dieta.otros} {dieta.otroshora}hs</p>
                    }
                  </div>
              )
          }
        </div>
        <div>
          <h2>Actividad fisica</h2>
         {actividad ? (
          <div>

          {actividad.tipo &&  <p className='normal-case'>Tipo: {actividad.tipo} </p>  }
          {actividad.tiempo &&  <p className='normal-case'>Tiempo: {actividad.tiempo} hs</p>   }
          {actividad.bebidas &&  <p className='normal-case'>Bebidas: {actividad.bebidas} </p>  }
          </div>

         ): <p>No hay datos de actividad fisica</p>
         }
          
        </div>
        <div>

          {otros ? (
          <div>
          <h2>Otros</h2>

          {otros.comidafavorita &&  <p className='normal-case'>Comida favorita: {otros.comidafavorita}</p>          }
          {otros.motivoconsulta &&  <p className='normal-case'>Motivo consulta: {otros.motivoconsulta}</p>          }
          {otros.comoconociste &&  <p className='normal-case'>Como me conociste: {otros.comoconociste} </p> } 
          </div>

         ) :  <p>No hay datos de otros</p>
         }
          
                 
        </div>
        
        
       
       
          
           

           
       
       
       
        </section>
        </div>
    </div>
  )
}

export default Paciente
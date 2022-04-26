import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";

import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase'

function App() {
  

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });
  const onSubmit = data => console.log(data);

  console.log(watch("suplementos"));
 const [textInput, setTextInput] = useState([])

  useEffect(()=>{
    const obtenerDatos = async ()=>{
      try {
        const data = await getDocs(collection(db,"answers"));
            console.log(data)
      
      } catch (error) {
        console.log(error) 
      }
    }
    obtenerDatos();
  },[])


  /* Toogle checked */
  function showInput(question, e){
    console.log(e)
    setTextInput([...textInput, question])
  }

  

  return (
    <div className="">
      <div className="pt-10 wrapper">
        <h1 className='text-4xl font-bold text-primary'>Ficha nutricional</h1>
      
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className='py-5 text-secondary'>Datos personales</h3>
          <section className="grid gap-5 md:grid-cols-2">
            <label >Nombre
              <input {...register("nombre", { required: true })}/>
              {errors.nombre && <span>This field is required</span>}
            </label>
      
            <label>Apellido
              <input {...register("apellido", { required: true })} />
            </label>
            <label>Edad
              <input type="number" {...register("age", { min: 18, max: 99 })} />
            </label>
            <label>Email
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format"
                  }
                })}
                type="email"
              />
                  {errors.email && <span role="alert">{errors.email.message}</span>}
                  </label>
            <label>Telefono
              <input {...register("apellido", { required: true })} />
            </label>
            <label>Altura
            <input type="number" {...register("height")} />
            </label>
      
            <label>Peso
            <input type="number" {...register("weight")} />
            </label>
      
      
          </section>
          <section className='grid gap-8 py-12'>
            <label className="flex items-center gap-4">
              <span>¿Consume suplementos?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('suplementos')}} type="checkbox" {...register('suplementos')}/>
              <span>Si</span>
            </label>
            {
              watch("suplementos") && (
                <label className='w-full'>Especificar
                  <input className='bottom-line' {...register('textosuplementos')} />
                </label>)
            }
            
            <label className="flex items-center gap-4">
              <span>¿Realiza alguna dieta?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('dieta')}} type="checkbox" {...register('dieta')}/>
              <span>Si</span>
            </label>

            {
              watch("dieta") && (
                <label className='w-full'>Especificar
                  <input className='bottom-line' {...register('textodieta')} />
                </label>)
            }

            <label className="flex items-center gap-4">
              <span>¿Come fuera del hogar?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('fuera')}} type="checkbox" {...register('fuera')}/>
              <span>Si</span>
            </label>

            {
              watch("fuera") && (
                <label className='w-full'>Especificar
                  <input className='bottom-line' {...register('textofuera')} />
                </label>)
            }

            <label className="flex items-center gap-4">
              <span>¿Tiene alguna enfermedad metabólica de base?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('metabolica')}} type="checkbox" {...register('metabolica')}/>
              <span>Si</span>
            </label>

            {
              watch("metabolica") && (
                <label className='w-full'>Especificar
                  <input className='bottom-line' {...register('textometabolica')} />
                </label>)
            }
            <label className="flex items-center gap-4">
              <span>¿Alergias alimentarias?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('alergias')}} type="checkbox" {...register('alergias')}/>
              <span>Si</span>
            </label>

            {
              watch("alergias") && (
                <label className='w-full'>Especificar
                  <input className='bottom-line' {...register('textoalergias')} />
                </label>)
            }
            <label className="flex items-center gap-4">
              <span>¿Intolerancia a la lactosa?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('lactosa')}} type="checkbox" {...register('lactosa')}/>
              <span>Si</span>
            </label>

            {
              watch("lactosa") && (
                <label className='w-full'>Especificar
                  <input className='bottom-line' {...register('textolactosa')} />
                </label>)
            }
            <label className="flex items-center gap-4">
              <span>¿Colon Irritable?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('irritable')}} type="checkbox" {...register('irritable')}/>
              <span>Si</span>
            </label>

            {
              watch("irritable") && (
                <label className='w-full'>Especificar
                  <input className='bottom-line' {...register('textoirritable')} />
                </label>)
            }
            <label className="flex items-center gap-4">
              <span>¿Estreñimiento?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('estrenimientos')}} type="checkbox" {...register('estrenimientos')}/>
              <span>Si</span>
            </label>

            {
              watch("estrenimientos") && (
                <label className='w-full'>Especificar
                  <input className='bottom-line' {...register('textoestrenimientos')} />
                </label>)
            }
            <label className="flex items-center gap-4">
              <span>¿Intolerancia alimentaria?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('intolerancia')}} type="checkbox" {...register('intolerancia')}/>
              <span>Si</span>
            </label>

            {
              watch("intolerancia") && (
                <label className='w-full'>Especificar
                  <input className='bottom-line' {...register('textointolerancia')} />
                </label>)
            }
            <label className="flex items-center gap-4">
              <span>¿Alteraciones de la Vesícula Biliar?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('vesicula')}} type="checkbox" {...register('vesicula')}/>
              <span>Si</span>
            </label>

            {
              watch("vesicula") && (
                <label className='w-full'>Especificar
                  <input className='bottom-line' {...register('textovesicula')} />
                </label>)
            }
            <label className="flex items-center gap-4">
              <span>¿Tiene o tuvo divertículos?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('diverticulos')}} type="checkbox" {...register('diverticulos')}/>
              <span>Si</span>
            </label>

            {
              watch("diverticulos") && (
                <label className='w-full'>Especificar
                  <input className='bottom-line' {...register('textodiverticulos')} />
                </label>)
            }
            <label className="flex items-center gap-4">
              <span>¿Enfermedad Renal?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('renal')}} type="checkbox" {...register('renal')}/>
              <span>Si</span>
            </label>

            {
              watch("renal") && (
                <label className='w-full'>Especificar
                  <input className='bottom-line' {...register('textorenal')} />
                </label>)
            }
            <label className="flex items-center gap-4">
              <span>¿Toma medicación?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('medicacion')}} type="checkbox" {...register('medicacion')}/>
              <span>Si</span>
            </label>

            {
              watch("medicacion") && (
                <label className='w-full'>¿Cuál?
                  <input className='bottom-line' {...register('textomedicacion')} />
                </label>)
            }
            <label className="flex items-center gap-4">
              <span>¿Toma anticonceptivos?</span>
              <span>No</span>
                <input className="radio__toggle" onClick={()=>{showInput('anticonceptivos')}} type="checkbox" {...register('anticonceptivos')}/>
              <span>Si</span>
            </label>

            {
              watch("anticonceptivos") && (
                <label className='w-full'>Especificar
                  <input className='bottom-line' {...register('textoanticonceptivos')} />
                </label>)
            }
          </section>
          <section className="grid gap-3">

            <h3>A continuacion deberá marcar todo aquello que consume y que no le molestaria que forme parte de su plan de alimentación</h3>
            <h2>Infusiones</h2>
            <label className='alimentos'>Té
              <input type="checkbox" {...register('te')}/>
            </label>
            <label className='alimentos'>Café
              <input type="checkbox" {...register('cafe')}/>
            </label>
            <label className='alimentos'>mate
              <input type="checkbox" {...register('mate')}/>
            </label>
            <label className='alimentos'>mate cocido
              <input type="checkbox" {...register('matecocido')}/>
            </label>
            <label className='alimentos'>malta
              <input type="checkbox" {...register('malta')}/>
            </label>
            <label className='alimentos'>otros
              <input type="checkbox" {...register('otrasinfusiones')}/>
            </label>
            <h2>Lácteos</h2>
            <label className='alimentos'>Leche
              <input type="checkbox" {...register('Leche')}/>
            </label>
            <label className='alimentos'>Yogurt
              <input type="checkbox" {...register('Yogurt')}/>
            </label>
            <label className='alimentos'>queso
              <input type="checkbox" {...register('queso')}/>
            </label>
            <label className='alimentos'>huevos
              <input type="checkbox" {...register('huevos')}/>
            </label>
            <label className='alimentos'>ricota
              <input type="checkbox" {...register('ricota')}/>
            </label>
            <h2>Carnes</h2>
            <label className='alimentos'>pollo
              <input type="checkbox" {...register('pollo')}/>
            </label>
            <label className='alimentos'>pescado
              <input type="checkbox" {...register('pescado')}/>
            </label>
            <label className='alimentos'>vaca
              <input type="checkbox" {...register('vaca')}/>
            </label>
            <label className='alimentos'>mate
              <input type="checkbox" {...register('mate')}/>
            </label>
            <label className='alimentos'>cerdo
              <input type="checkbox" {...register('cerdo')}/>
            </label>
            <h2>Pan y galletitas</h2>
            <label className='alimentos'>pan blanco
              <input type="checkbox" {...register('panblanco')}/>
            </label>
            <label className='alimentos'>pan de salvado
              <input type="checkbox" {...register('pansalvado')}/>
            </label>
            <label className='alimentos'>galletitas de agua
              <input type="checkbox" {...register('galletitasagua')}/>
            </label>
            <label className='alimentos'>galletitas sin sal
              <input type="checkbox" {...register('galletitassinsal')}/>
            </label>
            <label className='alimentos'>galletitas dulces
              <input type="checkbox" {...register('galletitasdulces')}/>
            </label>
            <label className='alimentos'>galletitas de arroz
              <input type="checkbox" {...register('galletitasarroz')}/>
            </label>
            <h2>Semillas</h2>
            <label className='alimentos'>chia
              <input type="checkbox" {...register('chia')}/>
            </label>
            <label className='alimentos'>sesamo
              <input type="checkbox" {...register('sesamo')}/>
            </label>
            <label className='alimentos'>girasol
              <input type="checkbox" {...register('girasol')}/>
            </label>
            <label className='alimentos'>amaranto
              <input type="checkbox" {...register('amaranto')}/>
            </label>
            <label className='alimentos'>lino
              <input type="checkbox" {...register('lino')}/>
            </label>
            <label className='alimentos'>amapola
              <input type="checkbox" {...register('amapola')}/>
            </label>
            <h2>Frutas Secas</h2>
            <label className='alimentos'>nuez
              <input type="checkbox" {...register('nuez')}/>
            </label>
            <label className='alimentos'>almendra
              <input type="checkbox" {...register('almendra')}/>
            </label>
            <label className='alimentos'>castaña de caju
              <input type="checkbox" {...register('castaniacaju')}/>
            </label>
            <label className='alimentos'>pistacho
              <input type="checkbox" {...register('pistacho')}/>
            </label>
            <label className='alimentos'>avellana
              <input type="checkbox" {...register('avellana')}/>
            </label>
            <label className='alimentos'>pasas de uva
              <input type="checkbox" {...register('pasasuva')}/>
            </label>
            <label className='alimentos'>pasas arandano
              <input type="checkbox" {...register('pasasarandano')}/>
            </label>
            <label className='alimentos'>banana chips
              <input type="checkbox" {...register('bananachips')}/>
            </label>
            <label className='alimentos'>jengibre chips
              <input type="checkbox" {...register('jengibrechips')}/>
            </label>
            <label className='alimentos'>mani
              <input type="checkbox" {...register('mani')}/>
            </label>
            <label className='alimentos'>otros
              <input type="checkbox" {...register('otrossecos')}/>
            </label>
            <h2>Legumbres / Derivados</h2>
            <label className='alimentos'>soja
              <input type="checkbox" {...register('soja')}/>
            </label>
            <label className='alimentos'>lentejas
              <input type="checkbox" {...register('lentejas')}/>
            </label>
            <label className='alimentos'>garbanzos
              <input type="checkbox" {...register('garbanzos')}/>
            </label>
            <label className='alimentos'>porotos
              <input type="checkbox" {...register('porotos')}/>
            </label>
            <label className='alimentos'>otros
              <input type="checkbox" {...register('otroslegumbres')}/>
            </label>
          </section>
      
            <label className='fruit'>Kiwi
              <input type="checkbox" {...register('kiwi')}/>
            </label>
          <input type="submit" className='block mt-10 text-white bg-accent'/>
        </form>
      </div>
    </div>
  )
}

export default App

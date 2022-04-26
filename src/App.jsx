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

 // console.log(watch("example"));
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

  const haysuple = textInput.find(element => element === 'suplementos')
  console.log(haysuple)
  

  /* Toogle checked */
  function showInput(question){
    setTextInput([...textInput, question])
  }

  

  return (
    <div className="">
      <div className="pt-10 wrapper">
        <h1 className='text-4xl font-bold text-primary'>Ficha nutricional</h1>
      
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className='py-5 text-secondary'>Datos personales</h3>
          <div className="grid gap-5 md:grid-cols-2">
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
      
      
          </div>
          <section className='grid gap-5 py-12'>
            <label className="flex items-center gap-4">
              <span>
              Consume suplementos?
              </span>
              <span>No</span>
              <input className="radio__toggle" onClick={()=>{showInput('suplementos')}} type="checkbox" {...register('suplementos')}/>
              <span>Si</span>
            </label>
            
            {
              textInput.find(element => element === 'suplementos') && (
                <label className='w-full pb-6'>Especificar
                  <input className='bottom-line' {...register('textosuplementos')} />
                </label>
              )
            }
            <label className="flex items-center gap-4">
              <span>
              Realiza alguna dieta?
              </span>
              <input className="radio__toggle" onClick={()=>{showInput('dieta')}} type="checkbox" {...register('dieta')}/>
            </label>
            
            {
              textInput.find(element => element === 'dieta') && (
                <label className=''>Especificar
                  <input className='bottom-line'{...register('textodieta')} />
                </label>
              )
            }
          </section>
      
      
        <label>Kiwi
                <input type="checkbox" {...register('kiwi')}/>
              </label>
          <input type="submit" className='block mt-10 text-white bg-accent'/>
        </form>
      </div>
    </div>
  )
}

export default App

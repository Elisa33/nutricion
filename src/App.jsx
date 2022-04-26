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
 const [textInput, setTextInput] = useState(false)

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
  const showInput = (question) =>{
    setTextInput(true)
    console.log(question)
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
          <section className='py-12'>
            <label className="flex items-center gap-4">
              <span>
              Consume suplementos?
              </span>
              <input className="radio__toggle" onChange={()=>{showInput('suplementos')}} type="checkbox" {...register('suplementos')}/>
            </label>
            {
              textInput ?
              (
            <label>Especificar
              <input {...register("suplementos")} />
            </label>
              ):(
                <div></div>
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

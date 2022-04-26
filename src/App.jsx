import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";

import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase'

function App() {
  

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

 // console.log(watch("example"));
 const [on, setOn] = useState(false)

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
  const cambioBolita = () =>{
    setOn(true)
  }

  

  return (
    <div className="mt-10 wrapper">
      <h1 className='text-2xl'>Ficha nutricional</h1>

      
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className='py-5 text-blue-500'>Datos personales</h3>
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
          <input type="number" {...register("height", { min: 1.00, max: 3.00 })} />
          </label>
          
          <label>Peso
          <input type="number" {...register("weight")} />
          </label>
          
            <label>Frutas
              <input type="checkbox" />
            </label>
        </div>
        
        <label class="radio" for="radio__toggle2">
    <input class='radio__toogle' onChange={cambioBolita} type="checkbox" checked/>
    <span>
     Consume suplementos?
    </span>
  </label>

        <input type="submit" className='block bg-lime-300'/>
      </form>
    </div>
  )
}

export default App

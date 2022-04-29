import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../firebase'

function FichaNutricional() {
  
  const [ formStep, setFormStep ] = useState(1);
  const completeFormStep = ()=>{
    setFormStep(curr => curr + 1)
  }
  const [ mensaje, setMensaje ] = useState('')
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });
  
  //const onSubmit = data => console.log(data);

  const onSubmit = async (data) => {
    console.log(data)
    try {
        await addDoc(collection(db, "answers"),{
          data
        })
        setMensaje('El formulario ha sido enviado correctamente')
        reset();
      } catch (error) {
      setMensaje('Hubo un error, intente nuevamente')
      console.log(error)
    }
  }


  return (
 
     
    <div className="bg-green">
      <div className="pt-10 wrapper">
      
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 pb-12">
          <h1 className='font-bold'>Ficha nutricional</h1>
          {/* Datos personales */}
          { formStep > 0 && (
            <section className="grid gap-5 md:grid-cols-2">
            <h2>Datos personales</h2>
            <label >Nombre *
              <input className='bottom-line' {...register("datos.nombre", { required: true })}/>
              {errors.nombre && <span className='text-accent'>Ingresa tu nombre</span>}
            </label>
      
            <label>Apellido *
              <input className='bottom-line' {...register("datos.apellido", { required: true })} />
              {errors.apellido && <span>Ingresa tu apellido</span>}
            </label>
            <label>Edad
              <input className='bottom-line' type="number" {...register("datos.edad")} />
            </label>
            <label>Altura
            <input className='bottom-line' type="text" inputmode="decimal" {...register("datos.altura")} />
            </label>
            <label>Peso
            <input className='bottom-line' type="text" inputmode="decimal" {...register("datos.peso")} />
            </label>
            <label>Email *
              <input className='bottom-line'
                {...register("datos.email", {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format"
                  }
                })}
                type="email"
              />
                  {errors.email && <span>Ingresa tu email</span>}
                  </label>
            <label>Teléfono
              <input className='bottom-line' inputmode="tel"{...register("datos.telefono", { required: true })} />
            </label>
            {
              
            }
            <button type="button" onClick={completeFormStep} className={formStep > 1 ? 'hidden' : 'w-full py-3 mt-3 text-white rounded-lg hover:bg-accent hover:shadow-lg bg-secondary'}>Siguiente</button>
            </section>
          )}
          {/* HC */}
          { formStep > 1 && (
            <section className='grid gap-8 '>
              <h2>Historia Clínica</h2>
              <label className="flex items-center gap-4">
                <span>¿Consume suplementos?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" type="checkbox" {...register('hc.suplementos')}/>
                  <span>Si</span>
                </div>
              </label>
              {
                watch("hc.suplementos") && (
                  <label className='w-full'>Especificar
                    <input className='bottom-line' {...register('hc.textosuplementos')} />
                  </label>)
              }
              
              <label className="flex items-center gap-4">
                <span>¿Realiza alguna dieta?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" type="checkbox" {...register('hc.dieta')}/>
                  <span>Si</span>
                </div>
              </label>

              {
                watch("hc.dieta") && (
                  <label className='w-full'>Especificar
                    <input className='bottom-line' {...register('hc.textodieta')} />
                  </label>)
              }

              <label className="flex items-center gap-4">
                <span>¿Come fuera del hogar?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" type="checkbox" {...register('hc.fuera')}/>
                  <span>Si</span>
                </div>
              </label>

              {
                watch("hc.fuera") && (
                  <label className='w-full'>Especificar
                    <input className='bottom-line' {...register('hc.textofuera')} />
                  </label>)
              }

              <label className="flex items-center gap-4">
                <span>¿Tiene alguna enfermedad metabólica de base?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" type="checkbox" {...register('hc.metabolica')}/>
                  <span>Si</span>
                </div>
              </label>

              {
                watch("hc.metabolica") && (
                  <label className='w-full'>Especificar
                    <input className='bottom-line' {...register('hc.textometabolica')} />
                  </label>)
              }
              <label className="flex items-center gap-4">
                <span>¿Alergias alimentarias?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" type="checkbox" {...register('hc.alergias')}/>
                  <span>Si</span>
                </div>
              </label>

              {
                watch("hc.alergias") && (
                  <label className='w-full'>Especificar
                    <input className='bottom-line' {...register('hc.textoalergias')} />
                  </label>)
              }
              <label className="flex items-center gap-4">
                <span>¿Intolerancia a la lactosa?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" type="checkbox" {...register('hc.lactosa')}/>
                  <span>Si</span>
                </div>
              </label>

              {
                watch("hc.lactosa") && (
                  <label className='w-full'>Especificar
                    <input className='bottom-line' {...register('hc.textolactosa')} />
                  </label>)
              }
              <label className="flex items-center gap-4">
                <span>¿Colon Irritable?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" type="checkbox" {...register('hc.irritable')}/>
                  <span>Si</span>
                </div>
              </label>

              {
                watch("hc.irritable") && (
                  <label className='w-full'>Especificar
                    <input className='bottom-line' {...register('hc.textoirritable')} />
                  </label>)
              }
              <label className="flex items-center gap-4">
                <span>¿Estreñimiento?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" type="checkbox" {...register('hc.estrenimiento')}/>
                  <span>Si</span>
                </div>
              </label>

              {
                watch("hc.estrenimientos") && (
                  <label className='w-full'>Especificar
                    <input className='bottom-line' {...register('hc.textoestrenimiento')} />
                  </label>)
              }
              <label className="flex items-center gap-4">
                <span>¿Intolerancia alimentaria?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" type="checkbox" {...register('hc.intolerancia')}/>
                  <span>Si</span>
                </div>
              </label>

              {
                watch("hc.intolerancia") && (
                  <label className='w-full'>Especificar
                    <input className='bottom-line' {...register('hc.textointolerancia')} />
                  </label>)
              }
              <label className="flex items-center gap-4">
                <span>¿Alteraciones de la vesícula biliar?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" type="checkbox" {...register('hc.vesicula')}/>
                  <span>Si</span>
                </div>
              </label>

              {
                watch("hc.vesicula") && (
                  <label className='w-full'>Especificar
                    <input className='bottom-line' {...register('hc.textovesicula')} />
                  </label>)
              }
              <label className="flex items-center gap-4">
                <span>¿Tiene o tuvo divertículos?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" type="checkbox" {...register('hc.diverticulos')}/>
                  <span>Si</span>
                </div>
              </label>

              {
                watch("hc.diverticulos") && (
                  <label className='w-full'>Especificar
                    <input className='bottom-line' {...register('hc.textodiverticulos')} />
                  </label>)
              }
              <label className="flex items-center gap-4">
                <span>¿Enfermedad renal?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" type="checkbox" {...register('hc.renal')}/>
                  <span>Si</span>
                </div>
              </label>

              {
                watch("hc.renal") && (
                  <label className='w-full'>Especificar
                    <input className='bottom-line' {...register('hc.textorenal')} />
                  </label>)
              }
              <label className="flex items-center gap-4">
                <span>¿Toma medicación?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" type="checkbox" {...register('hc.medicacion')}/>
                  <span>Si</span>
                </div>
              </label>

              {
                watch("hc.medicacion") && (
                  <label className='w-full'>¿Cuál?
                    <input className='bottom-line' {...register('hc.textomedicacion')} />
                  </label>)
              }
              <label className="flex items-center gap-4">
                <span>¿Toma anticonceptivos?</span>
                <div className="flex items-center gap-2">
                  <span>No</span>
                    <input className="radio__toggle" onClick={()=>{showInput('anticonceptivos')}} type="checkbox" {...register('hc.anticonceptivos')}/>
                </div>
                <span>Si</span>
              </label>

              {
                watch("hc.anticonceptivos") && (
                  <label className='w-full'>Especificar
                    <input className='bottom-line' {...register('hc.textoanticonceptivos')} />
                  </label>)
              }
            
            
            <button type="button" onClick={completeFormStep} className={formStep > 2 ? 'hidden' : 'w-full py-3 mt-3 text-white rounded-lg hover:bg-accent hover:shadow-lg bg-secondary'}>Siguiente</button>
            </section>
          )}
          {/* Alimentos */}
          { formStep > 2 && (
            <section>
              <h2>Alimentos</h2>
              <p className='text-gray-500'>A continuacion deberá marcar todo aquello que consume y que no le molestaria que forme parte de su plan de alimentación</p>
              <div className="grid gap-2 md:grid-cols-2">
                <div className="py-6">
                  <h3>Infusiones</h3>
                  <input className="invisible inp-cbx" id="te" type="checkbox" {...register('infusiones.te')} />
                  <label className="cbx alimentos" htmlFor="te"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>té
                  </label>
                  <input className="invisible inp-cbx" id="cafe" type="checkbox" {...register('infusiones.cafe')} />
                  <label className="cbx alimentos" htmlFor="cafe"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>café
                  </label>
                  <input className="invisible inp-cbx" id="mate" type="checkbox" {...register('infusiones.mate')} />
                  <label className="cbx alimentos" htmlFor="mate"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>mate
                  </label>
                  <input className="invisible inp-cbx" id="matecocido" type="checkbox" {...register('infusiones.matecocido')} />
                  <label className="cbx alimentos" htmlFor="matecocido"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>mate cocido
                  </label>
                  <input className="invisible inp-cbx" id="malta" type="checkbox" {...register('infusiones.malta')} />
                  <label className="cbx alimentos" htmlFor="malta"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>malta
                  </label>
                  <input className="invisible block inp-cbx" id="infsotros" type="checkbox" {...register('infusiones.otros')} />
                  <label className="cbx alimentos" htmlFor="infsotros"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>otros
                  </label>
                
                </div>
                <div className="py-6">
                  <h3>Lácteos</h3>
                  <input className="invisible inp-cbx" id="leche" type="checkbox" {...register('lacteos.leche')} />
                  <label className="cbx alimentos" htmlFor="leche"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>leche
                  </label>
                  <input className="invisible inp-cbx" id="yogurt" type="checkbox" {...register('lacteos.yogurt')} />
                  <label className="cbx alimentos" htmlFor="yogurt"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>yogurt
                  </label>
                  <input className="invisible inp-cbx" id="queso" type="checkbox" {...register('lacteos.queso')} />
                  <label className="cbx alimentos" htmlFor="queso"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>queso
                  </label>
                  <input className="invisible inp-cbx" id="huevos" type="checkbox" {...register('lacteos.huevos')} />
                  <label className="cbx alimentos" htmlFor="huevos"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>huevos
                  </label>
                  <input className="invisible inp-cbx" id="ricota" type="checkbox" {...register('lacteos.ricota')} />
                  <label className="cbx alimentos" htmlFor="ricota"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>ricota
                  </label>
                  
                </div>
                <div className="py-6">
                  <h3>Carnes</h3>
                  <input className="invisible inp-cbx" id="pollo" type="checkbox" {...register('carnes.pollo')} />
                  <label className="cbx alimentos" htmlFor="pollo"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>pollo
                  </label>
                  <input className="invisible inp-cbx" id="pescado" type="checkbox" {...register('carnes.pescado')} />
                  <label className="cbx alimentos" htmlFor="pescado"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>pescado
                  </label>
                  <input className="invisible inp-cbx" id="vaca" type="checkbox" {...register('carnes.vaca')} />
                  <label className="cbx alimentos" htmlFor="vaca"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>vaca
                  </label>
                  <input className="invisible inp-cbx" id="cerdo" type="checkbox" {...register('carnes.cerdo')} />
                  <label className="cbx alimentos" htmlFor="cerdo"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>cerdo
                  </label>
                  </div>
                <div className="py-6">
                  <h3>Pan y galletitas</h3>
                  <input className="invisible inp-cbx" id="panblanco" type="checkbox" {...register('panes.panblanco')} />
                  <label className="cbx alimentos" htmlFor="panblanco"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>Pan Blanco
                  </label>
                  <input className="invisible inp-cbx" id="pansalvado" type="checkbox" {...register('panes.pansalvado')} />
                  <label className="cbx alimentos" htmlFor="pansalvado"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>Pan de Salvado
                  </label>
                  <input className="invisible inp-cbx" id="galletitasagua" type="checkbox" {...register('panes.galletitasagua')} />
                  <label className="cbx alimentos" htmlFor="galletitasagua"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>Galletitas de agua
                  </label>
                  <input className="invisible inp-cbx" id="galletitassinsal" type="checkbox" {...register('panes.galletitassinsal')} />
                  <label className="cbx alimentos" htmlFor="galletitassinsal"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>Galletitas sin sal
                  </label>
                  <input className="invisible inp-cbx" id="galletitasdulces" type="checkbox" {...register('panes.galletitasdulces')} />
                  <label className="cbx alimentos" htmlFor="galletitasdulces"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>Galletitas dulces
                  </label>
                  <input className="invisible inp-cbx" id="galletitasarroz" type="checkbox" {...register('panes.galletitasarroz')} />
                  <label className="cbx alimentos" htmlFor="galletitasarroz"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>Galletitas de arroz
                  </label>
                </div>
                <div className="py-6">
                    <h3>Semillas</h3>
                    <input className="invisible inp-cbx" id="chia" type="checkbox" {...register('semillas.chia')} />
                  <label className="cbx alimentos" htmlFor="chia"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>chia
                  </label>
                    <input className="invisible inp-cbx" id="sesamo" type="checkbox" {...register('semillas.sesamo')} />
                  <label className="cbx alimentos" htmlFor="sesamo"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>sesamo
                  </label>
                    <input className="invisible inp-cbx" id="girasol" type="checkbox" {...register('semillas.girasol')} />
                  <label className="cbx alimentos" htmlFor="girasol"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>girasol
                  </label>
                    <input className="invisible inp-cbx" id="amaranto" type="checkbox" {...register('semillas.amaranto')} />
                  <label className="cbx alimentos" htmlFor="amaranto"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>amaranto
                  </label>
                    <input className="invisible inp-cbx" id="lino" type="checkbox" {...register('semillas.lino')} />
                  <label className="cbx alimentos" htmlFor="lino"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>lino
                  </label>
                    <input className="invisible inp-cbx" id="amapola" type="checkbox" {...register('semillas.amapola')} />
                  <label className="cbx alimentos" htmlFor="amapola"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>amapola
                  </label>
                    <input className="invisible inp-cbx" id="zapallo" type="checkbox" {...register('semillas.zapallo')} />
                  <label className="cbx alimentos" htmlFor="zapallo"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>zapallo
                  </label>
                    <input className="invisible inp-cbx" id="otras" type="checkbox" {...register('semillas.otras')} />
                  <label className="cbx alimentos" htmlFor="otras"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>otras
                  </label>
                </div>
                <div className="py-6">
                  <h3>Frutas Secas</h3>
                  <input className="invisible inp-cbx" id="nuez" type="checkbox" {...register('frutossecos.nuez')} />
                  <label className="cbx alimentos" htmlFor="nuez"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>nuez
                  </label>
                  <input className="invisible inp-cbx" id="almendra" type="checkbox" {...register('frutossecos.almendra')} />
                  <label className="cbx alimentos" htmlFor="almendra"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>almendra
                  </label>
                  <input className="invisible inp-cbx" id="castania" type="checkbox" {...register('frutossecos.castania')} />
                  <label className="cbx alimentos" htmlFor="castania"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>castaña
                  </label>
                  <input className="invisible inp-cbx" id="pistacho" type="checkbox" {...register('frutossecos.pistacho')} />
                  <label className="cbx alimentos" htmlFor="pistacho"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>pistacho
                  </label>
                  <input className="invisible inp-cbx" id="avellana" type="checkbox" {...register('frutossecos.avellana')} />
                  <label className="cbx alimentos" htmlFor="avellana"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>avellana
                  </label>
                  <input className="invisible inp-cbx" id="pasasuva" type="checkbox" {...register('frutossecos.pasasuva')} />
                  <label className="cbx alimentos" htmlFor="pasasuva"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>pasas uva
                  </label>
                  <input className="invisible inp-cbx" id="pasasarandano" type="checkbox" {...register('frutossecos.pasasarandano')} />
                  <label className="cbx alimentos" htmlFor="pasasarandano"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>pasas arandano
                  </label>
                  <input className="invisible inp-cbx" id="bananachips" type="checkbox" {...register('frutossecos.bananachips')} />
                  <label className="cbx alimentos" htmlFor="bananachips"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>banana chips
                  </label>
                  <input className="invisible inp-cbx" id="jengibrechips" type="checkbox" {...register('frutossecos.jengibrechips')} />
                  <label className="cbx alimentos" htmlFor="jengibrechips"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>jengibre chips
                  </label>
                  <input className="invisible inp-cbx" id="mani" type="checkbox" {...register('frutossecos.mani')} />
                  <label className="cbx alimentos" htmlFor="mani"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>mani
                  </label>
                  <input className="invisible inp-cbx" id="fsotros" type="checkbox" {...register('frutossecos.otros')} />
                  <label className="cbx alimentos" htmlFor="fsotros"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>otros
                  </label>
                </div>
                <div className="py-6">
                  <h3>Legumbres / Derivados</h3>
                  <input className="invisible inp-cbx" id="soja" type="checkbox" {...register('legumbres.soja')} />
                  <label className="cbx alimentos" htmlFor="soja"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>soja
                  </label>
                  <input className="invisible inp-cbx" id="lentejas" type="checkbox" {...register('legumbres.lentejas')} />
                  <label className="cbx alimentos" htmlFor="lentejas"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>lentejas
                  </label>
                  <input className="invisible inp-cbx" id="garbanzos" type="checkbox" {...register('legumbres.garbanzos')} />
                  <label className="cbx alimentos" htmlFor="garbanzos"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>garbanzos
                  </label>
                  <input className="invisible inp-cbx" id="porotos" type="checkbox" {...register('legumbres.porotos')} />
                  <label className="cbx alimentos" htmlFor="porotos"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>porotos
                  </label>
                  <input className="invisible inp-cbx" id="otros" type="checkbox" {...register('legumbres.otros')} />
                  <label className="cbx alimentos" htmlFor="otros"><span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>otros
                  </label>
                </div>
              </div>

              
              <label className='w-full py-6'>Comentarios
                <input className='bottom-line' {...register('comentariosalimentos')} />
              </label>
            
            
            <button type="button" onClick={completeFormStep} className={formStep > 3 ? 'hidden' : 'w-full py-3 mt-3 text-white rounded-lg hover:bg-accent hover:shadow-lg bg-secondary'}>Siguiente</button>
          
            </section>
          )}
          {/* Verduras */}
          { formStep > 3 && (
            <section>
              <h2>Verduras</h2>
              <p className="text-gray-500">por favor tachar aquellas que NO consuma.</p>
              <ul className="grid gap-5 py-5 lista">
                <li><input type="checkbox" id="albahaca" {...register('verduras.albahaca')} value="albahaca"/><label htmlFor="albahaca">albahaca</label></li>
                <li><input type="checkbox" id="alcaucil" {...register('verduras.alcaucil')} value="alcaucil"/><label htmlFor="alcaucil">alcaucil</label></li>
                <li><input type="checkbox" id="acelga" {...register('verduras.acelga')} value="acelga"/><label htmlFor="acelga">acelga</label></li>
                <li><input type="checkbox" id="achicoria" {...register('verduras.achicoria')} value="achicoria"/><label htmlFor="achicoria">achicoria</label></li>
                <li><input type="checkbox" id="apio" {...register('verduras.apio')} value="apio"/><label htmlFor="apio">apio</label></li>
                <li><input type="checkbox" id="arvejas" {...register('verduras.arvejas')} value="arvejas"/><label htmlFor="arvejas">arvejas frescas</label></li>
                <li><input type="checkbox" id="batata" {...register('verduras.batata')} value="batata"/><label htmlFor="batata">batata</label></li>
                <li><input type="checkbox" id="berenjena" {...register('verduras.berenjena')} value="berenjena"/><label htmlFor="berenjena">berenjena</label></li>
                <li><input type="checkbox" id="berro" {...register('verduras.berro')} value="berro"/><label htmlFor="berro">berro</label></li>
                <li><input type="checkbox" id="brocoli" {...register('verduras.brocoli')} value="brocoli"/><label htmlFor="brocoli">brocoli</label></li>
                <li><input type="checkbox" id="brotesdesoja" {...register('verduras.brotesdesoja')} value="brotesdesoja"/><label htmlFor="brotesdesoja">brotes de soja</label></li>
                <li><input type="checkbox" id="cebolla" {...register('verduras.cebolla')} value="cebolla"/><label htmlFor="cebolla">cebolla</label></li>
                <li><input type="checkbox" id="cebollaverdeo" {...register('verduras.cebollaverdeo')} value="cebollaverdeo"/><label htmlFor="cebollaverdeo">cebolla de verdeo</label></li>
                <li><input type="checkbox" id="chauchas" {...register('verduras.chauchas')} value="chauchas"/><label htmlFor="chauchas">chauchas</label></li>
                <li><input type="checkbox" id="choclo" {...register('verduras.choclo')} value="choclo"/><label htmlFor="choclo">choclo</label></li>
                <li><input type="checkbox" id="coliflor" {...register('verduras.coliflor')} value="coliflor"/><label htmlFor="coliflor">coliflor</label></li>
                <li><input type="checkbox" id="endibia" {...register('verduras.endibia')} value="endibia"/><label htmlFor="endibia">endibia</label></li>
                <li><input type="checkbox" id="escarola" {...register('verduras.escarola')} value="escarola"/><label htmlFor="escarola">escarola</label></li>
                <li><input type="checkbox" id="esparragos" {...register('verduras.esparragos')} value="esparragos"/><label htmlFor="esparragos">espárragos</label></li>
                <li><input type="checkbox" id="espinaca" {...register('verduras.espinaca')} value="espinaca"/><label htmlFor="espinaca">espinaca</label></li>
                <li><input type="checkbox" id="habas" {...register('verduras.habas')} value="habas"/><label htmlFor="habas">habas</label></li>
                <li><input type="checkbox" id="hinojo" {...register('verduras.hinojo')} value="hinojo"/><label htmlFor="hinojo">hinojo</label></li>
                <li><input type="checkbox" id="lechuga" {...register('verduras.lechuga')} value="lechuga"/><label htmlFor="lechuga">lechuga</label></li>
                <li><input type="checkbox" id="mandioca" {...register('verduras.mandioca')} value="mandioca"/><label htmlFor="mandioca">mandioca</label></li>
                <li><input type="checkbox" id="morronrojo" {...register('verduras.morronrojo')} value="morronrojo"/><label htmlFor="morronrojo">morrón rojo</label></li>
                <li><input type="checkbox" id="morronverde" {...register('verduras.morronverde')} value="morronverde"/><label htmlFor="morronverde">morrón verde</label></li>
                <li><input type="checkbox" id="nabo" {...register('verduras.nabo')} value="nabo"/><label htmlFor="nabo">nabo</label></li>
                <li><input type="checkbox" id="pepino" {...register('verduras.pepino')} value="pepino"/><label htmlFor="pepino">pepino</label></li>
                <li><input type="checkbox" id="tomate" {...register('verduras.tomate')} value="tomate"/><label htmlFor="tomate">tomate</label></li>
                <li><input type="checkbox" id="palta" {...register('verduras.palta')} value="palta"/><label htmlFor="palta">palta</label></li>
                <li><input type="checkbox" id="papa" {...register('verduras.papa')} value="papa"/><label htmlFor="papa">papa</label></li>
                <li><input type="checkbox" id="palmitos" {...register('verduras.palmitos')} value="palmitos"/><label htmlFor="palmitos">palmitos</label></li>
                <li><input type="checkbox" id="puerro" {...register('verduras.puerro')} value="puerro"/><label htmlFor="puerro">puerro</label></li>
                <li><input type="checkbox" id="radicheta" {...register('verduras.radicheta')} value="radicheta"/><label htmlFor="radicheta">radicheta</label></li>
                <li><input type="checkbox" id="rabanito" {...register('verduras.rabanito')} value="rabanito"/><label htmlFor="rabanito">rabanito</label></li>
                <li><input type="checkbox" id="rabano" {...register('verduras.rabano')} value="rabano"/><label htmlFor="rabano">rábano</label></li>
                <li><input type="checkbox" id="remolacha" {...register('verduras.remolacha')} value="remolacha"/><label htmlFor="remolacha">remolacha</label></li>
                <li><input type="checkbox" id="repollitobruselas" {...register('verduras.repollitobruselas')} value="repollitobruselas"/><label htmlFor="repollitobruselas">repollito de bruselas</label></li>
                <li><input type="checkbox" id="repollo" {...register('verduras.repollo')} value="repollo"/><label htmlFor="repollo">repollo</label></li>
                <li><input type="checkbox" id="rucula" {...register('verduras.rucula')} value="rucula"/><label htmlFor="rucula">rucula</label></li>
                <li><input type="checkbox" id="zanahoria" {...register('verduras.zanahoria')} value="zanahoria"/><label htmlFor="zanahoria">zanahoria</label></li>
                <li><input type="checkbox" id="zapallo" {...register('verduras.zapallo')} value="zapallo"/><label htmlFor="zapallo">zapallo</label></li>
                
                <li><input type="checkbox" id="zapallito" {...register('verduras.zapallito')} value="zapallito"/><label htmlFor="zapallito">zapallito</label></li>
              </ul>

            
            
            <button type="button" onClick={completeFormStep} className={formStep > 4 ? 'hidden' : 'w-full py-3 mt-3 text-white rounded-lg hover:bg-accent hover:shadow-lg bg-secondary'}>Siguiente</button>
          
            </section>
          )}
          {/* Frutas */}
          { formStep > 4 && (
            <section>
              <h2>Frutas</h2>
              <p className="text-gray-500">por favor tachar aquellas que NO consuma.</p>
              <ul className="grid gap-5 py-5 lista frutas">
                <li><input type="checkbox" id="anana" {...register('frutas.anana')} value="anana"/><label htmlFor="anana">ananá</label></li>
                <li><input type="checkbox" id="arandanos" {...register('frutas.arandanos')} value="arandanos"/><label htmlFor="arandanos">arándanos</label></li>
                <li><input type="checkbox" id="banana" {...register('frutas.banana')} value="banana"/><label htmlFor="banana">banana</label></li>
                <li><input type="checkbox" id="cereza" {...register('frutas.cereza')} value="cereza"/><label htmlFor="cereza">cereza</label></li>
                <li><input type="checkbox" id="ciruela" {...register('frutas.ciruela')} value="ciruela"/><label htmlFor="ciruela">ciruela</label></li>
                <li><input type="checkbox" id="damasco" {...register('frutas.damasco')} value="damasco"/><label htmlFor="damasco">damasco</label></li>
                <li><input type="checkbox" id="durazno" {...register('frutas.durazno')} value="durazno"/><label htmlFor="durazno">durazno</label></li>
                <li><input type="checkbox" id="frambuesa" {...register('frutas.frambuesa')} value="frambuesa"/><label htmlFor="frambuesa">frambuesa</label></li>
                <li><input type="checkbox" id="frutillas" {...register('frutas.frutillas')} value="frutillas"/><label htmlFor="frutillas">frutillas</label></li>
                <li><input type="checkbox" id="guinda" {...register('frutas.guinda')} value="guinda"/><label htmlFor="guinda">guinda</label></li>
                <li><input type="checkbox" id="higo" {...register('frutas.higo')} value="higo"/><label htmlFor="higo">higo</label></li>
                <li><input type="checkbox" id="kiwi" {...register('frutas.kiwi')} value="kiwi"/><label htmlFor="kiwi">kiwi</label></li>
                <li><input type="checkbox" id="limon" {...register('frutas.limon')} value="limon"/><label htmlFor="limon">limon</label></li>
                <li><input type="checkbox" id="mandarina" {...register('frutas.mandarina')} value="mandarina"/><label htmlFor="mandarina">mandarina</label></li>
                <li><input type="checkbox" id="mango" {...register('frutas.mango')} value="mango"/><label htmlFor="mango">mango</label></li>
                <li><input type="checkbox" id="mamon" {...register('frutas.mamon')} value="mamon"/><label htmlFor="mamon">mamon</label></li>
                <li><input type="checkbox" id="manzana" {...register('frutas.manzana')} value="manzana"/><label htmlFor="manzana">manzana</label></li>
                <li><input type="checkbox" id="pera" {...register('frutas.pera')} value="pera"/><label htmlFor="pera">pera</label></li>
                <li><input type="checkbox" id="sandia" {...register('frutas.sandia')} value="sandia"/><label htmlFor="sandia">sandia</label></li>
                <li><input type="checkbox" id="uva" {...register('frutas.uva')} value="uva"/><label htmlFor="uva">uva</label></li>
              
              </ul>
            
            
            <button type="button" onClick={completeFormStep} className={formStep > 5 ? 'hidden' : 'w-full py-3 mt-3 text-white rounded-lg hover:bg-accent hover:shadow-lg bg-secondary'}>Siguiente</button>
          
            </section>
          )}
          {/* Recordatorio 24hs */}
          { formStep > 5 && (
            <section>
              <h2>Recodatorio 24hs</h2>
              <p className='text-gray-500'>¿Que comió ayer?</p>
              <div className="flex items-center justify-between py-5">
                <h4>Desayuno</h4>
                <label className='flex items-center gap-4'>Hora:
                    <input className='w-20' type="text" inputmode="tel" {...register('dieta.desayunohora')} />
                </label>
              </div>
              <input className='bottom-line' {...register('dieta.desayuno')} />
              <div className="flex items-center justify-between py-5">
                <h4>colacion</h4>
                <label className='flex items-center gap-4'>Hora:
                    <input className='w-20' type="text" {...register('dieta.colacionhora')} />
                </label>
              </div>
              <input className='bottom-line' {...register('dieta.colacion')} />
              <div className="flex items-center justify-between py-5">
                <h4>almuerzo</h4>
                <label className='flex items-center gap-4'>Hora:
                    <input className='w-20' type="text" inputmode="numeric" {...register('dieta.almuerzohora')} />
                </label>
              </div>
              <input className='bottom-line' {...register('dieta.almuerzo')} />
              <div className="flex items-center justify-between py-5">
                <h4>merienda</h4>
                <label className='flex items-center gap-4'>Hora:
                    <input className='w-20' type="text" inputmode="numeric" {...register('dieta.meriendahora')} />
                </label>
              </div>
              <input className='bottom-line' {...register('dieta.merienda')} />
              <div className="flex items-center justify-between py-5">
                <h4>colacion</h4>
                <label className='flex items-center gap-4'>Hora:
                    <input className='w-20' type="text" inputmode="numeric" {...register('dieta.colaciondoshora')} />
                </label>
              </div>
              <input className='bottom-line' {...register('dieta.colaciondos')} />
              <div className="flex items-center justify-between py-5">
                <h4>cena</h4>
                <label className='flex items-center gap-4'>Hora:
                    <input className='w-20' type="text" inputmode="numeric" {...register('dieta.cenahora')} />
                </label>
              </div>
              <input className='bottom-line' {...register('dieta.cena')} />
              <div className="flex items-center justify-between py-5">
                <h4>otras</h4>
                <label className='flex items-center gap-4'>Hora:
                    <input className='hora' type="text" inputmode="numeric" {...register('dieta.otrashora')} />
                </label>
              </div>
              <input className='bottom-line' {...register('dieta.otras')} />
            
            
            <button type="button" onClick={completeFormStep} className={formStep > 6 ? 'hidden' : 'w-full py-3 mt-3 text-white rounded-lg hover:bg-accent hover:shadow-lg bg-secondary'}>Siguiente</button>
          
            </section>
          )}
          {/* Actividad física */}
          { formStep > 6 && (
            <section>
            <h2>Actividad fisica</h2>
              <div className="grid gap-4 py-5">
                <label className='w-full'>Tipo de actividad física
                  <input className='bottom-line' {...register('actividad.tipo')} />
                </label>
                <label className='w-full'>Horas de entrenamiento por semana
                  <input className='bottom-line' type="text" pattern="\d*"{...register('actividad.tiempo')} />
                </label>
                <label className="flex items-center gap-4 py-4">
                  <span>¿Come algo antes de entrenar?</span>
                  <div className="flex items-center gap-2">
                    <span>No</span>
                      <input className="radio__toggle" type="checkbox" {...register('actividad.comidaantes')}/>
                    <span>Si</span>
                  </div>
                </label>
                {
                  watch("actividad.comidaantes") && (
                    <label className='w-full'>¿Qué?
                      <input className='bottom-line' {...register('actividad.quecomeantes')} />
                    </label>)
                }
                <label className="flex items-center gap-4 py-4">
                  <span>¿Come algo despues de entrenar?</span>
                  <div className="flex items-center gap-2">
                    <span>No</span>
                      <input className="radio__toggle" type="checkbox" {...register('actividad.comidadespues')}/>
                    <span>Si</span>
                  </div>
                </label>
                {
                  watch("actividad.comidadespues") && (
                    <label className='w-full'>¿Qué?
                      <input className='bottom-line' {...register('actividad.quecomedespues')} />
                    </label>)
                }
                <label className='w-full pt-5'>¿Qué bebidas utiliza durante el entrenamiento?
                  <input className='bottom-line' {...register('actividad.bebidas')} />
                </label>
                <label className='w-full'>¿Cual es tu comida favorita?
                  <input className='bottom-line' {...register('otros.comidafavorita')} />
                </label>
                <label className='w-full'>¿Cual es el motivo de la consulta?
                  <input className='bottom-line' {...register('otros.motivoconsulta')} />
                </label>
                <label className='w-full'>¿Como me conociste?
                  <input className='bottom-line' {...register('otros.comoconociste')} />
                </label>
              </div>
              <button type="submit" className='w-full py-3 text-white rounded-lg hover:bg-accent hover:shadow-lg bg-primary'>Confirmar y enviar formulario</button>
              <div className="pt-4 text-center text-primary">{mensaje}</div>
            </section>
          )}
        </form>
      </div>
    </div>
  
    
  )
}

export default FichaNutricional

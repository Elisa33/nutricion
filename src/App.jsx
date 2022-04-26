import { useEffect } from 'react'
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

  

  return (
    <div className="">
      <div className="pt-10 wrapper">
        <h1 className='font-bold text-primary'>Ficha nutricional</h1>
      
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="grid gap-5 md:grid-cols-2">
            <h2 className='py-5'>Datos personales</h2>
            <label >Nombre
              <input {...register("nombre", { required: true })}/>
              {errors.nombre && <span>Ingresa tu nombre</span>}
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
              <input {...register("telefono", { required: true })} />
            </label>
            <label>Altura
            <input {...register("height")} />
            </label>
      
            <label>Peso
            <input {...register("weight")} />
            </label>
      
      
          </section>
          <section className='grid gap-8'>
            <h2>Historia Clínica</h2>
            <label className="flex items-center gap-4">
              <span>¿Consume suplementos?</span>
              <span>No</span>
                <input className="radio__toggle" type="checkbox" {...register('suplementos')}/>
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
                <input className="radio__toggle" type="checkbox" {...register('dieta')}/>
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
                <input className="radio__toggle" type="checkbox" {...register('fuera')}/>
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
                <input className="radio__toggle" type="checkbox" {...register('metabolica')}/>
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
                <input className="radio__toggle" type="checkbox" {...register('alergias')}/>
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
                <input className="radio__toggle" type="checkbox" {...register('lactosa')}/>
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
                <input className="radio__toggle" type="checkbox" {...register('irritable')}/>
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
                <input className="radio__toggle" type="checkbox" {...register('estrenimientos')}/>
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
                <input className="radio__toggle" type="checkbox" {...register('intolerancia')}/>
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
                <input className="radio__toggle" type="checkbox" {...register('vesicula')}/>
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
                <input className="radio__toggle" type="checkbox" {...register('diverticulos')}/>
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
                <input className="radio__toggle" type="checkbox" {...register('renal')}/>
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
          <section className="">
            <h2>Alimentos</h2>
            <p className='text-gray-500'>A continuacion deberá marcar todo aquello que consume y que no le molestaria que forme parte de su plan de alimentación</p>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="py-6">
                <h3>Infusiones</h3>
                <input className="invisible inp-cbx" id="te" type="checkbox" {...register('legumbres.te')} />
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
                <input className="invisible inp-cbx" id="otros" type="checkbox" {...register('infusiones.otros')} />
                <label className="cbx alimentos" htmlFor="otros"><span>
                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                      <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                  </span>otros
                </label>
               
              </div>
              <div className="py-6">
                <h3>Lácteos</h3>
                <label className='alimentos'>leche
                  <input type="checkbox" {...register('leche')}/>
                </label>
                <label className='alimentos'>yogurt
                  <input type="checkbox" {...register('yogurt')}/>
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
              </div>
              <div className="py-6">
                <h3>Carnes</h3>
                <label className='alimentos'>pollo
                  <input type="checkbox" {...register('pollo')}/>
                </label>
                <label className='alimentos'>pescado
                  <input type="checkbox" {...register('pescado')}/>
                </label>
                <label className='alimentos'>vaca
                  <input type="checkbox" {...register('vaca')}/>
                </label>
                <label className='alimentos'>cerdo
                  <input type="checkbox" {...register('cerdo')}/>
                </label>
              </div>
              <div className="py-6">
                <h3>Pan y galletitas</h3>
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
              </div>
              <div className="py-6">
                  <h3>Semillas</h3>
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
              </div>
              <div className="py-6">
                <h3>Frutas Secas</h3>
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
              </div>
              <div className="py-6">
                <h3>Legumbres / Derivados</h3>
                <input className="invisible inp-cbx" id="soja" type="checkbox" {...register('legumbres.soja')} />
                <label className="cbx alimentos" htmlFor="soja">soja<span>
                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                      <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                  </span>
                </label>
                <input className="invisible inp-cbx" id="lentejas" type="checkbox" {...register('legumbres.lentejas')} />
                <label className="cbx alimentos" htmlFor="lentejas">lentejas<span>
                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                      <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                  </span>
                </label>
                <input className="invisible inp-cbx" id="garbanzos" type="checkbox" {...register('legumbres.garbanzos')} />
                <label className="cbx alimentos" htmlFor="garbanzos">garbanzos<span>
                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                      <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                  </span>
                </label>
                <input className="invisible inp-cbx" id="porotos" type="checkbox" {...register('legumbres.porotos')} />
                <label className="cbx alimentos" htmlFor="porotos">porotos<span>
                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                      <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                  </span>
                </label>
                <input className="invisible inp-cbx" id="otros" type="checkbox" {...register('legumbres.otros')} />
                <label className="cbx alimentos" htmlFor="otros">otros<span>
                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                      <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                  </span>
                </label>
              </div>
            </div>

            
            <label className='w-full py-6'>Comentarios
              <input className='bottom-line' {...register('comentariosalimentos')} />
            </label>
          </section>
          <section className="grid gap-5">
            <h2>Verduras</h2>
            <p className="text-gray-500">por favor tachar aquellas que NO consuma.</p>
            <ul className="lista">
              <li><input type="checkbox" id="acelga" {...register('verduras.acelga')} value="acelga"/><label htmlFor="acelga">acelga</label></li>
              <li><input type="checkbox" id="achicoria" {...register('verduras.achicoria')} value="achicoria"/><label htmlFor="achicoria">achicoria</label></li>
              <li><input type="checkbox" id="apio" {...register('verduras.apio')} value="apio"/><label htmlFor="apio">apio</label></li>
              <li><input type="checkbox" id="berenjena" {...register('verduras.berenjena')} value="berenjena"/><label htmlFor="berenjena">berenjena</label></li>
              <li><input type="checkbox" id="berro" {...register('verduras.berro')} value="berro"/><label htmlFor="berro">berro</label></li>
              <li><input type="checkbox" id="brocoli" {...register('verduras.brocoli')} value="brocoli"/><label htmlFor="brocoli">brocoli</label></li>
              <li><input type="checkbox" id="coliflor" {...register('verduras.coliflor')} value="coliflor"/><label htmlFor="coliflor">coliflor</label></li>
              <li><input type="checkbox" id="escarola" {...register('verduras.escarola')} value="escarola"/><label htmlFor="escarola">escarola</label></li>
              <li><input type="checkbox" id="espinaca" {...register('verduras.espinaca')} value="espinaca"/><label htmlFor="espinaca">espinaca</label></li>
              <li><input type="checkbox" id="hinojo" {...register('verduras.hinojo')} value="hinojo"/><label htmlFor="hinojo">hinojo</label></li>
              <li><input type="checkbox" id="esparragos" {...register('verduras.esparragos')} value="esparragos"/><label htmlFor="esparragos">esparragos</label></li>
              <li><input type="checkbox" id="endibia" {...register('verduras.endibia')} value="endibia"/><label htmlFor="endibia">endibia</label></li>
              <li><input type="checkbox" id="lechuga" {...register('verduras.lechuga')} value="lechuga"/><label htmlFor="lechuga">lechuga</label></li>
              <li><input type="checkbox" id="morronrojo" {...register('verduras.morronrojo')} value="morronrojo"/><label htmlFor="morronrojo">morrón rojo</label></li>
              <li><input type="checkbox" id="morronverde" {...register('verduras.morronverde')} value="morronverde"/><label htmlFor="morronverde">morrón verde</label></li>
              <li><input type="checkbox" id="pepino" {...register('verduras.pepino')} value="pepino"/><label htmlFor="pepino">pepino</label></li>
              <li><input type="checkbox" id="rabano" {...register('verduras.rabano')} value="rabano"/><label htmlFor="rabano">rábano</label></li>
              <li><input type="checkbox" id="rabanito" {...register('verduras.rabanito')} value="rabanito"/><label htmlFor="rabanito">rabanito</label></li>
              <li><input type="checkbox" id="radicheta" {...register('verduras.radicheta')} value="radicheta"/><label htmlFor="radicheta">radicheta</label></li>
              <li><input type="checkbox" id="repollo" {...register('verduras.repollo')} value="repollo"/><label htmlFor="repollo">repollo</label></li>
              <li><input type="checkbox" id="tomate" {...register('verduras.tomate')} value="tomate"/><label htmlFor="tomate">tomate</label></li>
              <li><input type="checkbox" id="repollitobruselas" {...register('verduras.repollitobruselas')} value="repollitobruselas"/><label htmlFor="repollitobruselas">repollito de bruselas</label></li>
              <li><input type="checkbox" id="zapallito" {...register('verduras.zapallito')} value="zapallito"/><label htmlFor="zapallito">zapallito</label></li>
              <li><input type="checkbox" id="alcaucil" {...register('verduras.alcaucil')} value="alcaucil"/><label htmlFor="alcaucil">alcaucil</label></li>
              <li><input type="checkbox" id="arvejas" {...register('verduras.arvejas')} value="arvejas"/><label htmlFor="arvejas">arvejas frescas</label></li>
              <li><input type="checkbox" id="cebolla" {...register('verduras.cebolla')} value="cebolla"/><label htmlFor="cebolla">cebolla</label></li>
              <li><input type="checkbox" id="cebollaverdeo" {...register('verduras.cebollaverdeo')} value="cebollaverdeo"/><label htmlFor="cebollaverdeo">cebolla de verdeo</label></li>
              <li><input type="checkbox" id="brotesdesoja" {...register('verduras.brotesdesoja')} value="brotesdesoja"/><label htmlFor="brotesdesoja">brotes de soja</label></li>
              <li><input type="checkbox" id="chauchas" {...register('verduras.chauchas')} value="chauchas"/><label htmlFor="chauchas">chauchas</label></li>
              <li><input type="checkbox" id="habas" {...register('verduras.habas')} value="habas"/><label htmlFor="habas">habas</label></li>
              <li><input type="checkbox" id="nabo" {...register('verduras.nabo')} value="nabo"/><label htmlFor="nabo">nabo</label></li>
              <li><input type="checkbox" id="palmitos" {...register('verduras.palmitos')} value="palmitos"/><label htmlFor="palmitos">palmitos</label></li>
              <li><input type="checkbox" id="puerro" {...register('verduras.puerro')} value="puerro"/><label htmlFor="puerro">puerro</label></li>
              <li><input type="checkbox" id="zanahoria" {...register('verduras.zanahoria')} value="zanahoria"/><label htmlFor="zanahoria">zanahoria</label></li>
              <li><input type="checkbox" id="remolacha" {...register('verduras.remolacha')} value="remolacha"/><label htmlFor="remolacha">remolacha</label></li>
              <li><input type="checkbox" id="zapallo" {...register('verduras.zapallo')} value="zapallo"/><label htmlFor="zapallo">zapallo</label></li>
              <li><input type="checkbox" id="rucula" {...register('verduras.rucula')} value="rucula"/><label htmlFor="rucula">rucula</label></li>
              <li><input type="checkbox" id="albahaca" {...register('verduras.albahaca')} value="albahaca"/><label htmlFor="albahaca">albahaca</label></li>
              <li><input type="checkbox" id="papa" {...register('verduras.papa')} value="papa"/><label htmlFor="papa">papa</label></li>
              <li><input type="checkbox" id="batata" {...register('verduras.batata')} value="batata"/><label htmlFor="batata">batata</label></li>
              <li><input type="checkbox" id="choclo" {...register('verduras.choclo')} value="choclo"/><label htmlFor="choclo">choclo</label></li>
              <li><input type="checkbox" id="mandioca" {...register('verduras.mandioca')} value="mandioca"/><label htmlFor="mandioca">mandioca</label></li>
              <li><input type="checkbox" id="palta" {...register('verduras.palta')} value="palta"/><label htmlFor="palta">palta</label></li>
            </ul>

          </section>
          <section className="grid gap-5">
            <h2>Frutas</h2>
            <p className="text-gray-500">por favor tachar aquellas que NO consuma.</p>
            <ul className="lista frutas">
              <li><input type="checkbox" id="frutillas" {...register('frutas.frutillas')} value="frutillas"/><label htmlFor="frutillas">frutillas</label></li>
              <li><input type="checkbox" id="guinda" {...register('frutas.guinda')} value="guinda"/><label htmlFor="guinda">guinda</label></li>
              <li><input type="checkbox" id="limon" {...register('frutas.limon')} value="limon"/><label htmlFor="limon">limon</label></li>
              <li><input type="checkbox" id="ciruela" {...register('frutas.ciruela')} value="ciruela"/><label htmlFor="ciruela">ciruela</label></li>
              <li><input type="checkbox" id="sandia" {...register('frutas.sandia')} value="sandia"/><label htmlFor="sandia">sandia</label></li>
              <li><input type="checkbox" id="mandarina" {...register('frutas.mandarina')} value="mandarina"/><label htmlFor="mandarina">mandarina</label></li>
              <li><input type="checkbox" id="manzana" {...register('frutas.manzana')} value="manzana"/><label htmlFor="manzana">manzana</label></li>
              <li><input type="checkbox" id="kiwi" {...register('frutas.kiwi')} value="kiwi"/><label htmlFor="kiwi">kiwi</label></li>
              <li><input type="checkbox" id="higo" {...register('frutas.higo')} value="higo"/><label htmlFor="higo">higo</label></li>
              <li><input type="checkbox" id="pera" {...register('frutas.pera')} value="pera"/><label htmlFor="pera">pera</label></li>
              <li><input type="checkbox" id="anana" {...register('frutas.anana')} value="anana"/><label htmlFor="anana">ananá</label></li>
              <li><input type="checkbox" id="durazno" {...register('frutas.durazno')} value="durazno"/><label htmlFor="durazno">durazno</label></li>
              <li><input type="checkbox" id="damasco" {...register('frutas.damasco')} value="damasco"/><label htmlFor="damasco">damasco</label></li>
              <li><input type="checkbox" id="cereza" {...register('frutas.cereza')} value="cereza"/><label htmlFor="cereza">cereza</label></li>
              <li><input type="checkbox" id="frambuesa" {...register('frutas.frambuesa')} value="frambuesa"/><label htmlFor="frambuesa">frambuesa</label></li>
              <li><input type="checkbox" id="banana" {...register('frutas.banana')} value="banana"/><label htmlFor="banana">banana</label></li>
              <li><input type="checkbox" id="uva" {...register('frutas.uva')} value="uva"/><label htmlFor="uva">uva</label></li>
              <li><input type="checkbox" id="arandanos" {...register('frutas.arandanos')} value="arandanos"/><label htmlFor="arandanos">arándanos</label></li>
              <li><input type="checkbox" id="mango" {...register('frutas.mango')} value="mango"/><label htmlFor="mango">mango</label></li>
              <li><input type="checkbox" id="mamon" {...register('frutas.mamon')} value="mamon"/><label htmlFor="mamon">mamon</label></li>
             
            </ul>

          </section>
          <section>
          <h2>Actividad fisica</h2>
            <label className='w-full'>Tipo de actividad física
              <input className='bottom-line' {...register('actividad.tipo')} />
            </label>
            <label className='w-full'>Horas de entrenamiento
              <input className='bottom-line' {...register('actividad.tiempo')} />
            </label>
            <label className="flex items-center gap-4">
              <span>¿Come algo antes de entrenar?</span>
              <span>No</span>
                <input className="radio__toggle" type="checkbox" {...register('actividad.comidaantes')}/>
              <span>Si</span>
            </label>
            {
              watch("actividad.comidaantes") && (
                <label className='w-full'>¿Qué?
                  <input className='bottom-line' {...register('activida.quecomeantes')} />
                </label>)
            }
            <label className="flex items-center gap-4">
              <span>¿Come algo despues de entrenar?</span>
              <span>No</span>
                <input className="radio__toggle" type="checkbox" {...register('actividad.comidadespues')}/>
              <span>Si</span>
            </label>
            {
              watch("actividad.comidadespues") && (
                <label className='w-full'>¿Qué?
                  <input className='bottom-line' {...register('activida.quecomedespues')} />
                </label>)
            }
            <label className='w-full'>¿Qué bebidas utiliza durante el entrenamiento?
              <input className='bottom-line' {...register('actividad.bebidas')} />
            </label>
            <label className='w-full'>¿Cual es tu comida favorita?
              <input className='bottom-line' {...register('comidafavorita')} />
            </label>
            <label className='w-full'>¿Cual es el motivo de la consulta?
              <input className='bottom-line' {...register('comidafavorita')} />
            </label>
            <label className='w-full'>¿Como me conociste?
              <input className='bottom-line' {...register('comidafavorita')} />
            </label>

          </section>
          <input type="submit" className='block mt-10 text-white bg-primary'/>
        </form>
      </div>
    </div>
  )
}

export default App

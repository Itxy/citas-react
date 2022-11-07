import {useState, useEffect} from 'react'
import Error from './Error'

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
  //Hooks deben ir en la parte superior, antes del return y nunca dentro de condicionales
  //setState, es un hook nos dice el estado 
  //no puede ir fuera del componente
  const [mascota, setMascota] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)
  
  const generarId = ()=>{
    const random = Math.random().toString(36)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }    
  }, [paciente])

 const validarForm = (e) => {
    e.preventDefault()
    //Validar formulario
    if([mascota, propietario, email, alta, sintomas].includes('')){
      console.log('Hay al menos un campo vacío')
      setError(true)
      return;    
    }
    setError(false)

    //Objeto de paciente
    const objPaciente = {
      mascota, 
      propietario, 
      email, 
      alta, 
      sintomas
    }

    if (paciente.id){
      // Edita registro
      objPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})
    }
    else{
      // Nuevo registro
      objPaciente.id = generarId()
      //Crea un nuevo array
      setPacientes([...pacientes, objPaciente])
    }
    
    //console.log(objPaciente)


    //Reiniciar el form
    setMascota('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form className="bg-slate-50 shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={validarForm} >
          {error && 
            <Error>
              <p>Todos los campos son obligatorios</p>
            </Error>
          }
          <div className="mb-5">
            <label htmlFor = "nombre" className="block uppercase font-bold text-gray-700">Nombre Mascota</label>
            <input 
                id = "mascota"
                type = "text"
                placeholder = "Nombre de la Mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                value = {mascota}
                onChange = {(e)=> setMascota(e.target.value)} 
            />
          </div>

          <div className="mb-5">
            <label htmlFor = "propietario" className="block uppercase font-bold text-gray-700">Nombre Propietario</label>
            <input 
                id = "propietario"
                type = "text"
                placeholder = "Nombre del propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                value = {propietario}
                onChange = {(e)=> setPropietario(e.target.value)} 
            />
          </div>

          <div className="mb-5">
            <label htmlFor = "email" className="block uppercase font-bold text-gray-700">Email</label>
            <input 
                id = "email"
                type = "email"
                placeholder = "Correo electrónico"
                className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                value = {email}
                onChange = {(e)=> setEmail(e.target.value)} 
            />
          </div>     

          <div className="mb-5">
            <label htmlFor = "alta" className="block uppercase font-bold text-gray-700">Fecha de Alta</label>
            <input 
                id = "alta"
                type = "date"
                className ="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                value = {alta}
                onChange = {(e)=> setAlta(e.target.value)} 
            />
          </div> 

            <div className="mb-5">
            <label htmlFor = "alta" className="block uppercase font-bold text-gray-700">Síntomas</label>
            <textarea 
                id = "sintomas"
                className = "border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                placeholder = "Describe los síntomas"
                value = {sintomas}
                onChange = {(e)=> setSintomas(e.target.value)} 
            />
          </div>

          <input
            type = "submit"
            className = "bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors p-2 rounded-md"
            value = {paciente.id ? 'Editar paciente' : 'Agregar paciente'}
          />        
        </form>
    </div>
  )
}

export default Formulario
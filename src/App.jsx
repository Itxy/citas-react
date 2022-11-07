import {useState, useEffect} from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

//Componente principal de la app
function App() {
  const registroLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
  const [pacientes, setPacientes] = useState(registroLS)
  const [paciente, setPaciente] = useState({})
  
  
  const eliminarPaciente = id =>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  //useEffect - El orden en que se declaren se ejecutan
  //Se carga una vez cuando el componente está listo, se pueden cargar múltiples useEffect en un componente
  /*useEffect(() => {
    const obtenerLS = () => {
      //convierte a string el array
      const registroLS = JSON.parse(localStorage.getItem('pacientes')) ?? []// si no hay nada en localstorage, agrega un arreglo vacío
      setPacientes(registroLS)
    }
    obtenerLS();
  },[])*/

  //Sincroniza el state con lo que hay en pacientes
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes)) //conviene un arreglo a string
  }, [pacientes])

 return (
    <div className="container mx-auto mt-15">   
    {/* Mostrar los componentes */}
      <Header /> 
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}    
          paciente = {paciente}      
          setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
     
    </div>
  )
}

export default App

function Paciente({paciente, setPaciente, eliminarPaciente}) {

    const { mascota, propietario, email, alta, sintomas, id } = paciente

    const eliminarForm = () =>{
        const respuesta = confirm('¿Estás seguro de eliminar este paciente?')

        if(respuesta){
            eliminarPaciente(id)
        }
    }

  return (
    <div className="m-3 bg-slate-50  px-5 py-10 rounded-xl shadow-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{mascota}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">{alta}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div>
            <button type="button" className="bg-indigo-600 text-white font-bold uppercase rounded-md py-2 px-10 my-3 hover:bg-indigo-700" onClick={()=> setPaciente(paciente)}>Editar</button>
            <button type="button"className="bg-red-600 text-white font-bold uppercase rounded-md py-2 px-10 my-3 hover:bg-red-900" onClick={()=> eliminarForm(id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente
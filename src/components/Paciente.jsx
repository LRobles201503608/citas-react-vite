
const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  const handleEliminar = ()=>{
    const respuesta = confirm("Desea eliminar al paciente?")
    if (respuesta){
      eliminarPaciente(paciente.id)
    }
  }
  return (
        <div className="m-3 bg-white shadow-md py-10 px-5 rounded-xl">
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre:
            <span className="font-normal normal-case"> {paciente.nombre}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario:
            <span className="font-normal normal-case"> {paciente.propietario}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Email:
            <span className="font-normal normal-case"> {paciente.email}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Alta:
            <span className="font-normal normal-case"> {paciente.fecha}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas:
            <span className="font-normal normal-case"> {paciente.sintomas}</span>
          </p>
          <div className="flex justify-between mt-5">
            <button type="button"
             className="py-2 px-10 bg-indigo-500 hover:bg-indigo-300 text-white uppercase rounded-lg"
             onClick={()=> setPaciente(paciente)}
             >
              Editar
            </button>
            <button type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-300 text-white uppercase rounded-lg"
            onClick={handleEliminar}
            >
              Eliminar
            </button>
          </div>
        </div>
  )
}

export default Paciente

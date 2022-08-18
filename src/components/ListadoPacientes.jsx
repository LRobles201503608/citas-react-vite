import Paciente from "./Paciente"
const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {
  return (
    <div className="md:w1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado Paciendes</h2>
            <p className="text-lg mt-5 text-center mb-10">
              Administra a tus
              <span className="text-purple-600 font-bold"> Pacientes y Citas</span>
            </p>
            {pacientes.map(paciente=>{
              return(
                  <Paciente
                    key={paciente.id}
                    paciente = {paciente}
                    setPaciente = {setPaciente}
                    eliminarPaciente = {eliminarPaciente}
                  />
              )
            })}
          </>
        ):
        (
          <> 
            <h2 className="font-black text-3xl text-center">No Hay Paciendes</h2>
            <p className="text-lg mt-5 text-center mb-10">
              Comienza agregando a tus
              <span className="text-purple-600 font-bold"> y aparecerán en este lugar</span>
            </p>
          </>
          )}
    </div>
  )
}

export default ListadoPacientes

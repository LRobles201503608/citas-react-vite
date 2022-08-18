import {useState,useEffect} from 'react';
import Alerta from './Alerta';

const Formulario = ({setPacientes,pacientes,paciente,setPaciente}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)

    useEffect(() => {
        if( Object.keys(paciente).length > 0  ) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])


    

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
            console.log('Hay Al Menos un campo vacio')

            setError(true)
            return;
        } 
        
        setError(false)


        // Objeto de Paciente
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if(paciente.id) {
            // Editando el Registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            // Nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        // Reiniciar el form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-bold text-3xl text-center">Seguimiento Paciendes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y
            <span className="text-purple-600 font-bold"> Administralos</span>
        </p>
        <form 
            onSubmit={handleSubmit}
            className="bg-gray-300 shadow-sm rounded-lg py-10 px-5">
            <div>
                {error&& (
                    <Alerta
                        mensaje={"Todos los campos son obligatorios"}    
                    />
                    )}
                <label htmlFor="mascota" className="block text-gray-600 uppercase font-bold">
                    Nombre Mascota
                </label>
                <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                />  
                <label htmlFor="nombre" className="block text-gray-600 font-bold uppercase mt-5">
                    Nombre propietario
                </label>
                <input 
                    id="nombre"
                    type="text" 
                    placeholder="Nombre del dueño"
                    className="border-2 w-full p-2 mt-2 bg-white placeholder-gray-400 rounded-md text-gray-900"
                    value={propietario}
                    onChange={(e)=>setPropietario(e.target.value)}
                />
                <label htmlFor="email" className="block text-gray-600 font-bold uppercase mt-5">
                    Email
                </label>
                <input 
                    id="email"
                    type="email" 
                    placeholder="Email propietario"
                    className="border-2 w-full p-2 mt-2 bg-white placeholder-gray-400 rounded-md text-gray-900"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                
                <label htmlFor="alta" className="block text-gray-600 font-bold uppercase mt-5">
                    Alta
                </label>
                <input 
                    id="alta"
                    type="date" 
                    className="border-2 w-full p-2 mt-2 bg-white placeholder-gray-400 rounded-md text-gray-900"
                    value={fecha}
                    onChange={(e)=>setFecha(e.target.value)}
                />
                <label htmlFor="sintomas" className="block text-gray-600 font-bold uppercase mt-5">
                    Sintomas
                </label>
                <textarea 
                    id="sintomas"
                    type="text" 
                    placeholder="Sintomas"
                    className="border-2 w-full p-2 mt-2 bg-white placeholder-gray-400 rounded-md text-gray-900"
                    value={sintomas}
                    onChange={(e)=>setSintomas(e.target.value)}
                />
                <input 
                    type="submit" 
                    className="bg-indigo-500 w-full p-3 text-white uppercase font-bold mt-5 text-center
                    hover:bg-indigo-400 cursor-pointer transition-colors rounded-lg"
                    value={paciente.id?'Editar Paciente': "Agregar Paciente"}
                />
            </div>
        </form>
    </div>
  )
}

export default Formulario

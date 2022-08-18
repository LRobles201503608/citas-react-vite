import React from 'react'

const Alerta = ({mensaje}) => {
  return (
    <div className='bg-red-500 rounded-lg py-3 px-4 mb-3 text-center'>
                        <p className='text-white font-bold capitalize'>{mensaje}</p>
    </div>
  )
}

export default Alerta

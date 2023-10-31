import React from 'react'

export default function Footer() {
  return (
    <div className='w-screen h-full py-12 bg-primary-medium flex flex-row justify-around items-start'>
        <img src='/logo.png' className='w-48 h-48'/>
        <div className='flex flex-col gap-2 text-white'>
            <p className='font-semibold'>REDES SOCIALES</p>
            <a>Facebook</a>
            <a>Instagram</a>
            <a>X</a>
            <a>LinkedIn</a>
        </div>
        <div className='flex flex-col gap-2 text-white'>
            <p className='font-semibold'>OFICINA CENTRAL</p>
            <a>Calle avenida siempre viva 123</a>
            <a>elbuensabor@sincódigos.com</a>
            <a>(123) 456-7890</a>
        </div>
    </div>
  )
}

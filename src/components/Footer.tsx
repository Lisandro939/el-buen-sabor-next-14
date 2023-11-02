import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-screen h-full py-12 bg-primary-medium flex flex-col items-center gap-8 lg:gap-0 lg:flex-row justify-around items-start'>
        <Link href='/'>
          <Image alt='Logo' src='/logo.png' width={192} height={192}/>
        </Link>
        <div className='flex flex-col items-center lg:items-start gap-2 text-white w-64'>
            <p className='font-semibold'>REDES SOCIALES</p>
            <a>Facebook</a>
            <a>Instagram</a>
            <a>X</a>
            <a>LinkedIn</a>
        </div>
        <div className='flex flex-col items-center lg:items-start gap-2 text-white w-64'>
            <p className='font-semibold'>OFICINA CENTRAL</p>
            <a>Calle avenida siempre viva 123</a>
            <a>elbuensabor@sincódigos.com</a>
            <a>(123) 456-7890</a>
        </div>
    </div>
  )
}

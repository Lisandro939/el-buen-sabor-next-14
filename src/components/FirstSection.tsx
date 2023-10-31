import Image from 'next/image'
import React from 'react'

export default function FirstSection() {
  return (
    <div className='bg-primary-medium w-screen h-[90vh] flex flex-row '>
        <div className='w-1/2 h-full pl-32 flex flex-col items-start gap-10 pt-32'>
            <h1 className='text-7xl text-white font-bold'>
                El Buen Sabor
            </h1>
            <h2 className='text-3xl text-secondary-medium font-semibold'>
                Argentina, Mendoza
            </h2>
            <h3 className='text-xl text-white'>
                Tu local de comida rápida favorito
            </h3>
        </div>
        <div className='w-[45%] h-full flex items-start justify-center pt-20'>
            <Image 
                src='/hamburguer.png' 
                alt='' 
                priority 
                width={300}
                height={300}
            />
        </div>
       
    </div>
  )
}

import { incrementByAmount } from '@/counter/counterSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function AddCartButton({counter}: {counter: number}) {

    const dispatch = useDispatch()

  return (
    <button 
    className="h-10 bg-secondary-medium rounded-lg px-4 py-1 text-black font-semibold flex items-center justify-center"
    onClick={() => dispatch(incrementByAmount(counter))}
    >
        Agregar al carrito
    </button>
  )
}

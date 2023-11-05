'use client'

import { RootState } from '@/app/store';
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export default function CartButton() {

    const count = useSelector((state: RootState) => state.counter.value)

  return (
        <button 
        className='relative'
        >
            <FaShoppingCart className="w-6 h-6 text-white"/>
            <span className='absolute -top-1 -right-1 bg-white border border-black rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold text-black'>{count}</span>
        </button>
    
  )
}

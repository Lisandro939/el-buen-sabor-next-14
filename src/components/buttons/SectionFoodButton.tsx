'use client'

import { FoodType } from '@/enums/enums'
import React from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element),
    food: FoodType,
    setFood: React.Dispatch<React.SetStateAction<FoodType>>,
    foodSelected: string
}

export default function SectionFoodButton({children, food, setFood, foodSelected} : Props) {

    if (foodSelected === food) {
        return (
            <button className='h-full w-20 bg-primary-dark flex items-center justify-center'>
                <div className='scale-[2]'>
                    {typeof children === 'function' ? children() : children}
                </div>
            </button> 
        )
    } else {
        return (
            <button onClick={() => setFood(food)} className='group h-full w-20 flex items-center justify-center rounded-t-xl'>
                <div className='group-hover:scale-[2] duration-300'>
                    {typeof children === 'function' ? children() : children}
                </div>
            </button>
        )
    }
}

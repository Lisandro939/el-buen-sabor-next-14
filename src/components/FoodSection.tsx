'use client'

import React, { useState, useEffect } from 'react'
import { FaPizzaSlice, FaHamburger, FaWineBottle } from 'react-icons/fa'
import { CiFries } from 'react-icons/ci'
import SectionFoodButton from './buttons/SectionFoodButton'
import ProductCard from './buttons/ProductCard'
import { FetchData } from '@/functions/fetchData'
import { product } from '@/types/types'
import FoodSectionSkeleton from './skeletons/FoodSectionSkeleton'
import { FoodType } from '../enums/enums'

export default function FoodSection() {

    const [dataMap, setDataMap] = useState<Array<product>>([]);
    const [foodSelected, setFoodSelected] = useState<FoodType>(FoodType.HAMBURGUESA);

    useEffect(() => {
        async function fetchDataMap() {
            const data = await FetchData();
            setDataMap(data);
        }
        fetchDataMap();
    }, []);


  return (
    <div className='w-screen h-full'>
        <div className='relative h-32 lg:h-16 w-full flex flex-col lg:flex-row items-center px-14 bg-primary-light'>
            <p className='text-white font-bold text-lg mt-4 lg:mt-0'>CATEGORÍAS</p>
            <div className='absolute h-1/2 lg:h-full w-screen lg:w-fit bottom-0 lg:top-0 lg:left-[40%] flex flex-row items-center justify-between gap-2 text-white'>
                <SectionFoodButton food={FoodType.HAMBURGUESA} setFood={setFoodSelected} foodSelected={foodSelected}>
                    <FaHamburger className="h-4 w-4"/>
                </SectionFoodButton>
                <SectionFoodButton food={FoodType.PIZZA} setFood={setFoodSelected} foodSelected={foodSelected}>
                    <FaPizzaSlice className="h-4 w-4"/>
                </SectionFoodButton>
                <SectionFoodButton food={FoodType.PAPAS_FRITAS} setFood={setFoodSelected} foodSelected={foodSelected}>
                    <CiFries className="h-6 w-6"/>
                </SectionFoodButton>
                <SectionFoodButton food={FoodType.BEBIDAS} setFood={setFoodSelected} foodSelected={foodSelected}>
                    <FaWineBottle className="h-4 w-4"/>
                </SectionFoodButton>
            </div>
        </div>
        {
            dataMap.length === 0 ? <FoodSectionSkeleton /> :
            <div className='w-full flex flex-col justify-center items-center lg:grid lg:grid-cols-3 gap-10 bg-primary-dark py-12 lg:pl-28'>
                {
                    dataMap
                    .filter((item: product) => item.rubroGeneral.denominacion === foodSelected)
                    .map((item: product) => (
                    <div key={item.denominacion}>
                        <ProductCard {...item} />
                    </div>
                    ))
                }
            </div>
        }
    </div>
  )
}

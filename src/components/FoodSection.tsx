'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { FaPizzaSlice, FaHamburger, FaWineBottle } from 'react-icons/fa'
import { CiFries } from 'react-icons/ci'
import SectionFoodButton from './buttons/SectionFoodButton'
import ProductCard from './buttons/ProductCard'
import { FetchData } from '@/functions/fetchData'
import { product } from '@/types/types'
import FoodSectionSkeleton from './skeletons/FoodSectionSkeleton'

export default function FoodSection() {

    const [dataMap, setDataMap] = useState<Array<product>>([]);
    const [foodSelected, setFoodSelected] = useState<string>('Hamburguesa');

    useEffect(() => {
        async function fetchDataMap() {
            const data = await FetchData();
            setDataMap(data);
        }
        fetchDataMap();
    }, []);


  return (
    <div className='w-screen h-full'>
        <div className='relative h-16 w-full flex flex-row items-center px-14 bg-primary-light'>
            <p className='text-white font-bold text-lg'>CATEGORÍAS</p>
            <div className='absolute h-full top-0 left-[40%] flex flex-row items-center gap-2 text-white'>
                <SectionFoodButton food='Hamburguesa' setFood={setFoodSelected} foodSelected={foodSelected}>
                    <FaHamburger className="h-4 w-4"/>
                </SectionFoodButton>
                <SectionFoodButton food='Pizza' setFood={setFoodSelected} foodSelected={foodSelected}>
                    <FaPizzaSlice className="h-4 w-4"/>
                </SectionFoodButton>
                <SectionFoodButton food='Papas fritas' setFood={setFoodSelected} foodSelected={foodSelected}>
                    <CiFries className="h-6 w-6"/>
                </SectionFoodButton>
                <SectionFoodButton food='Bebidas' setFood={setFoodSelected} foodSelected={foodSelected}>
                    <FaWineBottle className="h-4 w-4"/>
                </SectionFoodButton>
            </div>
        </div>
        {
            dataMap.length === 0 ? <FoodSectionSkeleton /> :
            <div className='w-full grid grid-cols-3 gap-10 bg-primary-dark py-12 pl-28'>
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
'use client'

import { fetchProduct } from "@/functions/fetchProduct"
import { product } from "@/types/types";
import { useSearchParams } from "next/navigation"

import { useState, useEffect } from 'react';

export default function ProductSection() {
    const searchParams = useSearchParams()
    const [productSearched, setProductSearched] = useState<product | null>(null);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const product = searchParams.get('product');
        if (product) {
            fetchProduct(product).then((data) => {
                setProductSearched(data);
            });
        }
    }, [searchParams]);

    if (productSearched?.denominacion && productSearched?.id == Number(searchParams.get('product'))) {
        return (
            <div className="w-full lg:w-screen h-full lg:h-[60vh] bg-primary-dark flex flex-col lg:flex-row items-center justify-start lg:px-32">
                <section className="flex flex-col lg:flex-row lg:gap-10 w-full">
                    <div className="w-full lg:w-[384px] h-[240px] aspect-[8/5] rounded-lg mb-4">
                        <img 
                        src={productSearched.imagen} 
                        alt={productSearched.denominacion}
                        className="w-full h-full aspect-[8/5] lg:rounded-lg object-cover transition-opacity duration-300"
                        />
                    </div>
                    <section className="lg:h-[240px] text-white flex flex-col lg:justify-between w-full px-4 gap-4 lg:gap-0 mb-8 lg:mb-0">
                        <h2 className="text-2xl font-bold">{productSearched.denominacion}</h2>
                        <p>Tiempo en cocina: {productSearched.tiempoEstimadoCocina} min</p>
                        <p>Precio: <b className="text-secondary-medium">${productSearched.precioVenta}</b></p>
                        <div className="flex flex-row lg:gap-4 justify-between items-end w-full">
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="flex flex-row gap-2 bg-primary-light px-4 py-1 rounded-lg justify-between items-center">
                                    <button 
                                    className="text-2xl w-4 h-2 lg:h-4 flex items-center justify-center"
                                    onClick={() => {
                                        if (counter > 0) {
                                            setCounter(counter - 1)
                                        }
                                    }}>
                                        -
                                    </button>
                                    <span className="w-4 flex items-center justify-center">{counter}</span>
                                    <button 
                                    className="text-2xl w-4 h-2 lg:h-4 flex items-center justify-center"
                                    onClick={() => {setCounter(counter + 1)}}>
                                        +
                                    </button>
                                </div>
                                <p className="w-24 lg:w-36 flex items-center justify-start gap-2">
                                    Total: <b className="text-secondary-medium">${counter * productSearched.precioVenta}</b>
                                </p>
                            </div>
                            <button 
                            className="h-10 bg-secondary-medium rounded-lg px-4 py-1 text-black font-semibold flex items-center justify-center">
                                Agregar al carrito
                            </button>
                        </div>
                    </section>
                </section>
            </div>
        )
    } else {
        return (
            <div className="w-full lg:w-screen h-full lg:h-[60vh] bg-primary-dark flex flex-col lg:flex-row items-center justify-start lg:px-32">
                <section className="flex flex-col lg:flex-row gap-4 lg:gap-10 w-full">
                    <div className="w-full w-[384px] h-[240px] aspect-[8/5] animate-pulse bg-primary-medium lg:rounded-lg">.</div>
                    <section className="lg:h-[240px] text-white flex flex-col lg:justify-between w-full px-4 gap-4 lg:gap-0 mb-8 lg:mb-0">
                        <h2 className="w-64 text-2xl font-bold bg-primary-medium animate-pulse rounded-lg text-primary-medium">.</h2>
                        <p className="w-32 text-md font-bold bg-primary-medium animate-pulse rounded-lg text-primary-medium">.</p>
                        <p className="w-32 text-md font-bold bg-secondary-medium animate-pulse rounded-lg text-secondary-medium">.</p>
                        <div className="flex flex-row lg:gap-4 justify-between items-end w-full">
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="flex flex-row gap-2 bg-primary-light px-4 py-1 rounded-lg justify-between items-center">
                                    <button 
                                    className="text-2xl w-4 h-2 lg:h-4 flex items-center justify-center"
                                    onClick={() => {
                                        if (counter > 0) {
                                            setCounter(counter - 1)
                                        }
                                    }}>
                                        -
                                    </button>
                                    <span className="w-4 flex items-center justify-center">0</span>
                                    <button 
                                    className="text-2xl w-4 h-2 lg:h-4 flex items-center justify-center"
                                    onClick={() => {setCounter(counter + 1)}}>
                                        +
                                    </button>
                                </div>
                                <p className="w-24 lg:w-36 flex items-center justify-start gap-2">
                                    Total: <b className="text-secondary-medium">$0</b>
                                </p>
                            </div>
                            <button 
                            className="h-10 bg-secondary-medium rounded-lg px-4 py-1 text-black font-semibold flex items-center justify-center">
                                Agregar al carrito
                            </button>
                        </div>
                    </section>
                </section>
            </div>
        )        
    }      
}

'use client'

import { fetchProduct } from "@/functions/fetchProduct"
import { product } from "@/types/types";
import { useSearchParams } from "next/navigation"

import { useState, useEffect } from 'react';
import ProductSectionSkeleton from "./skeletons/ProductSectionSkeleton";
import Product from "./Product";

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
            <Product productSearched={productSearched} counter={counter} setCounter={setCounter} />
        )
    } else {
        return (
            <ProductSectionSkeleton />
        )        
    }      
}

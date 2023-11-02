'use server'

import { API_URL } from "@/consts/CONSTS"

export async function fetchProduct(id: string) {
    const res = await fetch(`${API_URL}/articulosManufacturados/${id}`, { cache: 'no-store' })
    const data = await res.json()
    return data
}
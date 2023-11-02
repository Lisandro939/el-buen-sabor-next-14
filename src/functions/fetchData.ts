'use server'

import { API_URL } from "@/consts/CONSTS"

export async function FetchData () {
    const data = await fetch(`${API_URL}/articulosManufacturados`, { next: { revalidate: 3600 } }).then(res => res.json())
    return data
}

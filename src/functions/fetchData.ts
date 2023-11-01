'use server'

export async function FetchData () {
    const data = await fetch('https://el-buen-sabor.zeabur.app/api/v1/articulosManufacturados', { cache: 'no-store' }).then(res => res.json())
    return data
}

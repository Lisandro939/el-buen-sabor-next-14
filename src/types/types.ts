export type rubroGeneral = {
    id: number,
    denominacion: string
}

export type product = {
    id: number,
    tiempoEstimadoCocina: number,
    denominacion: string,
    precioVenta: number,
    imagen: string,
    articuloManufacturadoDetalle: Array<any>,
    rubroGeneral: rubroGeneral
}
import { product } from "@/types/types";

export default function ProductCard( {tiempoEstimadoCocina, denominacion, precioVenta, imagen }: product) {

  return (
    <div className="group w-64 flex flex-col bg-primary-medium rounded-lg hover:shadow-lg hover:shadow-primary-light cursor-pointer overflow-hidden">
        <img src={imagen} alt={denominacion} className="object-cover w-64 h-48 rounded-t-lg group-hover:scale-125 z-10 duration-300"/>
        <div className="h-32 bg-primary-medium text-white px-2 flex flex-col justify-around z-20">
            <h2 className="text-lg">{denominacion}</h2>
            <p className="text-secondary-medium text-3xl">${precioVenta}</p>
            <p className="text-xs">{tiempoEstimadoCocina} minutos</p>
        </div>
    </div>
  )
}

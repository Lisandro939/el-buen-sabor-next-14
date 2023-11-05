import { product } from '@/types/types';
import AddCartWrapper from './wrappers/AddCartWrapper';

interface ProductProps {
    productSearched: product;
    counter: number;
    setCounter: (value: number) => void;
}

export default function Product({ productSearched, counter, setCounter }: ProductProps) {

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
                                <div className="flex flex-row gap-2 bg-primary-light px-2 py-1 rounded-lg justify-between items-center">
                                    <button 
                                    className="text-2xl w-6 lg:h-4 flex items-center justify-center"
                                    onClick={() => {
                                        if (counter > 0) {
                                            setCounter(counter - 1)
                                        }
                                    }}>
                                        -
                                    </button>
                                    <span className="w-4 flex items-center justify-center">{counter}</span>
                                    <button 
                                    className="text-2xl w-6 lg:h-4 flex items-center justify-center"
                                    onClick={() => {setCounter(counter + 1)}}>
                                        +
                                    </button>
                                </div>
                                <p className="w-24 lg:w-36 flex items-center justify-start gap-2">
                                    Total: <b className="text-secondary-medium">${counter * productSearched.precioVenta}</b>
                                </p>
                            </div>
                            <AddCartWrapper counter={counter}/>
                        </div>
                    </section>
                </section>
            </div>
  )
}

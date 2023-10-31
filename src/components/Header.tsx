import { BiSolidUserCircle } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
    return (
        <header className='w-screen bg-primary-medium h-20 flex flex-row items-center justify-between px-24'>
            <img src='/logo.png' alt='Logo' className='w-20 h-20 cursor-pointer'/>
            <div className='flex flex-row gap-2 items-center'>
                <div className='relative'>
                    <input type="text" className='h-6 rounded-md shadow-sm shadow-black'/>
                    <AiOutlineSearch className="w-4 h-4 text-black absolute right-1 top-1"/>
                </div>
                <button >
                    <BiSolidUserCircle className="w-6 h-6 text-white"/>
                </button>
                <button className='relative'>
                    <FaShoppingCart className="w-6 h-6 text-white"/>
                    <span className='absolute -top-1 -right-1 bg-white border border-black rounded-full w-4 h-4 flex items-center justify-center text-xs text-black'>0</span>
                </button>
            </div>
        </header>
    )
}

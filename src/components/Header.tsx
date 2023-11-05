'use client'

import { BiSolidUserCircle } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import CartButton from './buttons/CartButton';
import { Provider } from 'react-redux';
import { store } from '@/app/store';

export default function Header() {
    return (
        <header className='w-screen bg-primary-medium h-16 lg:h-20 flex flex-row items-center justify-between px-4 lg:px-24'>
            <Link href='/'>
                <Image src='/logo.png' alt='Logo' width={80} height={80} className='hidden lg:block'/>
                <Image src='/logo.png' alt='Logo' width={60} height={60} className='block lg:hidden'/>
            </Link>
            <div className='flex flex-row gap-2 items-center'>
                <div className='relative'>
                    <input type="text" className='h-6 rounded-md shadow-sm shadow-black'/>
                    <AiOutlineSearch className="w-4 h-4 text-black absolute right-1 top-1"/>
                </div>
                <button >
                    <BiSolidUserCircle className="w-6 h-6 text-white"/>
                </button>
                
                <Provider store={store}>
                    <CartButton />
                </Provider>
            </div>
        </header>
    )
}

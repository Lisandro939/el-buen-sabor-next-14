import React from 'react'

export default function FoodSectionSkeleton() {
  return (
    <div className='w-full flex flex-col justify-center items-center lg:grid lg:grid-cols-3 gap-10 bg-primary-dark py-12 lg:pl-28'>
        <div className="group w-64 flex flex-col bg-primary-medium rounded-lg hover:shadow-lg hover:shadow-primary-light cursor-pointer overflow-hidden">
            <div className="bg-primary-light animate-pulse w-64 h-48 rounded-t-lg"></div>
            <div className="h-32 bg-primary-medium px-2 flex flex-col justify-around">
                <h2 className="text-lg bg-primary-light text-primary-light rounded-md animate-pulse">.</h2>
                <p className="w-24 h-10 text-lg bg-primary-light text-primary-light rounded-md animate-pulse">.</p>
                <p className="w-12 h-6 text-lg bg-primary-light text-primary-light rounded-md animate-pulse">.</p>
            </div>
        </div>
        <div className="group w-64 flex flex-col bg-primary-medium rounded-lg hover:shadow-lg hover:shadow-primary-light cursor-pointer overflow-hidden">
            <div className="bg-primary-light animate-pulse w-64 h-48 rounded-t-lg"></div>
            <div className="h-32 bg-primary-medium px-2 flex flex-col justify-around">
                <h2 className="text-lg bg-primary-light text-primary-light rounded-md animate-pulse">.</h2>
                <p className="w-24 h-10 text-lg bg-primary-light text-primary-light rounded-md animate-pulse">.</p>
                <p className="w-12 h-6 text-lg bg-primary-light text-primary-light rounded-md animate-pulse">.</p>
            </div>
        </div>
        <div className="group w-64 flex flex-col bg-primary-medium rounded-lg hover:shadow-lg hover:shadow-primary-light cursor-pointer overflow-hidden">
            <div className="bg-primary-light animate-pulse w-64 h-48 rounded-t-lg"></div>
            <div className="h-32 bg-primary-medium px-2 flex flex-col justify-around">
                <h2 className="text-lg bg-primary-light text-primary-light rounded-md animate-pulse">.</h2>
                <p className="w-24 h-10 text-lg bg-primary-light text-primary-light rounded-md animate-pulse">.</p>
                <p className="w-12 h-6 text-lg bg-primary-light text-primary-light rounded-md animate-pulse">.</p>
            </div>
        </div>
    </div>
    
  )
}

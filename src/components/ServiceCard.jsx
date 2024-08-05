import React from 'react'

function ServiceCard({imgURL,label,subtext}) {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-xl px-10 py-16 hover:translate-y-4 hover:transition hover:duration-300 cursor-pointer'>
        <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={imgURL} alt={label} height={24} width={24} />
        </div>
        <h3 className='text-3xl leading-normal font-palanquin mt-5 font-bold'>{label}</h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard
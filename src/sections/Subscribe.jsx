import React from 'react'
import Button from '../components/Button'

function Subscribe() {
  return (
    <section className='max-container flex justify-between items-center gap-10 max-lg:flex-col' id='contact-us'>
        <h3 className='text-4xl font-palanquin font-bold leading-[68px] lg:max-w-md '> Sign Up Form 
          <span className='text-red-600'> Updates </span> & Newsletter.
        </h3>
        <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
          <input type='text' className='input' placeholder='subscribe@ronin.com'/>
          <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label="Sign Up" fullWidth />
          </div>
        </div>
    </section>
  )
}

export default Subscribe  
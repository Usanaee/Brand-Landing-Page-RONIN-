import React from 'react'
import { services } from '../constant'
import ServiceCard from '../components/ServiceCard'
function Services() {
  return (
    <section>
      <div className='max-container flex flex-wrap gap- justify-center'>
        {services.map((services) =>( <ServiceCard key={services.label} {...services}/> ))}
      </div>
    </section>
  )
}

export default Services
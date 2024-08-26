import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
    <Header/>
    <Navbar/>
   <section className='w-full hero-before 
   before:bg-[url(/hero-banner.jpg)] before:bg-no-repeat min-h-[100vh]  flex items-center justify-center flex-col'>
    <div className='text-center  text-white px-5 xl:max-w-[900px] md:max-w-[700px]'>
        <h2 className='text-[2em] font-extrabold xl:text-[5vw] md:text-[6vw]'>JOURNEY TO EXPLORE WORLD</h2>
        <p className='font-extralight '>Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis nostra rem quos voluptatibus habitant? Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.</p>
        <div className='mt-5'>
            <button className='uppercase nav-btn px-3 py-3 md:px-10 md:py-4'>Learn More</button>
            <button className='px-3  ml-2 py-3 transparent-btn md:px-10 md:py-4'>Book Now</button>

        </div>
    </div>
    
   </section>
    </>
  )
}

export default Hero
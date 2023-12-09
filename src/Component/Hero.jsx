import React from 'react'

const Hero = () => {
  return (
    <>
    
<main >

<section className='relative'>

    <img 
    className='h-[30rem] w-full object-cover'
    
    src="https://dance.ingridtemplates.com/wp-content/uploads/sites/18/2021/04/break-dance-1.jpg" alt="" />
   
   <div className='absolute inset-0 bg-black  opacity-60'></div>
    <figcaption className='inset-0 absolute flex justify-center items-center text-white'>
   
   <div>

    <p class="text-[18px] mb-[-2rem] ">Welcome to </p>
  <h2 className='text-[2.6rem] font-semibold '>Dance<span className='text-red-500 text-[4rem]'>4</span>life</h2>
  <p> - Where Rhythm Meets Joy! -</p>
<div className='mt-[1rem]'>

  <button className='bg-orange-900 w-full py-[1rem] rounded'>Explore</button>
</div>
   </div>
    
    </figcaption>
    </section>
    
    </main>
    
    </>
  )
}

export default Hero
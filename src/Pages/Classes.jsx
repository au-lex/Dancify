import React from 'react'
import classData from '../classData'

const Classes = () => {
  return (
    <>
    
    
    <main className='    overflow-x-hidden'>
        <section>
        <div class="custom-background h-[18rem] lg:h-[30rem]">
 
  <div class="absolute inset-0 bg-black opacity-80"></div>

 
  <div class="absolute inset-0 flex items-center justify-center flex-col text-white">
    <h1 class=" text-[3rem]">Dance Classes</h1>
    <p class="text-lg">Your additional text above the overlay</p>

    <div className='w-full flex justify-center mt-[2rem] relative' >
<div  className='absolute w-[58%] h-[5rem] animate-[ping_2s_ease-out_infinite] 
top-[-.6rem] rounded-[8]    
 bg-red-800 opacity-70  '></div>
    <button className='w-[50%] rounded-[8px]  py-4  bg-red-600 z-50 '>
    
        Enrol now 
    </button>
    </div>
  </div>
</div>

        </section>


<div className='' >
 


{classData.map((value, idx) => (
  <div key={idx} className='' >
    <section className=' '>
        <div className=''> 

      <img src={value.Image} alt="" className='w-full ' />
        </div>
      <h1 className='text-xl font-bold'>{value.title}</h1>
      <p className='text-sm'>{value.Description.substring(0, 120) + '......'}</p>

      {/* <p className='text-sm '>{value.Description}.substring((0, 120)) + '...';</p> */}
      <div className='my-4'>
        <button className='bg-red-500  py-2 px-4 w-[50%] text-white'>Explore</button>
      </div>
    </section>
  </div>
))}


</div>

    </main>
    
    
    </>
  )
}

export default Classes
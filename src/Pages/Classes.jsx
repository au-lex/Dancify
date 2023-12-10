import React from 'react'
import classData from '../classData'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleSharp } from "react-icons/io5";




const Classes = () => {
  return (
    <>
    
    
    <main className='    overflow-x-hidden'>
        <section className='relative'>

        <span className='absolute left-4 top-4 z-50'>
            <Link to={'/'}>
            <IoArrowBackCircleSharp  className='text-[2.4rem] text-slate-100 '/>
            </Link>
        </span>
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
    <section className='px-3 mt-4  shadow-md'>
        <div className=''> 

      <img src={value.Image} alt="" className='w-full rounded-[10px] ' />
        </div>
      <h1 className='text-[1.5rem] pt-2 font-bold'>{value.title}</h1>
      <p className='text-sm py-2'>{value.Description.substring(0, 150) + '......'}</p>

   
      <div className='my-4'>
      <Link to={`/Adetail/${value.title}`}>
  <button className='cursor-pointer border-slate-900 border py-3 px-4 w-[50%] mb-4 rounded-md shadow-md'>Explore Details</button>
</Link>

     
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
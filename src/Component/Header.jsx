

import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = () => {

const[OpenMenu, SetopenMenu] = useState(false)
 
const handlemenu = () => {
SetopenMenu(!OpenMenu)
}


  return (
    <>
    
    <main className=' relative'>
        <div className="header  bg-orange-800 h-[3.8rem] w-full flex items-center justify-between px-[1rem] ">
<div className="logo">
    {/* <span className='text-[2rem] text-slate-100'> Dancers4Life</span> */}
    <span className='text-[1.6rem] font-semibold  text-slate-100'>Dance<span className='text-red-500 text-[2rem]'>4</span>life</span>
</div>
            <div>
            <RiMenu3Fill onClick={handlemenu} className='text-[2rem] text-slate-100' />
            </div>


        </div>
<div className= {`w-full h-[0rem] con absolute
 bg-slate-100 ${OpenMenu ? 'active' : ''} top-[3.8rem] z-50 `}>

    <ol className='mt-4  px-2'>
        <li className='text-[1.3rem] mb-6 font-semibold '>
            
            <Link to={'/'}>
            Home
            </Link>
           </li>

           <li className='text-[1.3rem] mb-6 font-semibold '>
            
            <Link to={'/class'}>
            Classes
            </Link>
           </li>

           <li className='text-[1.3rem] mb-6 font-semibold  '>
            
            <Link to={'/event'}>
            Events
            </Link>
           </li>

           <li className='text-[1.3rem] my-2 font-semibold '>
            
            <Link to={'/'}>
            About us
            </Link>
           </li>
    </ol>
 </div>
    </main>
    
    </>
  )
}

export default Header
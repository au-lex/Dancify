

import React from 'react'
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <>
    
    <main className=''>
        <div className="header bg-orange-800 h-[3.8rem] w-full flex items-center justify-between px-[1rem] ">
<div className="logo">
    {/* <span className='text-[2rem] text-slate-100'> Dancers4Life</span> */}
    <span className='text-[1.6rem] font-semibold  text-slate-100'>Dance<span className='text-red-500 text-[2rem]'>4</span>life</span>
</div>
            <div>
            <RiMenu3Fill className='text-[2rem] text-slate-100' />
            </div>
        </div>
    </main>
    
    </>
  )
}

export default Header

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classData from '../classData';
import { MdOutlineDateRange } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Classdetail = () => {
  const [Classdetails, SetclassDetails] = useState([]);
  const { Adetails } = useParams();

  useEffect(() => {
    const classpageDetail = () => {
        console.log("Adetails from useParams:", Adetails);
        const classpage = classData.find((classpage) => classpage.title === Adetails);
      SetclassDetails(classpage);
    };
    classpageDetail();
  }, [Adetails]);

  return (
    <>
      <main>
        <div className='relative'>
        <span className='absolute left-4 top-4'>
            <Link to={'/class'}>
            <IoArrowBackCircleSharp  className='text-[2.4rem] text-slate-100 '/>
            </Link>
        </span>
            <img src={Classdetails.Image} alt="" className='w-full h-[18rem] object-cover' />
            <div className='px-[.6rem]'>

            <h1 className='w-full  font-bold text-[2rem] text-black'>{Classdetails.title}</h1>
            <p className=' w-full text-black my-2 text-[18px] leading-[28px]'>{Classdetails.Description}</p>
            <p className='w-full  text-black flex'>
                <span>< MdOutlineDateRange className='text-[1.5rem]  mr-2 text-orange-800' /></span>{Classdetails.StartDate}</p>
            <p className='w-full flex text-[1.2rem] font-bold my-6'> <span>
                
                <FaClock className='text-[1.5rem]  mr-2 text-orange-800' />
                </span>{Classdetails.Duration}</p>
            <p className='  flex border-orange-800  my-4 border-2 outline-none  rounded-[5px] py-[.5rem] 
                text-[25px] font-bold text-orange-800 justify-center  '> <span>
                <IoPricetagOutline  className='text-[1.8rem] mr-4 text-orange-800' />
                
                </span>{Classdetails.Price}</p>

            <div className='my-4'>
                <button className='bg-orange-800 border text-white  w-full rounded-[5px] py-[.5rem] 
                text-[25px] font-semibold'> <Link to={'/che'}>
                Enrol now 
                </Link></button>
            </div>
            </div>
        </div>
      </main>
     
    </>
  );
};

export default Classdetail;

import React, { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { TbSmartHome } from 'react-icons/tb';
import { SlLocationPin } from 'react-icons/sl';
import EventData from '../Component/EventData';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Event = () => {

    const[OpenMen, SetopenMen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false);
    const openCart = () => {
        setIsCartOpen(!isCartOpen);
      };
 
const handlemen = () => {
SetopenMen(!OpenMen)
}

  const [cart, setCart] = useState([]);

  const addToCart = (event) => {
    // Check if the event is already in the cart
    const existingEvent = cart.find((item) => item.name === event.name);

    if (existingEvent) {
        alert('itme is in cart')
      // If the event is already in the cart, update the quantity
      setCart(
        cart.map((item) =>
          item.name === event.name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the event is not in the cart, add it with quantity 1
      setCart([...cart, { ...event, quantity: 1 }]);
       alert('itme added sucess')
      
    }

   
  };
  const removeFromCart = (itemName) => {
    setCart(cart.filter((item) => item.name !== itemName));
  };

  return (
    <>
      <main className='mb-[4rem]'>
        <header className='bg-orange-800 h-[4rem] w-full'>
          <div className='flex justify-between px-[1rem]  pt-[1rem]'>
            <span>
              <Link to={'/'}>
                <TbSmartHome className='text-[1.8rem] text-slate-100 cursor-pointer' />
              </Link>
            </span>
            <span className='relative'>
              
                <FaCartShopping  onClick={openCart} className='text-[1.8rem]
                 text-slate-100 cursor-pointer'     />
              
              <span className='bg-red-500 top-0 pl-[6px] h-6 w-6 absolute rounded-full left-[-.8rem] text-white text-[14px]'>
                {cart.length}
              </span>
            </span>
          </div>

          {isCartOpen && (
            <div className='bg-white min-h-[10rem] px-6 w-full absolute mb-[2rem]'>
              <Cart cart={cart} removeFromCart={removeFromCart} />
            </div>
          )}
        </header>

        <div>
          <img
            src='https://i.pinimg.com/236x/c3/eb/60/c3eb60f5f2cafd403b77b6dca8c34411.jpg'
            className='w-full h-[15rem] object-cover'
            alt=''
          />
        </div>

        <section className='mt-4'>
          <h1 className='bg-red-500 w-[60%] text-center py-2 text-white text-[18px] font-semibold'>
            Upcoming Events
          </h1>
          <div>
            
          </div>
        </section>

        <figure className='flex flex-wrap'>
          {EventData.map((event, idx) => {
            return (
              <section key={idx} className='flex px-[.5rem] mt-8 shadow-md pb-4 w-full'>
                <div className='h-[100px] w-[200px] '>
                  <img
                    src={event.image}
                    alt=''
                    className='w-full h-[7rem] rounded-[15px] object-cover'
                  />
                </div>
                <figcaption className='ml-2'>
                  <p className='text-[15px]'>{event.name}</p>
                  <div className='my-2'>
                    <p className='flex text-[15px]'>
                      <span className='pt-1 mr-1'>
                        <SlLocationPin className='text-red-500' />
                      </span>{' '}
                      {event.venue}
                    </p>
                  </div>
                  <button
                    className='w-full py-2 rounded-[10px] border border-orange-900'
                    onClick={() => addToCart(event)}
                  >
                    Buy Ticket
                  </button>
                  {/* <p>{events.description.substring(0, 0) + '.......'}</p> */}
                </figcaption>
              </section>
            );
          })}
        </figure>
      </main>
    </>
  );
};

export default Event;

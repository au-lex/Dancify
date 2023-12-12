import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventData from '../Component/EventData';

const Eventdetail = ({ addToCart }) => {
  const { Edetails } = useParams();
  const [singleEvent, setSingleEvent] = useState({});

  useEffect(() => {
    const findEvent = () => {
      const eve = EventData.find((event) => event.name === Edetails);
      setSingleEvent(eve);
    };

    findEvent();
  }, [Edetails]);

  const handleAddToCart = () => {
    addToCart(singleEvent); // Pass the selected event to the addToCart function
  }; 

  return (
    <div>
      <img src={singleEvent.image} alt={singleEvent.name} className='w-full z-20 h-[16rem] object-cover'/>
      <section className='px-[1rem] '>
        <figcaption className='flex bg-red-500 justify-center  z-50 e'>
          <div>
            <h2>{singleEvent.name}</h2>
            <p>Date: {singleEvent.date}</p>
            <p>Venue: {singleEvent.venue}</p>
            <p>Artist: {singleEvent.artist}</p>
            <p>{singleEvent.description}</p>
            <button onClick={handleAddToCart} className='bg-blue-500 py-4 w-full'> Add to Cart</button>
          </div>
        </figcaption>
      </section>
    </div>
  );
};

export default Eventdetail;

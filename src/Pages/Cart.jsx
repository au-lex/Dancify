import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart , removeFromCart }) => {
  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      // Convert item.shop to a numeric value
      const itemPrice = parseFloat(item.shop) ;
  
      // Add the product of quantity and itemPrice to the total
      return total + item.quantity * itemPrice;
    }, 0);
  };
  

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.name} className='flex'>
              <div className='w-[100px] h-[100px] rounded-full'>
                <img src={item.image} alt="" className='w-full rounded-[5px]' />
              </div>
              <div className='ml-2'>
                <p>{item.name}</p>
                <p>- {item.shop}</p>
                <button onClick={() => removeFromCart(item.name)}>Remove</button>
              </div>
            </li>
          ))}
          <h1 className='text-[25px] font-bold'>Total: ${calculateTotal().toFixed(2)}</h1>
          <div className='flex'>
            <button className='w-full bg-orange-800 text-white text-[25px] py-[.8rem] rounded-[8px]'>
                <Link to={'/checkout'}>

              Checkout
                </Link>
            </button>
          </div>
        </ul>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;

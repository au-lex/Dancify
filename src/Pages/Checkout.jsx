import React from 'react';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import stripePromise from '../Component/stripe';

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      // Send the paymentMethod.id to your server to charge the card
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card-element">
          Card Details
        </label>
        <CardElement
          id="card-element"
          className="p-3 border border-gray-300 rounded"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75"
      >
        Pay
      </button>
    </form>
  );
};

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutPage />
  </Elements>
);

export default Checkout;

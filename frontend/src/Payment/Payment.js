import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../BaseUrl';
const Payment = () => {
  const checkoutHandler = async (amount) => {
    console.log("Amount received:", amount); // Debug statement
  
    try {
      const { data: { key } } = await axios.get(`${BASE_URL}/api/getkey`);
      const { data: { order } } = await axios.post(`${BASE_URL}/api/checkout`, { amount });
  
      console.log("Order received:", order); // Debug statement
  
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Pyrexia",
        description: "Aiims Rishikesh Fest",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: 'http://pyrexia-backend.onrender.com/api/paymentverification',
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };
  
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error in checkoutHandler:", error);
    }
  };
  

const Card = ({ amount, checkoutHandler }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <div className="text-lg font-semibold mb-4">₹{amount}</div>
        <button
          onClick={() => checkoutHandler(amount)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Buy Now
        </button>
      </div>
    );
  };
  

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Card 
          amount={100} 
          checkoutHandler={checkoutHandler} 
        />
        <Card 
          amount={125} 
          checkoutHandler={checkoutHandler} 
        />
      </div>
    </div>
  );
};

export default Payment;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../BaseUrl';
const Cart = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        // Fetch the user email on component mount
        axios.get(`${BASE_URL}/user`, { withCredentials: true })
            .then(response => {
                const email = response.data.user.email;
                setUserEmail(email);
            })
            .catch(error => {
                console.error('Error fetching user email:', error);
                alert('Error fetching user email. Please make sure you are logged in.');
            });
    }, []);


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
                callback_url: `${BASE_URL}/api/paymentverification`,
                prefill: {
                    name: "",
                    email: userEmail,
                    contact: "",
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

    useEffect(() => {
        // Fetch cart items only if userEmail is available
        if (userEmail) {
            const fetchCartItems = async () => {
                try {
                    const response = await axios.get(`${BASE_URL}/cart?email=${userEmail}`);
                    setCartItems(response.data);
                } catch (error) {
                    console.error('Error fetching cart items:', error);
                }
            };

            fetchCartItems();
        }
    }, [userEmail]);

    const handleRemove = async (eventName) => {
        try {
            const response = await axios.post(`${BASE_URL}/cart/remove`, { eventName, userEmail });
            alert(response.data.message);
            if (response.data.success) {
                window.location.reload();
              }
        } catch (err) {
            alert(err.response?.data?.error || 'An error occurred');
          }}
    
    return (
        <div className="cart mt-40 text-black">
            <h2 className="text-4xl font-semibold mb-6">Your Cart</h2>
            {cartItems.length > 0 ? (
                <ul className="list-disc pl-5">
                    {cartItems.map(item => (
                        <li key={item._id} className="mb-4">
                            <div className="border p-4 rounded shadow-md">
                                <p className="font-semibold text-2xl">{item.eventName}</p>
                                <p>Team Leader: {item.teamLeaderName}</p>
                                <p>Team Leader Gender: {item.teamLeaderGender}</p>
                                <p>Team Leader Mobile No.: {item.teamLeaderMobileNo}</p>
                                <p>Team Size: {item.teamSize}</p>
                                <p>Fees: ₹{item.fees}</p>
                                <button
                                    onClick={() => checkoutHandler(item.fees)}
                                    className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                                >
                                    Pay Now
                                </button>
                                <button
                                    onClick={() => handleRemove(item.eventName)}
                                    className="mt-2 bg-blue-500 text-white p-2 flex justify-center items-end rounded hover:bg-blue-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items in your cart</p>
            )}
        </div>
    );
};

export default Cart;

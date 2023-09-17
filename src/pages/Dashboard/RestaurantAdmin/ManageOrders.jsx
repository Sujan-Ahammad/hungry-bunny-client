import React, { useEffect, useState } from 'react';
import useAxiosFetch from '../../../hooks/useAxiosFetch';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Disclosure } from '@headlessui/react';
import { IoChevronDownCircleOutline, IoChevronUpCircleOutline } from 'react-icons/io5';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
const ManageOrders = () => {
    const axios = useAxiosFetch();
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);


    useEffect(() => {
        setLoader(true);
        axios.get('/food-order/order/6506ac3d47e43188cdc250a9')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoader(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleCancelOrder = (id) => {
        setLoader(true);
    }
    const handleProcessOrder = (id) => { }

    // JSX
    if (loader) return <div className="h-screen flex justify-center items-center w-full">
        <AiOutlineLoading3Quarters className="text-5xl text-primary animate-spin" />
    </div>


    return (
        <div>
            <div className="space-y-4">
                {data.map((order, index) => (
                    <Disclosure key={index}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full p-4 bg-gray-100 text-gray-800 hover:bg-gray-200">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2">
                                            <img
                                                src={order.food[0]?.image} // Use the first food item's image, add error handling
                                                alt="Food"
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        <div>
                                            Order #{index + 1} - {order.orders.paymentStatus}
                                        </div>
                                    </div>
                                    {open ? (
                                        <BsChevronUp className="w-6 h-6" />
                                    ) : (
                                        <BsChevronDown className="w-6 h-6" />
                                    )}
                                </Disclosure.Button>
                                <Disclosure.Panel className="p-4 bg-gray-200">
                                    <div className="mb-4">
                                        <h2 className="text-xl font-semibold">Order Details</h2>
                                        <p>Payment ID: {order.orders.paymentId}</p>
                                        <p>Payment Amount: ${order.orders.paymentAmount}</p>
                                        <p>Payment Status: {order.orders.paymentStatus}</p>
                                        <p>Payment Method: {order.orders.paymentMethod}</p>
                                        <p>Payment Date: {new Date(order.orders.paymentDate * 1000).toLocaleDateString()}</p>
                                        <p>User Name: {order.orders.userName}</p>
                                        <p>User Email: {order.orders.userEmail}</p>
                                    </div>
                                    <div className="mb-4">
                                        <h2 className="text-xl font-semibold">Ordered Items</h2>
                                        {order.orders.orderedItem.map((item, i) => (
                                            <div key={i} className="flex items-center justify-between mt-2">
                                                {order.food && order.food.find(food => food._id === item.foodId) ? (
                                                    <>
                                                        <div className="flex items-center">
                                                            <div className="w-10 h-10 bg-gray-300 rounded-full mr-2">
                                                                <img
                                                                    src={order.food.find(food => food._id === item.foodId).image}
                                                                    alt="Food"
                                                                    className="w-full h-full object-cover rounded-full"
                                                                />
                                                            </div>
                                                            <p>{item.quantity} x {order.food.find(food => food._id === item.foodId).food_name}</p>
                                                        </div>
                                                        <p>${item.quantity * order.food.find(food => food._id === item.foodId).price}</p>
                                                    </>
                                                ) : (
                                                    <p>Item data not available.</p>
                                                )}
                                            </div>
                                        ))}
                                        <p className="mt-2">Total Items: {order.orders.totalItems}</p>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">Delivery Status</h2>
                                        <p>Delivery Status: {order.orders.deliveryStatus}</p>
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                            onClick={() => handleProcessOrder(order.orders.paymentId)}
                                        >
                                            Process Order
                                        </button>
                                        <button
                                            className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                            onClick={() => handleCancelOrder(order.orders.paymentId)}
                                        >
                                            Cancel Order
                                        </button>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
};

export default ManageOrders;
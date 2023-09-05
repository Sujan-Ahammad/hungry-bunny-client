import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaArrowRight, FaMailBulk, FaShoppingCart, FaUserAstronaut } from 'react-icons/fa';
import { BsStopwatch } from 'react-icons/bs';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { PiBowlFood, PiVanDuotone } from 'react-icons/pi';
import { BiLike } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';

function RestaurantDetails() {
    const restaurant = useLoaderData()
    console.log(restaurant.restaurantName);

    return (
        <div className='sm:ml-5 dark:text-slate-200'>
         <div className='mt-7 md:flex mb-4 sm:ml-5'>
        <div className='mt-4 md:w-[50%] md:mr-8'>
          <h3 className='font-extrabold text-4xl'>{restaurant.restaurantName}</h3>
          <p className='mt-3 md:mr-7'> {restaurant.descriptionFirst}</p>
          <p className='mt-3 md:mr-7'> {restaurant.descriptionSecond}</p>
         <div className='flex'>
         <button className="drop-shadow-lg mr-10 hover:transition hover:duration-600 bg-orange-500 border-2 border-white hover:text-orange-500 hover:bg-white mt-8 text-white font-bold py-2 px-4 uppercase text-2xl rounded-full items-center">
            order now
          </button>
          <button className="drop-shadow-lg hover:transition hover:duration-600 bg-white border-2 border-orange-500 hover:text-white hover:bg-orange-500 mt-8 text-orange-500 font-bold py-2 px-4 uppercase text-2xl rounded-full items-center">
            order now
          </button>
         </div>
          {/* <div className='mt-3 mb-3 flex text-center'>
        <div className='border-2 sm:w-[50%] md:w-[40%] hover:transition hover:duration-400 rounded-2xl mr-16 border-orange-400 pr-4 pl-4 hover:bg-orange-500 hover:text-white '>
          <p className='text-4xl'><span>5000</span> <span className='text-6xl'>+</span></p>
          <p className='text-2xl'>happy customer</p>
        </div>
        <div className='border-2 sm:w-[50%] md:w-[40%] hover:transition hover:duration-400 rounded-2xl mr-16 border-orange-400 pr-4 pl-4 hover:bg-orange-500 hover:text-slate-200 '>
          <p className='text-4xl'><span>115</span> <span className='text-6xl'>+</span></p>
          <p className='text-2xl'>recipe</p>
        </div>
        
      </div> */}
          {/* <div className='flex justify-evenly restaurants-center mt-7 mb-5'>
          <button className="bg-orange-500 hover:transition hover:duration-400 hover:bg-orange-600 text-slate-200 font-bold py-2 px-4 rounded-full flex restaurants-center">
            become a partner
          </button>
          <Rating
      style={{ maxWidth: 140 }}
      value={restaurant.rating}
      readOnly
    />
          </div> */}
        </div>
        <div className='md:w-[50%]'>
          <img src={restaurant.restaurantImage} className='w-full sm:m-5 rounded-2xl' alt="" />
        </div>
      </div>
      {/* add new section */}
<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-10 mb-10'>
  <div className='p-7 bg-white hover:transition duration-400 rounded-3xl drop-shadow-lg hover:text-white hover:bg-orange-500 dark:bg-black dark:text-white dark:border-2 dark:border-orange-500 dark:hover:bg-orange-500 hover:'>
    <p className='text-7xl ml-3'><PiVanDuotone/> </p>
    <h3 className='text-4xl font-bold'>Fast Delivery</h3>
    <p className='mt-4 mb-4'>Fast food delivery is the ultimate solution for those moments when you crave mouthwatering, convenient, and delicious meals without the hassle of cooking or leaving your home.</p>
  </div>
  <div className='p-7 bg-white hover:transition duration-400 rounded-3xl drop-shadow-lg hover:text-white hover:bg-orange-500 dark:bg-black dark:text-white dark:border-2 dark:border-orange-500 dark:hover:bg-orange-500'>
    <p className='text-7xl ml-3 hover:text-white'><BsStopwatch/> </p>
    <h3 className='text-4xl font-bold'>Save your Time</h3>
    <p className='mt-4 mb-4'>Save time with our swift food delivery service. Spend less time in the kitchen and more time enjoying your meals, all with just a few clicks.</p>
  </div>
  <div className='p-7 bg-white hover:transition duration-400 rounded-3xl drop-shadow-lg hover:text-white hover:bg-orange-500 dark:bg-black dark:text-white dark:border-2 dark:border-orange-500 dark:hover:bg-orange-500'>
    <p className='text-7xl ml-3 hover:text-white'><MdOutlineLocalOffer/> </p>
    <h3 className='text-4xl font-bold'>Regular Discount</h3>
    <p className='mt-4 mb-4'>Unlock regular discounts for loyal customers. Enjoy savings on your favorite dishes with our exclusive offers, making dining with us even more satisfying.</p>
  </div>
  <div className='p-7 bg-white hover:transition duration-400 rounded-3xl drop-shadow-lg hover:text-white hover:bg-orange-500 dark:bg-black dark:text-white dark:border-2 dark:border-orange-500 dark:hover:bg-orange-500'>
    <p className='text-7xl ml-3 hover:text-white'><PiBowlFood/> </p>
    <h3 className='text-4xl font-bold'>Variety Foods</h3>
    <p className='mt-4 mb-4'>Explore a world of diverse flavors. Our menu boasts a variety of cuisines, promising an exciting dining adventure with every order.</p>
  </div>
</div>

      

    {/* food restaurant card */}
<div className="dark:text-slate-300">
<div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-8 gap-3 lg:grid-cols-4 mb-14">
          {
            restaurant.foodItems.map((items, idx) => <div key={items.idx} className='p-2 border overflow-hidden shadow-lg rounded-2xl gap-y-4'>
            <img className="w-full object-cover rounded-lg" src={items.foodImage} alt="Food Image" />
            <div className='w-full relative group hover:-translate-y-4 duration-500'>
              <div className=''>
              <p className='font-bold flex justify-between mt-2'><span><Rating
        style={{ maxWidth: 100 }}
        value={items.foodRating}
        readOnly
      /></span> <span className='flex text-2xl items-center'><BiLike className='mr-2'/> 0 </span></p>
            <div className="px-2 py-4">
              <div className="mb-2">
                <p className='font-extrabold text-2xl dark:text-slate-300'>Food Name {items.foodItem}</p>
              </div>
                <p className='font-extrabold'>{items.description.slice(0, 50)}</p>
                <div className='font-bold flex justify-between items-center mt-2'>
                <p className='mr-2 text-2xl'>$ {items.price}</p>
                <button className="drop-shadow-lg hover:transition duration-600 bg-orange-500 border-2 border-orange-500 hover:text-orange-500 hover:bg-white text-white font-bold py-1 px-3 rounded-full flex items-center">
                  <span>add to cart</span> <span className='ml-2'><FaShoppingCart/> </span>
                </button>
                </div>
                
            </div>
              </div>
            </div>
          </div>)
          }

      </div>
      {/* <div className='md:w-[25%]'>

      <div className='mt-10 p-2  rounded-2xl drop-shadow-lg dark:bg-black'>
       <div className='drop-shadow-lg ml-4 dark:bg-black border-4 border-orange-400 p-2 rounded-xl'>
       <h2 className='text-center text-4xl font-extrabold mb-5'>Popular Dish Item</h2>
       {
        restaurant.popularDish.map((item, id) => 
        <p key={item.id} className='font-semibold mb-5 flex bg-white rounded-2xl hover:bg-orange-500 text-slate-800 hover:text-white p-1 justify-between ml-1 items-center mt-2 text-2xl'><span> {item.dishName}</span><span><FaArrowRight/></span></p>)
       }

       </div>
     
      </div>
      <div className='mt-20 rounded-xl border-4 border-orange-400 pl-4 pr-4 pt-10 pb-10 ml-7'>
        <h2 className='mb-6 text-center uppercase font-bold text-4xl'>contact & service</h2>
       <p className='text-2xl'>Email</p>
        <p className='flex mb-5 items-center justify-between p-1 bg-white rounded-2xl hover:bg-orange-500 text-slate-800 hover:text-white text-2xl'><span className='flex items-center'><FaMailBulk/> {restaurant.email}</span> <span><FaArrowRight/> </span></p>
       <p className='text-2xl'>Service</p>
        <p className='flex items-center justify-between p-1 bg-white rounded-2xl hover:bg-orange-500 text-slate-800 hover:text-white text-2xl'><span className='flex items-center'><FaUserAstronaut/> {restaurant.service}</span> <span><FaArrowRight/> </span></p>
      </div>
      </div> */}

</div>
        </div>
    );
}

export default RestaurantDetails;
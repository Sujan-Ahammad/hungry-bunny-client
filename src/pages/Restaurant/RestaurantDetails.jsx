import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

function RestaurantDetails() {
    const restaurant = useLoaderData()
    console.log(restaurant.restaurantName);

    return (
        <div>
         <div className='mt-7 md:flex mb-4'>
        <div className='mt-6 w-[50%] mr-8'>
          <h3 className='font-extrabold text-4xl'>{restaurant.restaurantName}</h3>
          <p className='mt-4 md:mr-7'> {restaurant.descriptionFirst}</p>
          <p className='mt-4 md:mr-7'> {restaurant.descriptionSecond}</p>
          <div className='flex justify-evenly restaurants-center mt-7'>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full flex restaurants-center">
            become a partner
          </button>
          <Rating
      style={{ maxWidth: 140 }}
      value={restaurant.rating}
      readOnly
    />
          </div>
        </div>
        <div className='w-[50%]'>
          <img src={restaurant.restaurantImage} className='w-full' alt="" />
        </div>
      </div>

    {/* food restaurant card */}
<div className="md:flex">
<div className="grid md:grid-cols-1 md:gap-8 gap-3 lg:grid-cols-2 mt-10 w-[65%]">
          <div className='p-2 border overflow-hidden shadow-lg rounded-md'>
          <img className="w-full  h-48 object-cover rounded-lg" src={restaurant.foodItems[0].foodImage} alt="Food Image" />
          <div className="px-6 py-4">
            <div className="mb-2">
              <p className='font-extrabold text-2xl'>Food Name {restaurant.foodItems[0].foodItem}</p>
            </div>
              <p className='font-extrabold'>{restaurant.foodItems[0].description}</p>
              <div>
              <p className='font-bold flex justify-between mt-2'><span className='mr-2 text-2xl'>$ {restaurant.foodItems[0].price}</span> <span><Rating
      style={{ maxWidth: 100 }}
      value={restaurant.foodItems[0].foodRating}
      readOnly
    /></span></p>
              </div>
              
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex restaurants-center">
                Details
              </button>
          </div>
        </div>
          <div className='p-2 border overflow-hidden shadow-lg rounded-md'>
          <img className="w-full  h-48 object-cover rounded-lg" src={restaurant.foodItems[1].foodImage} alt="Food Image" />
          <div className="px-6 py-4">
            <div className="mb-2">
              <p className='font-extrabold text-2xl'>Food Name {restaurant.foodItems[1].foodItem}</p>
            </div>
              <p className='font-extrabold'>{restaurant.foodItems[1].description}</p>
              <div>
              <p className='font-bold flex justify-between mt-2'><span className='mr-2 text-2xl'>$ {restaurant.foodItems[1].price}</span> <span><Rating
      style={{ maxWidth: 100 }}
      value={restaurant.foodItems[1].foodRating}
      readOnly
    /></span></p>
              </div>
              
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex restaurants-center">
                order now
              </button>
          </div>
        </div>
          <div className='p-2 border overflow-hidden shadow-lg rounded-md'>
          <img className="w-full  h-48 object-cover rounded-lg" src={restaurant.foodItems[2].foodImage} alt="Food Image" />
          <div className="px-6 py-4">
            <div className="mb-2">
              <p className='font-extrabold text-2xl'>Food Name {restaurant.foodItems[2].foodItem}</p>
            </div>
              <p className='font-extrabold'>{restaurant.foodItems[2].description}</p>
              <div>
              <p className='font-bold flex justify-between mt-2'><span className='mr-2 text-2xl'>$ {restaurant.foodItems[2].price}</span> <span><Rating
      style={{ maxWidth: 100 }}
      value={restaurant.foodItems[2].foodRating}
      readOnly
    /></span></p>
              </div>
              
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex restaurants-center">
                order now
              </button>
          </div>
        </div>
          <div className='p-2 border overflow-hidden shadow-lg rounded-md'>
          <img className="w-full  h-48 object-cover rounded-lg" src={restaurant.foodItems[3].foodImage} alt="Food Image" />
          <div className="px-6 py-4">
            <div className="mb-2">
              <p className='font-extrabold text-2xl'>Food Name {restaurant.foodItems[3].foodItem}</p>
            </div>
              <p className='font-extrabold'>{restaurant.foodItems[3].description}</p>
              <div>
              <p className='font-bold flex justify-between mt-2'><span className='mr-2 text-2xl'>$ {restaurant.foodItems[3].price}</span> <span><Rating
      style={{ maxWidth: 100 }}
      value={restaurant.foodItems[3].foodRating}
      readOnly
    /></span></p>
              </div>
              
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex restaurants-center">
                order now
              </button>
          </div>
        </div>
          <div className='p-2 border overflow-hidden shadow-lg rounded-md'>
          <img className="w-full  h-48 object-cover rounded-lg" src={restaurant.foodItems[4].foodImage} alt="Food Image" />
          <div className="px-6 py-4">
            <div className="mb-2">
              <p className='font-extrabold text-2xl'>Food Name {restaurant.foodItems[4].foodItem}</p>
            </div>
              <p className='font-extrabold'>{restaurant.foodItems[4].description}</p>
              <div>
              <p className='font-bold flex justify-between mt-2'><span className='mr-2 text-2xl'>$ {restaurant.foodItems[4].price}</span> <span><Rating
      style={{ maxWidth: 100 }}
      value={restaurant.foodItems[4].foodRating}
      readOnly
    /></span></p>
              </div>
              
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex restaurants-center">
                order now
              </button>
          </div>
        </div>
      </div>
      <div className='w-[35%] mt-10'>
        <h2 className='text-center'>Popular Dish Item</h2>
      </div>
</div>
        </div>
    );
}

export default RestaurantDetails;
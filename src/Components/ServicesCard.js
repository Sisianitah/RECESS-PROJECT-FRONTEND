import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ServiceCard = ({ title, description, icon, image }) => {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => setFavorite(!favorite);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full sm:w-[300px]">
      <img src={image} alt={title} className="h-40 w-full object-cover rounded-md mb-3" />
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-orange-600">{title}</h3>
        <button onClick={toggleFavorite}>
          {favorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button className="bg-orange-500 text-white py-1 px-3 rounded hover:bg-orange-600 transition duration-300">
        Book Service
      </button>
    </div>
  );
};

export default ServiceCard;

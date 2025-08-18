import React from "react";
import ServiceCard from "./ServiceCard";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import imgImage10 from "figma:asset/d0f3cc0fde0d08e6c10dc79247ab5439c8bea762.png";
import imgImage10 from "../assets/images/your-image.png";


interface ServiceCardProps {
  title: string;
  description: string[];
  iconStyle?: string;
}

export function ServiceCard({
  title,
  description,
  iconStyle = "",
}: ServiceCardProps) {
  return (
    <Card className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
      <div className="flex flex-col items-center text-center flex-grow">
        {/* Icon */}
        <div
          className={`w-16 h-16 mb-4 bg-center bg-cover bg-no-repeat ${iconStyle}`}
          style={{ backgroundImage: `url('${imgImage10}')` }}
        />

        {/* Title */}
        <h3 className="text-[#ff9751] font-bold text-xl mb-4">
          {title}
        </h3>

        {/* Description */}
        <div className="text-black text-sm space-y-2 mb-6 flex-grow">
          {description.map((line, index) => (
            <p key={index} className="leading-relaxed">
              {line}
            </p>
          ))}
        </div>

        {/* Book Now Button */}
        <Button className="bg-[#ff9751] hover:bg-[#e8854a] text-white px-6 py-2 rounded-full font-bold transition-colors w-full max-w-[150px]">
          Book Now
        </Button>
      </div>
    </Card>
  );
}

export default ServiceCard;













// import React, { useState } from 'react';
// import { FaHeart, FaRegHeart } from 'react-icons/fa';

// const ServiceCard = ({ title, description, icon, image }) => {
//   const [favorite, setFavorite] = useState(false);

//   const toggleFavorite = () => setFavorite(!favorite);

//   return (
//     <div className="bg-white shadow-md rounded-xl p-4 w-full sm:w-[300px]">
//       <img src={image} alt={title} className="h-40 w-full object-cover rounded-md mb-3" />
//       <div className="flex justify-between items-center mb-2">
//         <h3 className="text-lg font-bold text-orange-600">{title}</h3>
//         <button onClick={toggleFavorite}>
//           {favorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
//         </button>
//       </div>
//       <p className="text-sm text-gray-600 mb-4">{description}</p>
//       <button className="bg-orange-500 text-white py-1 px-3 rounded hover:bg-orange-600 transition duration-300">
//         Book Service
//       </button>
//     </div>
//   );
// };

// export default ServiceCard;

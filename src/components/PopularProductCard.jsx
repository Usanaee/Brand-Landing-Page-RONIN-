import React from "react";
import { star } from "../assets/media/icons";
function PopularProductCard({ imgURL, name, price, rating }) {
  return (
    <div className="flex flex-1 flex-col  w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] rounded-lg" />
      <div className="mt-8 flex justify-start gap-3">
        <img src={star} alt="" height={24} width={24} />
        <p className="leading-normal text-xl text-slate-gray font-montserrat"> ({rating}) </p>
      </div>
      <h3 className="mt-2 font-semibold leading-normal text-2xl font-palanquin">{name}</h3>
      <p className="mt-2 font-montserrat font-semibold text-red-600 leading-normal">{price}</p>
    </div>

  );
}

export default PopularProductCard;

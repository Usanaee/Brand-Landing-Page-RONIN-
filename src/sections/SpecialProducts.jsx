import React from "react";
import {getOffer, offer} from '../assets/media/images'
import Button from "../components/Button";
import { arrowRight } from "../assets/media/icons";

function SpecialProducts() {
  return (
    <section className="flex max-container justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="felx-1">
        <img
          src={offer}
          alt="Offering-products-img"
          className="object-contain"
          width={773}
        />
        <div className="relative flex justify-center items-center -top-[450px] left-64 max-lg:left-0 max-lg:-top-[450px]">
        <img src={getOffer} alt=""  className="rotate max-lg:w-[150px]" width={250} />
        <h2 className="text-white absolute text-[35px] font-palanquin font-bold max-lg:text-[20px]">30%</h2>  
        </div>
      </div>
      <div className="flex flex-1 flex-col lg:-mt-64 max-lg:mt-0">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-red-600"> Sepcial </span> Offer.
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <div className="mt-11 flex felx-wrap gap-4 ">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  );
}

export default SpecialProducts;

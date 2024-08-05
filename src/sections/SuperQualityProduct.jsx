import React from "react";
import Button from "../components/Button";

// import { arrowRight } from "../assets/media/icons";
// import { shoe8 } from "../assets/media/images";
import { bigShoe1 } from "../assets/media/images";
function SuperQualityProduct() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-red-600"> Super </span>
          <span className="text-red-600"> Quality </span> Headphones.
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details"/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {/* <img src={shoe8} alt="" height={522} width={570} className="object-contain" /> */}
        <img src={bigShoe1} alt="" height={522} width={600} className="object-contain shadow-xl bg-gradient-to-br from-black to-red-500 rounded-md" />
      </div>
    </section>
  );
}

export default SuperQualityProduct;

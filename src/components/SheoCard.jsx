import React from "react";
import { bigShoe1 } from "../assets/media/images";

function SheoCard({ bigSheoImg, changeBigSheoImg, imgURL }) {
  const handleClick = () => {
    if (bigSheoImg !== imgURL.bigShoe) {
      changeBigSheoImg(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigSheoImg === imgURL.bigShoe
       ? 'border-red-600' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-sheo-card bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 sm:-bottom-[5%] hover:scale-110 hover:transition hover:duration-300 ">
        <img
          src={imgURL.thumbnail}
          alt="sheo collection"
          className="object-contain"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
}

export default SheoCard;

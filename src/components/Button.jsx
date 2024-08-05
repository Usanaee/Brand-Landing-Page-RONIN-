import React from "react";

function Button({ label, iconURL,textColor,borderColor,backgroundColor,fullWidth}) {
  return <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full
  ${backgroundColor ? `${borderColor} ${textColor}`  :"bg-red-600 text-white"} `}>{label}
 {iconURL && <img src={iconURL} alt="arrow icon" className="ml-2 rounded-full w-5 h-5"/>}
  </button>;
}

export default Button;

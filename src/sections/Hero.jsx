import React,{useState} from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/media/icons";
import { shoes, statistics } from "../constant/index";
import { bigShoe1 } from "../assets/media/images";
import SheoCard from "../components/SheoCard";

function Hero() {
  
  const [bigSheoImg, setBigSheoImg] = useState(bigShoe1

  );
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 padding">
        <p className="text-xl font-montserrat text-red-600 pt-16">
          Our Latest Collection's
        </p>
        <h1 className="mt-10 font-palanquin text-8xl mx-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-red-600 mt-3 inline-block ">Ronin</span><span className=" max-lg:hidden" >Headphone</span>
          <br />
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover wonderfull ronin arrivals, quality, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full  mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center max-lg:hidden max-xl-py-40 bg-primary bg-hero bg-cover bg-center ">
        <img
          className="object-contain relative z-10"
          height={500}
          width={610}
          src={bigSheoImg}
          alt="big-sheo-img"
        />
        <div className="flex sm:gap-6 gap-4 max-lg:-bottom-[5%] -bottom-[5%] absolute sm:left-[10%] max-sm:px-6 ">
          {shoes.map((sheo,index) => (
            <div key={index}>
              <SheoCard
                imgURL={sheo}
                changeBigSheoImg={(sheo) => setBigSheoImg(sheo)}
                bigSheoImg={bigSheoImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

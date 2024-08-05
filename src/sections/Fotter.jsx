import React from "react";
import { footerLogo } from "../assets/media/images";
import { footerLinks, socialMedia } from "../constant";
import { copyrightSign } from "../assets/media/icons";

function Fotter() {
  return (
    <section className="max-container">
      <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="nike-logo" height={46} width={150} className="rounded-sm" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get headphone ready for the new term at your nearest ronin store. Find
            Your perfect sound In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer"
                key={icon.id}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  key={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat mb-6 font-medium text-2xl leading-normal ">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 cursor-pointer font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white h-0.5 w-full mt-20" />
      <div className='flex justify-between text-white-400 mt-5 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright 2024 Ronin All Rights Reserved  | Managed  By USANAEE</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </section>
  );
}

export default Fotter;

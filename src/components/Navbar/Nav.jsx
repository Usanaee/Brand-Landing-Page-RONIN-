import React from "react";
import { headerLogo } from "../../assets/media/images";
import { arrowRight, hamburger } from "../../assets/media/icons";
import { navLinks } from "../../constant";
import "./Nav.css";
import Button from "../Button";
// import { useRef } from "react";

function Nav() {
  // let menuRef = useRef();
  // let openMenu = () =>{
  //   menuRef.current.style.right = "0"
  // }
  // let closeMenu = () =>{
  //   menuRef.current.style.right = "-350px"
  // }
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="#">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((listItems) => {
            return (
              <li key={listItems.label}>
                <a
                  href={listItems.href}
                  className="font-monts errat leading-normal text-lg text-slate-gray hover:text-coral-red hover:transition hover:delay-75 hover:duration-300 "
                >
                  {listItems.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="max-lg:hidden">
          <Button label="Explore Now" iconURL={arrowRight}></Button>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;

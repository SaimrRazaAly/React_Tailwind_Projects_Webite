import React from "react";
import { Asserts } from "../../assets/images/Turisom_Data";

const Header = () => {
  return (
    <>
      <header className=" border-b-[3px] border-b-white py-5">
        <ul className="flex justify-between items-center px-7 py-[10px] text-white  " >
          <div className="md:flex gap-2 hidden ">
            <button className="w-[20px] h-[20px] p-4 md:p-5 rounded-full bg-[#588cd0] xl:p-6  "></button>
            <div className="">
              <p>For Future inquries:</p>
              <p>+0334775234</p>
            </div>
          </div>

          <div>
            <img src={Asserts.Logo} alt="" className="mr-6 w-[120px] md:w-full" />
          </div>
        <div className="xl:mr-10">S</div>
        </ul>
      </header>
    </>
  );
};

export default Header;

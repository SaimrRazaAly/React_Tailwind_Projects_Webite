import React from "react";
import { Asserts } from "../../assets/images/Destination";

const Header = () => {
  return (
    <>
      <header>
        <ul className="flex justify-between items-center px-5 py-[10px] text-white  " >
          <div className="flex gap-2">
            <button className="w-[20px] h-[20px] p-5 rounded-full bg-[#588cd0] xl:p-6  "></button>
            <div>
              <p>For Future inquries:</p>
              <p>+0334775234</p>
            </div>
          </div>

          <div>
            <img src={Asserts.Logo} alt="" className="mr-6" />
          </div>
        <div className="xl:mr-10">S</div>
        </ul>
      </header>
    </>
  );
};

export default Header;

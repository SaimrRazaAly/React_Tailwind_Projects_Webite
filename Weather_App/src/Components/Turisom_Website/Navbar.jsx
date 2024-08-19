import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  return (
    <nav className="flex justify-between items-center px-5 py-5 mt-3 border-b-2 border-b-white text-white">
      <div>
        <button className="nav-media-icons"></button>
        <button className="nav-media-icons"></button>
        <button className="nav-media-icons"></button>
      </div>
      <ul className={`z-10 gap-10 ${menu ? "show-menu hide-menu  " : "hidden   xl:flex-row xl:flex  xl:gap-5"}`}>
        <button
          className="fixed right-3 text-[30px] xl:hidden"
          onClick={() => setMenu(false)}
        >
          X
        </button>
        <li>
          <a href="#" className="nav-a">
           HOME
          </a>
        </li>
        <li>
          <a href="#" className="nav-a">
            ABOUT US
          </a>
        </li>
        <li>
          <a href="#" className="nav-a">
            DESTINATION
          </a>
        </li>
        <li>
          <a href="#" className="nav-a">
            PAKAGES
          </a>
        </li>
        <li>
          <a href="#" className="nav-a">
            PAKAGES
          </a>
        </li>
        <li>
          <a href="#" className="nav-a">
            GALLARY
          </a>
        </li>
        <li>
          <a href="#" className="nav-a">
            CONTACT US
          </a>
        </li>
      </ul>
      <button className="nav-btn">
        Book Now
      </button>
      <button onClick={() => setMenu(true)} className="xl:hidden text-[30px] border-[3px] px-3 mb-1 border-[#588cd0] rounded-full">=</button>
    </nav>
  );
};

export default Navbar;

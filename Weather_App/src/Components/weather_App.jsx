import React from "react";
import Search_icon from "../assets/search.png";
import clear from "../assets/clear.png";
const Weather_App = () => {
  let key = "";
  return (
    <>
      <div className="max-w-[350px]  md:max-w-[500px]   bg-blue-400 rounded-2xl m-auto mt-[50px] p-5">
        {/* search box */}
        <div className="flex items-center justify-around pr-2 pt-3">
          <input
            type="text"
            placeholder="Enter a city"
            className="p-3 px-5 md:w-[80%] md:text-[18px] text-[15px] md:p-5  rounded-full outline-none border-none
        "
          />
          <button className="bg-white p-3 rounded-full md:p-5">
            <img src={Search_icon} alt="" className="md:w-[25px]"/>
          </button>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div>
            <img src={clear} alt="" />
          </div>
          <div className="text-white text-center">
            <h2 className="text-[50px] md:text-[70px]  font-bold">25°C</h2>
            <h3 className="text-[25px]">Karachi</h3>
          </div>
        </div>

        <div className="flex justify-between items-center  px-5 my-5 text-white">
          <div>
            <div><img src="" alt="" /></div>
            <h2 className="text-[22px] md:text-[30px] font-bold">Humidity</h2>
            <p className=" text-[20px]">50km/h</p>
          </div>
          <div>
            <div><img src="" alt="" /></div>
            <h2 className="text-[22px] md:text-[30px] font-bold">Wind</h2>
            <p className=" text-[20px]">50km/h</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather_App;

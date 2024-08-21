import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Booking from "../Booking";
import Destination from "../Destination";
import Pakages from "../Pakages";

const Page = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Booking />
      <Destination/>
   <Pakages/>
      </div>
    </>
  );
};

export default Page;

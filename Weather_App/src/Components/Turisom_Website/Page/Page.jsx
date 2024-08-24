import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Booking from "../Booking";
import Destination from "../Destination";
import Pakages from "../Pakages";
import Gallary from "../Gallary";

const Page = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Booking />
        <Destination />
        <Pakages />
        <Gallary />
      </div>
    </>
  );
};

export default Page;

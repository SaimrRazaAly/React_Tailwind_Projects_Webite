import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Booking from "../Booking";
import Destination from "../Destination";
import Pakages from "../Pakages";
import Gallary from "../Gallary";
import Min_Contact from "../Min_Contact";
import Main_Contact from "../Main_Contact";
import Footer from "../Footer";

const Page = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Booking />
        <Destination />
        <Pakages />
        <Gallary />
        <Min_Contact/>
        <Main_Contact/>
        <Footer/>
      </div>
    </>
  );
};

export default Page;

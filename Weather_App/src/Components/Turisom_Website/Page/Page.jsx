import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Booking from "../Booking";
import SectionHeading from "../SectionHeading";

const Page = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Booking />
        <SectionHeading
          suptitle={"Uncoverd places"}
          title={'Destination'}
          para="Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent."
        />
      </div>
    </>
  );
};

export default Page;

import React from "react";
import SectionHeading from "./SectionHeading";
import { Asserts } from "../../assets/images/Turisom_Data";

const Gallary = () => {
  return (
    <section className="my-[80px]">
      <SectionHeading
        suptitle="PHOTO GALLERY"
        title="PHOTO'S FROM TRAVELLERS"
        para="Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent."
      />
      <div className="gird-contianer  grid md:grid-cols-3  sm:grid-cols-2  gap-x-8 px-10 mt-5 items-center sm:gap-y-0 gap-y-6 cursor-pointer justify-items-center content-center">
        <div className="flex flex-col md:gap-5 gap-3 items-center justify-center">
          <img
            src={Asserts.Gallary_1}
            alt=""
            className="w-full  object-cover rounded-xl mb-7 scale-y-[1.08] "
          />
          <img
            src={Asserts.Gallary_5}
            alt=""
            className="w-full   object-cover rounded-xl scale-y-[1.1] "
          />
        </div>
        <div className="w-full  my-5 md:my-0">
          <img
            src={Asserts.Gallary_3}
            alt=""
            className="w-full object-cover rounded-xl "
          />
        </div>
        <div className="flex flex-col md:flex-col sm:flex-row md:translate-x-0 sm:translate-x-[149px] md:gap-5 sm:gap-10 gap-3 items-center justify-center  ">
          <img
            src={Asserts.Gallary_4}
            alt=""
            className="w-full  object-cover rounded-xl "
          />
          <img
            src={Asserts.Gallary_2}
            alt=""
            className="w-full   object-cover rounded-xl "
          />
        </div>
      </div>
    </section>
  );
};

export default Gallary;

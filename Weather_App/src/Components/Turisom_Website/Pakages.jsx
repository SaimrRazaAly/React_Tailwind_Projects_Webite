import { Asserts } from "../../assets/images/Turisom_Data";
import SectionHeading from "./SectionHeading";

const Pakages = () => {
  return (
    <section className="mt-[100px]">
      <SectionHeading
        title={"CHECKOUT OUR PACKEGES"}
        suptitle={"POPULAR PACKEGES"}
        para={
          "Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent."
        }
      />
      <div className="mt-[50px] px-3 flex flex-col items-center box-border lg:flex-row">
        {/* the pakage box */}
        <div className="flex items-center justify-center max-w-[300px] flex-col sm:max-w-[400px] xl:flex-row m-auto">
          <div className="flex">
            <img
              src={Asserts.Gallary_1}
              alt=""
              className="w-full rounded-tl-[12px] rounded-t-[12px] rounded-b-none h-auto lg:h-full"
            />
          </div>
          {/* text */}
          <div className="py-10 px-5 bg-[#fafafa] ">
            <h2 className="font-bold text-[1.2em]">
              EXPERIENCE THE GREAT HOLIDAY ON BEACH
            </h2>
            <p className="text-onyx">
              Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo
              maiores, est aliquet porttitor! Eaque, cras, aspernatur.
            </p>
          {/* more detail */}
          <div className="flex gap-5 py-2 items-center justify-center bg-white shadow-md mt-10 rounded-full">
            <span className="pakages-min-detail"> 7D/6N</span>
            <span className="pakages-min-detail"> pax: 10</span>
            <span className="pakages-min-detail">Malaysia</span>
          </div>
          </div>
          {/* reviews and prices */}
          <div className="bg-united-nations-blue flex flex-col w-full items-center text-white py-3">
            <span className="font-bold text-[1.5em]">(25 reviwes)</span>
            <h1 className="text-[2.5em] font-extrabold">$750</h1>
            <p>/ per person</p>
            <button className="mt-5 transparent-btn  px-10 py-4">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pakages;

import { Asserts, Packages_Data } from "../../assets/images/Turisom_Data";
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
      {/* <div className="mt-[50px] px-3 flex flex-col items-center justify-center gap-10 "> */}
      <div className="mt-[50px] px-3  items-start  res-95:items-center flex res-95:flex-col justify-start flex-wrap res-95:justify-center gap-10 ">
        {/* the pakage box */}

        {Packages_Data.map((v, i) => {
          return (
            <div
              key={i}
              className="flex items-center justify-center max-w-[300px] flex-col sm:max-w-[400px] res-95:flex-row m-auto  "
            >
              {/* <div className="res-90:max-[300px]"> */}
              <img
                src={v.pak_img}
                alt=""
                className="w-full res-95:rounded-tl-[12px] res-95:rounded-bl-[12px] rounded-b-none res-95:max-w-[82%] res-95:rounded-none rounded-tl-[12px]  rounded-tr-[12px]"
              />
              {/* </div> */}
              {/* text */}
              <div className="detail-container">
                <h2 className="font-bold text-[1.2em] res-95:text-[1.3em]">
                  {v.pak_title}
                </h2>
                <p className="text-onyx">{v.pak_para}</p>
                {/* more detail */}
                <div className="more-detail-container">
                  <span className="pakages-min-detail">
                    {v.pak_min_details.det_Person}
                  </span>
                  <span className="pakages-min-detail">
                    {" "}
                    {v.pak_min_details.det_Days}
                  </span>
                  <span className="pakages-min-detail">
                    {v.pak_min_details.det_Country}
                  </span>
                </div>
              </div>
              {/* reviews and prices */}
              <div className="review-container">
                <span className="font-bold text-[1.5em] res-95:text-[1em] ">
                  {v.pak_price.p_reviews}
                </span>
                <h1 className="text-[2.5em] font-extrabold">
                  {v.pak_price.p_price}
                </h1>
                <p>{v.pak_price.p_per}</p>
                <button className="mt-5 transparent-btn  px-10 py-4 res-95:px-5 res-95:py-3 text-[13px]">
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button className="nav-btn px-[3.5rem] block m-auto py-4  mt-[35px] text-white">
        Learn More
      </button>
    </section>
  );
};

export default Pakages;

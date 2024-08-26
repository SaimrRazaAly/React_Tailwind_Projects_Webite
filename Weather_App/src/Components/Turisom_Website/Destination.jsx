import popular_1 from "../../assets/images/popular-1.jpg";
import SectionHeading from "./SectionHeading";
import { Destination_Data } from "../../assets/images/Turisom_Data";
const Destination = () => {
  return (
    <section className="w-full">
      <SectionHeading
        suptitle={"Uncoverd places"}
        title={"Destination"}
        para="Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent."
      />
      <div className="flex flex-wrap  sm:gap-[20px] justify-center items-center mt-[50px] px-5">
        {Destination_Data.map((card, index) => {
            return(

                <div key={index} className="relative overflow-hidden max-w-[320px] lg:max-w-[400px] h-[440px] rounded-[25px] object-cover object-top">
            <div>
              <img
                src={card.des_img}
                alt=""
                className="w-full h-auto rounded-[25px]"
                />
            </div>
            <div className="absolute right-[20px] lg:bottom-[20px] bottom-[100px] sm:mb-0  left-[20px] p-[20px] rounded-[25px] bg-white">
              <sup className="text-blue-ncs uppercase font-bold">
                {card.sub_title}{" "}
              </sup>
              <h2 className="font-bold text-[1.4em] -mt-2 uppercase ">
                {card.main_title}
              </h2>
              <p>{card.para}</p>
            </div>
          </div>
        )
        })}
      </div>
    
      <button className="nav-btn px-[3.5rem] py-4 block  m-auto mt-[25px] text-white">LEARN MORE</button>
    </section>
  );
};

export default Destination;

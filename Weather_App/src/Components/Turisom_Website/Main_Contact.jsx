import { Asserts } from "../../assets/images/Turisom_Data"

const Main_Contact = () => {
  return (
    <div className=" md:items-center flex flex-wrap   res-82:flex-row res-82:flex-nowrap w-full bg-gunmetal text-gainsboro gap-[2rem] px-[2rem] py-[6rem] md:justify-center">
<div className="md:max-w-[300px]">
    <img src={Asserts.Logo} alt="" />
    <p>rna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, praesentium magna conubia at perferendis, pretium, aenean aut ultrices.</p>
</div>
<div className="md:ml-6">
    <h4 className="border-b-2 border-b-bright-navy-blue text-[1.2rem] font-bold">Contact Us</h4>
    <p>Feel free to contact and reach us !!</p>
    <ul className="flex flex-col gap-1" >
        <li>
        +01 (123) 4567 90</li>
        <li><a href="#">
        info.tourly.com</a></li>
        <li>
        3146 Koontz, California</li>
    </ul>
</div>
<div>
    <h3>
Subscribe our newsletter for more update & news !!
    </h3>
    <div className="flex gap-2 flex-col  ">
        <input type="text" required placeholder="Enter Your Email" className="px-6 py-3 rounded-full outline-none border-none text-gunmetal" />
        <button className="transparent-btn px-5 py-3 ">SUBSCRIBE</button>
    </div>
</div>



    </div>
  )
}

export default Main_Contact
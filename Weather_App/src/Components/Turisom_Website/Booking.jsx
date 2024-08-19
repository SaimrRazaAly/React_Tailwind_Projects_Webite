import React from "react";

const Booking = () => {
  return (
    <section className=" overflow-x-hidden bg-bright-navy-blue px-5 py-[100px] mt-[-5px] md:mt-0   res-82:px-2">
      <form className="">
        <div className="flex flex-col gap-[15px]  res-82:flex-row res-82:gap-4 res-82:items-center res-82:justify-center ">
          <div className="booking-main-div">
            <label className="booking-label">Destination*</label>

            <input
              type="text"
              placeholder="Enter ..."
              required
              className="booking-input"
            />
          </div>
          <div className="booking-main-div">
            <label className="booking-label">Pax Number</label>
            <input
              type="text"
              placeholder="Enter ..."
              required
              className="booking-input"
            />
          </div>
          <div className="booking-main-div">
            <label className="booking-label">Checkin Date**</label>
            <input
              type="data"
              placeholder="Enter ..."
              required
              className="booking-input"
            />
          </div>
          <div className="booking-main-div">
            <label className="booking-label">Checkout Date**</label>
            <input
              type="date"
              placeholder="Enter ..."
              required
              className="booking-input"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="transparent-btn px-2 py-4 mt-10 w-full res-82:w-auto res-82:px-[100px]">
            INQUIRE NOW
          </button>
        </div>
      </form>
    </section>
  );
};

export default Booking;

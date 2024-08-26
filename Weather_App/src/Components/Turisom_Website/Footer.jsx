import React from "react";

const Footer = () => {
  return (
    <footer className="bg-BGFooter text-white flex justify-center items-center flex-col px-2 py-5 gap-2 md:flex-row md:justify-between md:px-10 ">
      <h4 className="cursor-pointer text-center">© 2024 SAIMRAZA. All rights reserved</h4>
      <ul className="flex
      gap-4 text-gainsboro text-[11px] md:text-[14px] ">
        <li className="footer-li">
          <a href="#">Privacy Policy</a>
        </li>
        <li className="footer-li">
          <a href="#">Term & Condition</a>
        </li>
        <li className="footer-li">
          <a href="#">FAQ</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

import React from "react";

import Image from "next/image";
import FooterLogo from "../../../../public/assets/svg/FooterLogo.svg";

const Footer = () => {
  return (
    <footer className="w-full text-body">
      <div className="container flex flex-col flex-wrap px-5 pt-32 mx-auto lg:justify-start md:items-center lg:items-center md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a href="/#" className="block w-full py-5">
            <Image priority src={FooterLogo} alt="abc digital" />
          </a>
          <p className="mt-2 text-sm text-gray-500">
            © 2023 abc. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left lg:ml-96">
          <div className="w-full mx-auto lg:w-1/2 md:w-1/2">
            <nav className="list-none">
              <li>
                <p className="text-secondary">LONDON</p>
              </li>
              <li>
                <p className="pt-2">20-22 Wenlock Road, London, N1 7GU</p>
              </li>
              <li>
                <p className="py-6 text-primary">+442071188550</p>
              </li>
              <li>
                <p className="">career@lemonhive.com</p>
              </li>
            </nav>
          </div>
          <div className="w-full pl-32 lg:w-1/2 md:w-1/2">
            <nav className="list-none cursor-pointer ">
              <li>
                <a className="text-gray hover:text-primary hover:underline hover:decoration-primary">
                  Facebook
                </a>
              </li>
              <li className="pt-5">
                <a className=" text-gray hover:text-primary hover:underline hover:decoration-primary">
                  Twitter
                </a>
              </li>
              <li className="pt-5">
                <a className=" text-gray hover:text-primary hover:underline hover:decoration-primary">
                  LinkedIn
                </a>
              </li>
              <li className="pt-5">
                <a className=" text-gray hover:text-primary hover:underline hover:decoration-primary">
                  Instagram
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

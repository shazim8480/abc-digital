import React from "react";

import Image from "next/image";
import FooterLogo from "../../../../public/assets/svg/FooterLogo.svg";

const Footer = () => {
  return (
    <footer className="w-full text-body">
      <div className="container flex flex-col flex-wrap px-5 pt-32 mx-auto xl:justify-start md:items-center xl:items-center md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 mx-auto text-center xl:w-96 md:mx-0 md:text-left">
          <a href="/#" className="block w-full py-5">
            <Image priority src={FooterLogo} alt="abc digital" />
          </a>
          <p className="mt-2 text-body text-gray">
            © 2023 abc. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap mt-10 -mb-10 text-center xl:justify-between xl:w-full md:pl-20 md:mt-0 md:text-left xl:ml-64">
          <div className="w-full mx-auto xl:w-1/2 md:w-1/2">
            <nav className="list-none">
              <li>
                <p className="text-secondary">LONDON</p>
              </li>
              <li>
                <p className="pt-2 text-gray">
                  20-22 Wenlock Road, London, N1 7GU
                </p>
              </li>
              <li>
                <p className="py-6 text-primary">+442071188550</p>
              </li>
              <li>
                <p className="text-gray">career@lemonhive.com</p>
              </li>
            </nav>
          </div>
          <div className="w-full xl:pl-32 xl:w-1/2 md:w-1/2">
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

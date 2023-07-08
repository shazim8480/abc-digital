"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/assets/svg/Logo.svg";
import Button from "../Shared/Button";

interface ListItemProps {
  children: React.ReactNode;
  navItemStyles: string;
  NavLink: string;
}

const ListItem: React.FC<ListItemProps> = ({
  children,
  navItemStyles,
  NavLink,
}) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`flex py-2 text-body font-medium xl:ml-12 xl:inline-flex ${navItemStyles}`}
        >
          {children}
        </a>
      </li>
    </>
  );
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex items-center w-full `}>
      <div className="container">
        <div className="relative flex items-center justify-between -mx-4">
          <div className="max-w-full px-4 w-60">
            <a href="/#" className="block w-full py-5">
              <Image priority src={Logo} alt="abc digital" />
            </a>
          </div>
          <div className="flex items-center justify-end w-full">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 xl:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg py-5 px-6 shadow xl:static xl:block xl:w-full xl:max-w-full xl:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className="block xl:flex">
                  <ListItem
                    navItemStyles="text-white hover:text-primary"
                    NavLink="/#"
                  >
                    Home
                  </ListItem>
                  <ListItem
                    navItemStyles="text-white hover:text-primary"
                    NavLink="/#"
                  >
                    Services
                  </ListItem>
                  <ListItem
                    navItemStyles="text-white hover:text-primary"
                    NavLink="/#"
                  >
                    Projects
                  </ListItem>
                  <ListItem
                    navItemStyles="text-white hover:text-primary"
                    NavLink="/#"
                  >
                    Blog
                  </ListItem>
                </ul>
              </nav>
            </div>
            <div className="justify-end hidden xl:ml-8 sm:flex xl:pr-0">
              <Button outlined href="/">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

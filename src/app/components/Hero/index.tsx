import { useState } from "react";
import Button from "../Shared/Button";

export default function Example() {
  return (
    <div>
      <div className="w-full pt-32 sm:pt-48 lg:pt-120">
        <div className="text-center">
          <h1 className="text-2xl font-semibold leading-tight text-gray">
            <span className=" text-primary">Innovative Solutions</span> <br />
            for a<span className="ml-5 text-secondary">Digital World</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Trusted Agency
            </span>
          </h1>
          <p className="mt-10 font-medium leading-snug text-m text-gray">
            Elevate Your Brand: Powerhouse Agency for Impactful Strategies
          </p>
        </div>
        <div className="flex items-center justify-center mt-20">
          <Button customStyle="mr-6" outlined hovered href="/">
            Our Services
          </Button>
          <Button outlined href="/">
            Work With Us
          </Button>
        </div>
      </div>
    </div>
  );
}

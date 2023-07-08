import React from "react";
import Image from "next/image";

// images //
import Service1 from "../../../../public/assets/images/service-1.png";
import Service2 from "../../../../public/assets/images/service-2.png";
import Service3 from "../../../../public/assets/images/service-3.png";
import Service4 from "../../../../public/assets/images/service-4.png";

const ServiceFirst = () => {
  return (
    <div className="flex items-start justify-between px-20 py-32 ring-1 rounded-card ring-primary">
      {/* text */}
      <div className="text-left">
        <h2 className="pb-4 text-2xl text-primary_200">01</h2>
        <h3 className="pb-6 text-xl text-primary">Pre-processing</h3>
        <p className="font-medium pr-60 text-gray text-m leading-1">
          Your data is organized, cleaned, and given context as we interpret it.
          Your data gains meaning through the semantic layer, making it simpler
          for business users to comprehend. We assist you in gaining a clear
          understanding of what it signifies so you can take action.
        </p>
      </div>
      {/* img */}
      <Image src={Service1} alt="Service-img" width={"460"} height={"560"} />
    </div>
  );
};
const ServiceSecond = () => {
  return (
    <div className="flex items-start justify-between px-20 py-32 ring-1 rounded-card ring-primary">
      {/* text */}
      <div className="text-left">
        <h2 className="pb-4 text-2xl text-primary_200">02</h2>
        <h3 className="pb-6 text-xl text-primary">Pre-processing</h3>
        <p className="font-medium pr-60 text-gray text-m leading-1">
          Your data is organized, cleaned, and given context as we interpret it.
          Your data gains meaning through the semantic layer, making it simpler
          for business users to comprehend. We assist you in gaining a clear
          understanding of what it signifies so you can take action.
        </p>
      </div>
      {/* img */}
      <Image src={Service2} alt="Service-img" width={"460"} height={"560"} />
    </div>
  );
};
const ServiceThird = () => {
  return (
    <div className="relative flex items-start justify-between px-20 py-32 ring-1 rounded-card ring-primary">
      {/* text */}
      <div className="text-left">
        <h2 className="pb-4 text-2xl text-primary_200">03</h2>
        <h3 className="pb-6 text-xl leading-none text-primary">
          Identify & <br /> automate
        </h3>
        <p className="font-medium pr-60 text-gray text-m leading-1">
          Explore your customer segments and automate e-mail marketing flows
          easily. Understand deeply why customers abandon shopping carts and
          find ways to attract them. Predict your future sales and identify
          payment cycles.
        </p>
      </div>
      {/* img */}
      <Image src={Service3} alt="Service-img" width={"460"} height={"560"} />
    </div>
  );
};
const ServiceFourth = () => {
  return (
    <div
      className={` flex items-start justify-between px-20 py-32 top-10 ring-1 rounded-card ring-primary`}
    >
      {/* text */}
      <div className="text-left">
        <h2 className="pb-4 text-2xl text-primary_200">04</h2>
        <h3 className="pb-6 text-xl text-primary">Pre-processing</h3>
        <p className="font-medium pr-60 text-gray text-m leading-1">
          Your data is organized, cleaned, and given context as we interpret it.
          Your data gains meaning through the semantic layer, making it simpler
          for business users to comprehend. We assist you in gaining a clear
          understanding of what it signifies so you can take action.
        </p>
      </div>
      {/* img */}
      <Image src={Service4} alt="Service-img" width={"460"} height={"560"} />
    </div>
  );
};

const Services = () => {
  return (
    <section className="pt-32">
      <ServiceFourth />
      {/* <ServiceThird /> */}
      {/* <ServiceSecond /> */}
      {/* <ServiceFirst /> */}
    </section>
  );
};

export default Services;

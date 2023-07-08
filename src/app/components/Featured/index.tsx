import React from "react";
import Image from "next/image";

// import images //
import CodeLab from "../../../../public/assets/images/Code-Lab.png";
import Atica from "../../../../public/assets/images/Atica.svg";
import Aven from "../../../../public/assets/images/Aven.png";
import Treva from "../../../../public/assets/images/Treva.png";
import FoxHub from "../../../../public/assets/images/Fox-Hub.png";

const Featured = () => {
  return (
    <section className="w-full py-32">
      <h3 className="pb-12 font-medium text-center text-m text-primary">
        Trusted by Top-tier product companies
      </h3>
      <div className="flex items-center justify-between">
        <Image
          quality={100}
          src={CodeLab}
          alt="codeLub"
          width={"250"}
          height={"100"}
        />
        <Image
          quality={100}
          src={Treva}
          alt="codeHub"
          width={"250"}
          height={"100"}
        />
        <Image
          quality={100}
          src={Atica}
          alt="codeHub"
          width={"100"}
          height={"60"}
        />
        <Image
          quality={100}
          src={FoxHub}
          alt="codeHub"
          width={"250"}
          height={"100"}
        />
        <Image
          quality={100}
          src={Aven}
          alt="codeHub"
          width={"250"}
          height={"100"}
        />
      </div>
    </section>
  );
};

export default Featured;

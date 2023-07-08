"use client";

import React from "react";
import NonSkewImage from "../../../../public/assets/images/animated-img.png";
import SkewImage from "../../../../public/assets/images/animated-skew.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const animatedImgVariants: Variants = {
  hide: {
    opacity: 0,
    x: -900,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};
const nonAnimatedImgVariants: Variants = {
  hide: {
    opacity: 0,
    x: -900,
  },
  show: {
    opacity: 1,
    x: -450,
    transition: {
      duration: 4,
    },
  },
};

const AnimatedImage = () => {
  return (
    <section className="pt-20">
      {/* <motion.div
        className="flex justify-center"
        initial="show"
        whileInView="hide"
        exit="show"
        variants={nonAnimatedImgVariants}
      >
        <Image src={SkewImage} quality={100} alt="img" height={"650"} />
      </motion.div> */}
      <motion.div
        className="flex justify-center"
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={animatedImgVariants}
      >
        <Image src={NonSkewImage} quality={100} alt="img" height={"650"} />
      </motion.div>
    </section>
  );
};

export default AnimatedImage;

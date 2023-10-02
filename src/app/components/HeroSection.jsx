"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import ComputerCanvas from "./3d-objects/HeroCanvas";

const HeroSection = () => {
  return (
    <section className=" h-[80vh] lg:h-full lg:py-16 px-4">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-evenly w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" w-full text-center lg:text-left justify-self-start max-w-md">
          <h1 className="text-white mb-4 text-4xl lg:text-5xl  lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <div className="text-3xl">
              <TypeAnimation
                sequence={[
                  "Judy",
                  1000,
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-base lg:text-lg mb-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
          <div>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full lg:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-[300px] w-[400px] mt-4 lg:mt-0">
          <ComputerCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

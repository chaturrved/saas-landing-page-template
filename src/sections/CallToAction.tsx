"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);


  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title mt-5">Sign up for free today</h2>
          <p className="section-description mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
          <div className="flex gap-1 items-center justify-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn More</span>
              <ArrowIcon className="w-5 h-5" />
            </button>
          </div>
          <motion.img
            src={starImage.src}
            alt="Star image"
            width={360}
            className="hidden md:block absolute -left-[350px] -top-[137px]" style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring image"
            width={360}
            className="hidden md:block absolute -right-[331px] -top-[19px]"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section >
  );
};

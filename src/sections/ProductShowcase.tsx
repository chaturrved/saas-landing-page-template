"use client";
import productImage from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ProductShowcase = () => {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);


  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h1 className="mt-5 section-title">A more effective way to track progress</h1>
          <p className="mt-5 section-description">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
        </div>
        <div className="relative">
          <Image src={productImage} alt='Product image' className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt='Pyramid image'
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt='Tube image'
            width={262}
            height={262}
            className="hidden md:block absolute -left-36 bottom-24"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};

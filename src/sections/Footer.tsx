import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialLinkedIn from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-sm text-[#BCBCBC] text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute ">
          <Image src={logo} alt="Logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center ">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <SocialInsta />
          <SocialYoutube />
          <SocialX />
          <SocialLinkedIn />
          <SocialPin />
        </div>
        <p className="mt-6">&copy; 2024 Innov, Inc. All rights reserved.</p>
      </div>
    </footer >
  );
};

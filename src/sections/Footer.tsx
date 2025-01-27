import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className='inline-flex relative before:content-[""] before:top-1 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute'>
          <Image src={logo} alt="" height={40} className="relative" />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a >About</a>
          <a >Features</a>
          <a >Customers</a>
          <a >Pricing</a>
          <a >Help</a>
          <a >Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6 mb-3">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <a href='https://stowers.dev' target='_blank' className="cursor-pointer">stowers.dev</a>
      </div>
    </footer>
  );
};

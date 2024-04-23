// import styles from "../style";
// import { logo } from "../assets";
import { socialMedia } from "../constants/constant";
import Image from "next/image";

const Footer = () => (
  <section className="flex justify-center items-center sm:py-16 py-6 flex-col bg-black">

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] ml-10 text-white">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mr-10 mt-6">
        {socialMedia.map((social, index) => (
          <Image
            key={index}
            src={social.icon}
            alt={social.name}
            width={32}
            height={32}
            className="mx-2"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;

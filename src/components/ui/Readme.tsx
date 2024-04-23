// import styles from "../style";
"use client"
import  arrowUp  from "./ui/assets/arrow-up.svg";
import Image from 'next/image'

const GetStarted = () => (
  <div className={`flex justify-center items-center w-[200px] h-[40px] rounded-full  p-[2px] cursor-pointer`}>
    {/* <div className={`flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full`}> */}
      <div className={`flex justify-center items-start flex-row`}>
        <p className="font-poppins font-medium text-[30px] leading-[23.4px]">
          <span className="text-gradient ">Read More</span>
        </p>
      </div>
      {/* <Image src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" /> */}
    {/* </div> */}
  </div>
);

export default GetStarted;

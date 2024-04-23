"use client"
import Image from 'next/image'
import galaxy from './assets/galaxy.webp'
import GetStarted from './Readme'

const Middle = () => {
  return (
    <div id="home" className={`flex md:flex-row flex-col sm:px-16  `}>
      <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16  px-6`}>


        <div className="flex flex-row justify-between items-center w-full pl-36 ">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] pl-36 text-white ss:leading-[100.8px] leading-[75px] w-full">
          LLM.
        </h1>
        <p className="font-poppins font-semibold ss:text-[68px] text-[20px] pl-36 text-white ss:leading-[100.8px] leading-[75px] w-full">
        Real-time Retrieval Argumentation for Large Language Models
        </p>
        <div className={`ss:hidden flex justify-center pl-[340px] pt-8  items-center`}>
        <GetStarted />
      </div>
      </div>

      <div className={`flex-1 flex mr-20 justify-center items-center md:my-0 my-10 pr-24 relative`}>
      <Image src={galaxy} alt="billing" className=" w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}  
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </div>
  );
};

export default Middle;

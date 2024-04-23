// import { quotes } from "../assets";
import Image from "next/image";

const BlogCard = ( {...data }) => (
  <div className="flex justify-between flex-col px-16 py-12 rounded-[20px] mx-24  max-w-[480px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {data.content}
    </p>

    <div className="flex flex-row">
      <Image src={data.img} alt={data.name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {data.name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {data.title}
        </p>
      </div>
    </div>
  </div>
);


export default BlogCard;

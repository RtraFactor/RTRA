"use client";
import { blogdata } from "../constants/constant";
import Image from "next/image";
import BlogCard from "./BlogCard";

const Blog = () => (
    <div className="flex justify-center items-center my-8 bg-black">
        <div className="flex justify-center items-center flex-wrap w-full">
                <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                    {
                        blogdata.map((data, index) => (
                            <BlogCard key={index} {...data} />
                        ))
                    }
                </div>
        </div>
    </div>
);

export default Blog;

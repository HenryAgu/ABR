import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const AbrCategories = () => {
  return (
    <section className="container mx-auto w-full py-5 lg:py-10">
      <div className="bg-[#F0E4FF] p-4 mx-5 lg:mx-15 mb-10">
        <p className="font-extrabold text-lg lg:text-2xl text-abr-dark-500">
          LISTEN BY ABR CATEGORIES
        </p>
      </div>
      <div className="px-5 lg:px-15 pt-5 flex lg:flex-row flex-col items-center gap-x-3.5 justify-between">
        <div className="flex gap-x-0.5">
          <span className="font-bold text-abr-red-500">|</span>
          <p className="text-lg lg:text-xl font-bold text-abr-gray-500">
            News & Storytelling
          </p>
        </div>
        <Link
          href=""
          className="flex items-center border border-[#9747FF] text-[#9747FF] rounded-[22px] py-2.5 px-4"
        >
          <span className="text-[15px] font-medium">View all</span>
          <IoIosArrowForward />
        </Link>
      </div>
    </section>
  );
};

export default AbrCategories;

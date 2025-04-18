import Image from "next/image";
import React from "react";

const images:string[] = [
  "/images/Featured1.png",
  "/images/Featured2.png",
  "/images/Featured3.png",
  "/images/Featured1.png",
  "/images/Featured2.png",
  "/images/Featured3.png",
];

const Trending = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto w-full px-5 lg:px-15 py-5 lg:py-10">
        <h4 className="font-bold text-xl lg:text-2xl text-abr-dark-500">
          Trending this week
        </h4>
        <div className="flex gap-x-0.5">
          <span className="font-bold text-abr-red-500">|</span>
          <p className="text-sm lg:text-base font-semibold text-abr-gray-500">
            Featured Podcasts
          </p>
        </div>
        <div className="mt-10 flex gap-x-5 overflow-x-auto">
          {[...images].map((src, index) => (
            <div className="max-w-[288px] shrink-0" key={index}>
              <Image
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                width={288}
                height={424}
                className="max-w-[288px] h-[424px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;

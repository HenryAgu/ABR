import Image from "next/image";
import Link from "next/link";
import React from "react";

type NewPods = {
  image: string;
  date: string;
  time: number; // in minutes
  title: string;
  path: string;
};

const newPods: NewPods[] = [
  {
    image: "/images/newly-added.png",
    date: "AUG 29, 2023",
    time: 45,
    title: "Relationship Button - Starting Afresh as a Widow",
    path: "",
  },
  {
    image: "/images/newly-added.png",
    date: "AUG 29, 2023",
    time: 45,
    title: "Employee Well-being: Prioritising Mental Health in the Workplace",
    path: "",
  },
  {
    image: "/images/newly-added.png",
    date: "AUG 29, 2023",
    time: 45,
    title: "Relationship Button - Starting Afresh as a Widow",
    path: "",
  },
  {
    image: "/images/newly-added.png",
    date: "AUG 29, 2023",
    time: 45,
    title: "Relationship Button - Starting Afresh as a Widow",
    path: "",
  },
  {
    image: "/images/newly-added.png",
    date: "AUG 29, 2023",
    time: 45,
    title: "Relationship Button - Starting Afresh as a Widow",
    path: "",
  },
  {
    image: "/images/newly-added.png",
    date: "AUG 29, 2023",
    time: 45,
    title: "Employee Well-being: Prioritising Mental Health in the Workplace",
    path: "",
  },
  {
    image: "/images/newly-added.png",
    date: "AUG 29, 2023",
    time: 45,
    title: "Relationship Button - Starting Afresh as a Widow",
    path: "",
  },
];

const NewlyAdded = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto w-full px-5 lg:px-15 py-5 lg:py-10">
        <h4 className="font-bold text-xl lg:text-2xl text-abr-dark-500">
          Newly added episodes
        </h4>
        <div className="mt-10 flex gap-x-5 overflow-x-auto">
          {newPods.map((item, index) => (
            <div
              className="flex flex-col gap-y-2.5 shrink-0 max-w-[238px]"
              key={index}
            >
              <Image
                src={item.image}
                width={238}
                height={187}
                alt="newly_added_image"
                className="w-full h-[187px]"
              />
              <div className="flex items-center gap-x-2 text-[13px] font-bold text-abr-gray-200">
                <span>{item.date}</span>
                <span>.</span>
                <span>{item.time} MINS</span>
              </div>
              <Link
                href={item.path}
                className="line-clamp-2 text-abr-dark-500 font-bold text-base leading-5 transition-all duration-200 ease-in-out hover:underline"
              >
                {item.title}
              </Link>
              <div className="flex items-center-safe gap-x-3">
                <Link
                  href=""
                  className="text-abr-dark-500 font-medium text-[13px]"
                >
                  More Episodes
                </Link>
                <div className="flex items-center-safe gap-x-2">
                  <button className="cursor-pointer">
                    <Image
                      src="/images/share.svg"
                      alt="share_icon"
                      width={30}
                      height={30}
                      className="w-7.5 h-7.5"
                    />
                  </button>
                  <button className="cursor-pointer">
                    <Image
                      src="/images/gift.svg"
                      alt="gift_icon"
                      width={30}
                      height={30}
                      className="w-7.5 h-7.5"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewlyAdded;

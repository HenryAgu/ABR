"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";

interface NavMenu {
  title: string;
  icon?: string;
  path: string;
}

const subMenu: NavMenu[] = [
  {
    icon: "/images/book.svg",
    path: "",
    title: "Latest News",
  },
  {
    icon: "/images/mic.svg",
    path: "",
    title: "New Episodes",
  },
  {
    icon: "/images/services.svg",
    path: "",
    title: "Our Services",
  },
  {
    icon: "/images/podcast.svg",
    path: "",
    title: "All Podcasts",
  },
];

const navMenu: NavMenu[] = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "company",
    path: "/company",
  },
  {
    title: "contact us",
    path: "/contact",
  },
  {
    title: "resources",
    path: "/resources",
  },
  {
    title: "contact us",
    path: "/path",
  },
  {
    title: "advertise",
    path: "/advertise",
  },
];

const Navbar = () => {
  const logo = "/images/logo.svg";
  const searchIcon = "/images/search.svg";
  const playIcon = "/images/play.svg";
  const calenderIcon = "/images/calender.svg";

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsExiting(false);
    }, 500);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 bg-abr-white-150 z-50">
      <div className="container mx-auto w-full  p-5 lg:px-15 py-5 flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="logo_image"
            width={108}
            height={51}
            className="w-20 h-[42px] lg:w-[108px] lg:h-[51px]"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-x-10">
          <ul className="flex items-center gap-x-10">
            {navMenu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="capitalize text-[15px] flex items-center gap-x-1 font-bold text-abr-dark-500"
                >
                  {item.title}
                  {item.title === "company" ? (
                    <IoIosArrowDown className="text-[15px] font-bold text-abr-dark-500" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
          <div className="bg-[#00000052] flex items-center gap-x-2 p-3.5 rounded-4xl">
            <Image
              src={searchIcon}
              alt="search_icon"
              width={13}
              height={12}
              className="w-[13px] h-3"
            />
            <input
              type="text"
              className="border-transparent outline-transparent text-sm text-white font-medium"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="block lg:hidden">
          <button type="button" onClick={() => setIsMenuOpen(true)}>
            <CiMenuFries className="text-lg font-normal text-abr-dark-500" />
          </button>
        </div>
        {isMenuOpen && (
          <div
            className={`flex flex-col p-5 bg-abr-white-150 text-white absolute top-0 h-screen w-full right-0 animate-slideDown ${
              isExiting ? "animate-slideUp" : "animate-slideDown"
            }`}
          >
            <button
              className="w-fit absolute block lg:hidden right-5"
              onClick={handleClose}
            >
              <IoMdClose className=" text-2xl font-normal text-abr-dark-500" />
            </button>
            <div className="mt-20">
              <ul className="flex flex-col gap-y-3.5">
                {navMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-sm text-abr-dark-500 uppercase border-b border-black font-bold"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <ul className="flex flex-col gap-y-3.5">
                {subMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-sm text-abr-dark-500 uppercase border-b border-black font-bold"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="hidden lg:flex container mx-auto w-full">
        <div className="basis-[40%] h-fit relative">
          <Image
            src="/images/background.png"
            alt="background_image"
            width={608}
            height={72}
            className="w-full h-[72px] object-cover relative"
          />
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <div className="flex  gap-x-3.5">
              <Image
                src={playIcon}
                alt="play_icon"
                width={46}
                height={46}
                className="w-11.5 h-11.5"
              />
              <div className="flex flex-col">
                <h4 className="text-lg font-extrabold text-white">
                  Listen to ABR Live Radio
                </h4>
                <p className="text-[13px] font-bold text-abr-green-100">
                  ON AIR
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <Image
                src={calenderIcon}
                alt="calender_icon"
                width={18}
                height={18}
                className="h-4.5 w-4.5"
              />
              <p className="text-[13px] text-white font-semibold">
                View schedules
              </p>
            </div>
          </div>
        </div>
        <div className="basis-[60%] bg-abr-dark-550 hidden lg:flex gap-x-5 items-center py-5 px-14 justify-end text-white">
          |
          {subMenu.map((item, index) => (
            <Link
              href={item.path}
              className="flex items-center gap-x-1.5 group transition duration-200 ease-in"
              key={index}
            >
              <Image
                src={item.icon!}
                alt={`icon-${item.title}`}
                width={18}
                height={18}
                className="h-4.5 w-4.5"
              />
              <p className="text-[15px] text-white font-bold group-hover:underline">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

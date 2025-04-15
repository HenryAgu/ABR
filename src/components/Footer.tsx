import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavMenu {
  title: string;
  path: string;
}

interface SocialMenu {
  image: string;
  path: string;
}

const navMenu: NavMenu[] = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about us",
    path: "/about",
  },
  {
    title: "contact us",
    path: "/contact",
  },
  {
    title: "all podcast",
    path: "/podcast",
  },
  {
    title: "advertise",
    path: "/advertise",
  },
  {
    title: "resources",
    path: "/resources",
  },
];

const socialMenu: SocialMenu[] = [
  {
    image: "/images/instagram.svg",
    path: "",
  },
  {
    image: "/images/facebook.svg",
    path: "",
  },
  {
    image: "/images/twitter.svg",
    path: "",
  },
  {
    image: "/images/map.svg",
    path: "",
  },
  {
    image: "/images/linkedin.svg",
    path: "",
  },
];

const Footer = () => {
  const darkLogo = "/images/dark-logo.svg";
  return (
    <footer className="bg-abr-dark-500 px-5 lg:px-15 py-7 flex flex-col lg:items-start items-center">
      <Image
        src={darkLogo}
        alt="footer_logo"
        width={140}
        height={64}
        className="lg:w-[140px] lg:h-[64px] w-20 h-[42px]"
      />
      <div className="py-10 flex flex-col lg:flex-row items-center gap-3.5">
        {navMenu.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="uppercase text-sm lg:text-base font-bold text-abr-gray-100 transition-colors duration-200 ease-in-out hover:text-white"
          >
            <span className="pr-2">{item.title}</span>
            <span className="hidden lg:block">|</span>
          </Link>
        ))}

        <div className="flex lg:flex-row flex-col items-center gap-3.5 ml-3.5">
          <span className="uppercase text-sm lg:text-base font-bold text-abr-gray-100">
            CONNECT WITH ABR
          </span>
          <div className="flex items-center gap-x-2">
            {socialMenu.map((item, index) => (
              <Link href={item.path} key={index}>
                <Image
                  src={item.image}
                  width={24}
                  height={24}
                  alt="social_media_icon"
                  className="lg:w-6 lg:h-6 w-5 h-5"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse items-center gap-y-3 gap-x-5">
        <p className="text-white font-medium text-sm">
          © Copyright 2021. All Rights Reserved.
        </p>
        <Link href="" className="text-white font-medium text-sm hover:underline transition-all ease-in duration-200">
          Terms & conditions{" "}
        </Link>
        <Link href="" className="text-white font-medium text-sm hover:underline transition-all ease-in duration-200">
          {" "}
          Privacy policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

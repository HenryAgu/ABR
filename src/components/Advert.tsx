import Image from "next/image";
import React from "react";

const Advert = () => {
  const advert = "/images/advert.png";
  return (
    <section className="container mx-auto w-full flex justify-center items-center">
      <div className="w-full lg:w-[85%] pb-10 px-5 lg:px-0">
        <span className="flex justify-end text-[11px] font-bold text-[#5A5A5A]">
          ADVERTISEMENT
        </span>
        <Image
          src={advert}
          alt="advert"
          width={1176}
          height={206}
          className="w-full h-auto lg:h-[206px]"
        />
      </div>
    </section>
  );
};

export default Advert;

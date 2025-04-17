import Image from "next/image";
import React from "react";

const EditorsPick = () => {
  const playIcon = "/images/play.svg";
  return (
    <div className="bg-abr-gray-150">
      <div className="container mx-auto w-full px-5 lg:px-15 py-5 lg:py-10">
        <h4 className="font-bold text-xl lg:text-2xl text-abr-dark-500">
          EDITOR’S PICKS
        </h4>
        <div className="flex items-center gap-x-0.5">
          <span className="font-bold text-abr-red-500">|</span>
          <p className="text-sm lg:text-base font-semibold text-abr-gray-500">
            Featured Episodes
          </p>
        </div>
        <div className="mt-5 flex flex-col lg:flex-row gap-x-5">
          <div
            className="basis-[50%] w-full h-[561px] bg-cover bg-center flex flex-col justify-end"
            style={{ backgroundImage: "url('/images/top-pick1.png')" }}
          >
            <div className="bg-abr-overlay p-4 flex items-center gap-x-3">
              <Image
                src={playIcon}
                alt="play_icon"
                width={46}
                height={46}
                className="lg:w-11.5 w-10 lg:h-11.5 h-10"
              />
              <p className="text-white text-xl lg:text-2xl font-extrabold">
                Bridging the Financing Gap in Nigeria’s off-grid sector
              </p>
            </div>
          </div>

          <div className="basis-[50%] flex flex-col gap-y-5">
            <div className="flex lg:flex-row flex-col gap-5 h-full">
              <div className="basis-[50%] max-h-full shadow-2xl">
                <Image
                  src="/images/top-pick2.png"
                  alt="top_pick_image"
                  width={300}
                  height={288}
                  className="w-full h-[288px]"
                />
                <div className="flex gap-x-3.5 p-3.5 lg:py-3.5 relative lg:right-5">
                  <Image
                    src={playIcon}
                    alt="play_icon"
                    width={46}
                    height={46}
                    className="lg:w-11.5 w-10 lg:h-11.5 h-10"
                  />
                  <div className="flex flex-col justify-between h-28">
                    <p className="text-base lg:text-lg text-abr-dark-500 font-semibold lg:leading-6">
                      The Future oflex flex-colf Work: Embracing Remote and
                      Hybrid Workforces
                    </p>
                    <div className="flex items-end gap-x-1.5 text-xs lg:text-[13px] font-medium text-abr-dark-500">
                      <span>Sept 7, 2023</span>
                      <span>|</span>
                      <span>35 mins</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-[50%] max-h-full shadow-2xl">
                <Image
                  src="/images/top-pick3.png"
                  alt="top_pick_image"
                  width={300}
                  height={288}
                  className="w-full h-[288px]"
                />
                <div className="flex gap-x-3.5 p-3.5 lg:py-3.5 relative lg:right-5">
                  <Image
                    src={playIcon}
                    alt="play_icon"
                    width={46}
                    height={46}
                    className="lg:w-11.5 w-10 lg:h-11.5 h-10"
                  />
                  <div className="flex flex-col justify-between h-28">
                    <p className="text-base lg:text-lg text-abr-dark-500 font-semibold leading-6">
                      Compatibility in Relationship
                    </p>
                    <div className="flex items-center gap-x-1.5 text-xs lg:text-[13px] font-medium text-abr-dark-500">
                      <span>Sept 5, 2023</span>
                      <span>|</span>
                      <span>55 mins</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <span className="flex justify-end text-[11px] font-bold text-[#5A5A5A]">
                ADVERTISEMENT
              </span>
              <Image
                src="/images/advert2.png"
                alt="advert_image"
                width={635}
                height={99}
                className="w-full h-auto lg:h-[99px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;

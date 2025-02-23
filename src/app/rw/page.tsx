import React from "react";
import "./page.css";
import { getImageUrl } from "../../hooks/getImage";
import siteData from "../../data/siteData";
import Link from "next/link";

const HOME_ASSETS = "rw/home/";

const Page: React.FC = () => {
  return (
    <section className="min-w-screen relative flex min-h-screen flex-col items-center">
      {/* <video
        className="absolute left-1/2 top-1/2 z-0 hidden h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover brightness-50 lg:block"
        src={getImageUrl(HOME_ASSETS + "bg.mp4")}
        preload="auto"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
      /> */}
      <img
        className="absolute left-1/2 top-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover brightness-50"
        src={getImageUrl(HOME_ASSETS + "bg.webp")}
        alt="Background"
      />
      <div className="bg-grid absolute inset-0 z-0" />
      <div className="page-pt relative">
        <div className="text-default z-10 mt-20 flex w-full flex-col gap-5 pb-4 text-center font-medium md:mt-10">
          <img
            className="m-auto w-4/5 md:w-2/5"
            src={getImageUrl(HOME_ASSETS + "logo.webp")}
            alt="rw logo"
          />
          <div>
            <p className="not-light text-2xl font-semibold">
              A Revived Witch wiki. Long live the{" "}
              <Link
                className="text-underlined not-light"
                href={siteData.siteUrls.rw.routes.characters.url + "/1"}
              >
                Witch
              </Link>
              !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

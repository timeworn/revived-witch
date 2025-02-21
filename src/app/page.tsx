import React from "react";
import "./page.css";
import { getImageUrl } from "../hooks/getImage";
import siteData from "../data/siteData";
import Link from "next/link";

const HOME_ASSETS = "rw/home/";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="min-w-screen relative flex min-h-screen flex-col items-center">
        <video
          className="absolute left-1/2 top-1/2 z-0 hidden h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover brightness-50 lg:block"
          src={getImageUrl(HOME_ASSETS + "bg.mp4")}
          preload="auto"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        />
        <img
          className="absolute left-1/2 top-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover brightness-50 lg:hidden"
          src={getImageUrl(HOME_ASSETS + "bg.png")}
          alt="Background"
        />
        <div className="bg-grid absolute inset-0 z-0" />
        <div className="page-pt relative">
          <div className="text-default z-10 mt-20 flex w-full flex-col gap-5 pb-4 text-center font-medium md:mt-10">
            <img
              className="m-auto w-4/5 md:w-2/5"
              src={getImageUrl(HOME_ASSETS + "logo.png")}
              alt="rw logo"
            />
            <div>
              <p className="not-light text-2xl font-semibold">
                A Revived Witch wiki. Long live the{" "}
                <Link
                  className="text-underlined not-light"
                  href={siteData.siteUrls.rw.characters.url + "/1"}
                >
                  Witch
                </Link>
                !
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex min-h-screen items-center">
        <img
          className="absolute h-full w-full object-cover"
          src={getImageUrl(HOME_ASSETS + "news.png")}
        />
        <div className="z-10 m-auto py-60">
          <h1 className="text-glow m-auto text-center text-5xl font-extrabold text-white">
            News
          </h1>
          <div className="mt-10 flex flex-col gap-4">
            <p className="text-glow mx-auto w-fit px-5 py-3 text-xl font-semibold text-white">
              Nothing Yet...
            </p>
            {/* <div className="flex flex-col">
              <button className="hover:bg-slate-300 hover:bg-opacity-5">
                <div className="flex w-full justify-between gap-4 p-5">
                  <h3 className="text-white">Lorem Ipsum</h3>
                  <p className="text-right">Jan 1, 1970</p>
                </div>
                <img
                  className="bottom-full mx-auto"
                  src={getImageUrl(HOME_ASSETS + "line.png")}
                />
              </button>
            </div>
            <button className="text-default text-glow mx-auto w-fit px-5 py-3 text-2xl font-semibold">
              View More
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

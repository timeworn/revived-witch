import React from "react";
import "./page.css";
import GameItem from "./_components/GameItem";
import { getImageUrl } from "../hooks/getImage";
import siteData from "../data/siteData";
import StatItem from "./_components/StatItem";
import { FaGamepad } from "react-icons/fa6";

const siteUrls = siteData.siteUrls;

const Page: React.FC = () => {
  return (
    <div className="page-primary text-center">
      <header className="page-header">
        <div className="text-default">
          <h1>Timeworn Wiki</h1>
          <p className="text-lg">A wiki for various games.</p>
        </div>
      </header>
      <section className="mb-20">
        <h2 className="text-default mb-4 text-3xl font-bold">All Games</h2>
        <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          <GameItem
            name="Revived Witch"
            href={siteUrls.rw.url}
            src={getImageUrl("wiki/home/revived-witch.webp")}
          />
        </div>
      </section>
      <section>
        <h2 className="text-default mb-4 text-3xl font-bold">Stats</h2>
        <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          <StatItem
            name="1"
            description="Games"
            icon={<FaGamepad className="h-10 w-full" />}
          />
        </div>
      </section>
    </div>
  );
};

export default Page;

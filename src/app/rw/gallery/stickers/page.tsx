import React from "react";
import { RWStickers } from "../../../../classes/other/RWSticker";
import { Metadata } from "next";
import siteData from "../../../../data/siteData";

const stickers = RWStickers.getStickers();

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.gallery.url.stickers.name,
};

const Stickers: React.FC = () => (
  <div className="page-primary">
    <header className="page-header">
      <h1>Stickers</h1>
    </header>
    <div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {stickers.map((sticker, index) => (
          <div key={index} className="round-gray w-36 p-2">
            <img
              className="m-auto"
              src={sticker}
              alt="Sticker"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Stickers;

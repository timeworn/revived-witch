import React, { lazy } from "react";
import { RWAvatarFrame } from "../../../classes/avatar/RWAvatarFrame";
import { RWItem } from "../../../classes/item/RWItem";
import { Metadata } from "next";
import siteData from "../../../data/siteData";

const Item = lazy(() => import("../../../components/utils/Item"));

const frames = RWAvatarFrame.getAvatarFrames();

export const metadata: Metadata = {
  title: siteData.siteUrls.gallery.url.avatarFrames.name,
};

const AvatarFrames: React.FC = () => (
  <div className="page-primary">
    <header className="page-header">
      <h1>Avatar Frames</h1>
    </header>
    <div>
      <div className="prose grid max-w-full justify-center gap-5 prose-h3:mt-0 prose-p:mb-0 sm:grid-cols-3 lg:grid-cols-4">
        {frames.map((frame, key) => (
          <Item
            key={key}
            item={frame as RWItem}
            config={{ imageSize: "large" }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default AvatarFrames;

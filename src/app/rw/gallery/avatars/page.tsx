import React, { lazy } from "react";
import { RWItem } from "../../../../classes/item/RWItem";
import { RWAvatar } from "../../../../classes/avatar/RWAvatar";
import { Metadata } from "next";
import siteData from "../../../../data/siteData";

const Item = lazy(() => import("../../../../components/utils/Item"));

const avatars = RWAvatar.getAvatars();

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.gallery.routes.avatar.name,
};

const Avatars: React.FC = () => (
  <div className="page-primary">
    <header className="page-header">
      <h1>Avatars</h1>
    </header>
    <div>
      <div className="prose grid max-w-full justify-center gap-5 prose-h3:mt-0 prose-p:mb-0 sm:grid-cols-3 lg:grid-cols-5">
        {avatars.map((avatar, key) => (
          <Item
            key={key}
            item={avatar as RWItem}
            config={{ imageSize: "large" }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Avatars;

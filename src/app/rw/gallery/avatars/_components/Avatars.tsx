"use client";

import { RWItem } from "../../../../../classes/item/RWItem";
import { RWAvatar } from "../../../../../classes/avatar/RWAvatar";
import PageMaster from "../../../../../components/utils/PageMaster";
import Item, { ItemConfig } from "../../../../../components/utils/Item";

const CONFIG: ItemConfig = { imageSize: "large" };

const avatars = RWAvatar.getAvatars();

const Avatars: React.FC = () => (
  <div className="page-primary">
    <header className="page-header">
      <h1>Avatars</h1>
    </header>
    <PageMaster<RWAvatar>
      objects={avatars}
      className="prose grid max-w-full grid-cols-2 justify-center gap-5 prose-h3:mt-0 prose-p:mb-0 sm:grid-cols-3 xl:grid-cols-5"
      renderObject={(avatar) => (
        <Item key={avatar.id} item={avatar as RWItem} config={CONFIG} />
      )}
    />
  </div>
);

export default Avatars;

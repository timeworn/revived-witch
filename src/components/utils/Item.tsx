import React, { memo } from "react";
import Attributes, { AttributeSizes } from "./Attributes";
import { RWItem } from "../../classes/item/RWItem";

type Sizes = "small" | "default" | "large";

export interface ItemConfig {
  imageSize?: Sizes;
  attrSize?: AttributeSizes;
}

interface ItemProps {
  item: RWItem;
  config?: ItemConfig;
}

const imageSize = (imageSize?: Sizes) => {
  switch (imageSize ?? "default") {
    case "small":
      return "h-10";
    case "large":
      return "h-32";
    default:
      return "h-20";
  }
};

const Item: React.FC<ItemProps> = memo(({ item, config }) => {
  return (
    <div className="item-primary h-full w-full flex-col items-center">
      <h3>{item.getName()}</h3>
      <div className={`mb-2 mt-2 ${imageSize(config?.imageSize)}`}>
        <img
          className="not-prose m-auto h-full"
          src={item.getIcon()}
          alt="Item Image"
          loading="lazy"
        />
      </div>
      <Attributes
        className="grid grid-cols-2 gap-2"
        attributes={item.toString()}
        config={{ attrSize: config?.attrSize }}
      />
      <p>{item.getDescription()}</p>
    </div>
  );
});

export default Item;

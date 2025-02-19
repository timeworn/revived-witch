import React, { memo } from "react";
import { RWUniqueEquipmentItem } from "../../../../classes/item/RWUniqueEquipmentItem";
import { ItemConfig } from "../../../../components/utils/Item";
import DescriptionElement from "../../../dolls/[id]/_components/utils/DescriptionElement";

interface ItemProps {
  equipment: RWUniqueEquipmentItem;
  config?: ItemConfig;
}

const UniqueItem: React.FC<ItemProps> = memo(({ equipment, config }) => {
  const imageSize = (() => {
    switch (config?.imageSize ?? "default") {
      case "small":
        return "h-10";
      case "large":
        return "h-32";
      default:
        return "h-20";
    }
  })();

  const attrSize = (() => {
    switch (config?.attrSize ?? "default") {
      case "small":
        return "prose-p:text-sm";
      case "large":
        return "prose-p:text-lg";
      default:
        return "";
    }
  })();

  const attributes = equipment.toString();

  return (
    <div className="item-primary flex-col">
      <h3 className="self-center">{equipment.getName()}</h3>
      <p className="round-gray-light text-default self-center px-1 py-[1px]">
        Owner: {equipment.owner}
      </p>
      <div className={`mb-2 mt-2 ${imageSize} self-center`}>
        <img
          className="not-prose m-auto h-full"
          src={equipment.getIcon()}
          alt="Item Image"
          loading="lazy"
        />
      </div>
      {attributes.length > 0 && (
        <div
          className={`text-default mt-2 grid w-full grid-cols-2 gap-2 ${attrSize}`}
        >
          {attributes.map((attribute, index) => (
            <p key={index} className="round-gray-light p-1">
              {attribute}
            </p>
          ))}
        </div>
      )}
      <p>{DescriptionElement(equipment.effect)}</p>
      <p>{DescriptionElement(equipment.evolution)}</p>
      <p>{equipment.description}</p>
    </div>
  );
});

export default UniqueItem;

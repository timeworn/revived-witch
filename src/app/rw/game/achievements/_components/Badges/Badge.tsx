import React, { memo } from "react";
import { RWBadge } from "../../../../../../classes/task/RWBadge";
import Attributes, {
  AttributeSizes,
} from "../../../../../../components/utils/Attributes";

interface MissionProps {
  badge: RWBadge;
  config?: {
    attrSize?: AttributeSizes;
  };
}

const Badge: React.FC<MissionProps> = memo(({ badge, config }) => (
  <div className="item-primary-basic h-full w-full gap-4 p-4">
    <div className="w-16">
      <img
        className="not-prose aspect-auto w-full"
        src={badge.getIcon()}
        alt="Badge Icon"
        loading="lazy"
      />
    </div>
    <div className="my-auto flex w-full flex-col">
      <h3>{badge.getName()}</h3>
      <Attributes
        attributes={badge.toString()}
        config={{ attrSize: config?.attrSize }}
      />
    </div>
  </div>
));

export default Badge;

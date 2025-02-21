import React, { memo } from "react";
import { RWDailyMission } from "../../../../../../classes/task/RWDailyMission";
import Attributes, {
  AttributesConfig,
} from "../../../../../../components/utils/Attributes";

interface MissionProps {
  mission: RWDailyMission;
  config?: AttributesConfig;
}

const Mission: React.FC<MissionProps> = memo(({ mission, config }) => {
  return (
    <div className="item-primary h-full w-full flex-col items-start">
      <h3>{mission.getName()}</h3>
      <Attributes
        className="flex flex-col gap-2"
        attributes={mission.toString()}
        config={{ attrSize: config?.attrSize }}
      />
      <p>{mission.getInstruction()}</p>
    </div>
  );
});

export default Mission;

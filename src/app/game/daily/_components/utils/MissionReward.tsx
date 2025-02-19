import React, { memo } from "react";
import Reward from "../../../../../components/utils/Reward";
import { RWDailyMissionAward } from "../../../../../classes/task/RWDailyMissionAward";

const MissionReward: React.FC<{ missionReward: RWDailyMissionAward }> = memo(
  ({ missionReward }) => {
    const reward = missionReward.getReward();
    return (
      <div className="prose flex flex-col items-center gap-1 text-center prose-h3:mb-0 prose-h3:mt-0 prose-p:mb-0 prose-p:mt-0">
        <h4 className="round-gray w-full px-2 py-1">
          {missionReward.points} Points
        </h4>
        <div className="flex flex-row gap-2">
          <Reward icon={reward.item.getIcon()} amount={reward.amount} />
        </div>
      </div>
    );
  },
);

export default MissionReward;

import React, { memo } from "react";
import { RWAchievement } from "../../../../../classes/task/RWAchievement";
import Attributes, {
  AttributesConfig,
} from "../../../../../components/utils/Attributes";
import Reward from "../../../../../components/utils/Reward";

interface AchievementProps {
  achievement: RWAchievement;
  config?: AttributesConfig;
}

const Achievement: React.FC<AchievementProps> = memo(
  ({ achievement, config }) => {
    return (
      <div className="item-primary h-full w-full flex-col items-start">
        <h3>{achievement.getName()}</h3>
        <h4 className="text-special">{achievement.getGroup()}</h4>
        <Attributes
          className="flex flex-col gap-2"
          attributes={achievement.toString()}
          config={config}
        />
        <div className="mt-1 flex w-full flex-row justify-center gap-4">
          {achievement.rewards &&
            achievement
              .getRewards()
              .map((reward, key) => (
                <Reward
                  key={key}
                  name={reward.item.getName()}
                  icon={reward.item.getIcon()}
                  amount={reward.amount}
                />
              ))}
        </div>
      </div>
    );
  },
);

export default Achievement;

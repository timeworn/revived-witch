import React from "react";
import { RWLevelReward } from "../../../../../classes/task/RWLevelReward";
import Attributes from "../../../../../components/utils/Attributes";
import Reward from "../../../../../components/utils/Reward";

const levelRewards = RWLevelReward.getLevelRewards();

const LevelRewards: React.FC = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-6 prose-p:mb-0 prose-p:mt-0">
        {levelRewards.map((object, key) => {
          const reward = object.getReward();
          return (
            <div className="flex flex-col gap-2" key={key}>
              <Attributes
                className="flex flex-col gap-2"
                attributes={object.toString()}
                config={{ attrSize: "small" }}
              />
              <div className="flex w-full flex-row justify-center gap-4">
                <Reward
                  name={reward.item.getName()}
                  icon={reward.item.getIcon()}
                  amount={reward.amount}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LevelRewards;

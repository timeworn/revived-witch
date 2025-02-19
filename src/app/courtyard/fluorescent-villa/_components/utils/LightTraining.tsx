import React, { memo } from "react";
import { RWLightTraining } from "../../../../classes/yard/RWLightTraining";

interface LightTrainingProps {
  training: RWLightTraining;
}

const LightTraining: React.FC<LightTrainingProps> = memo(({ training }) => {
  const itemNeeded = training.getItemNeeded();

  return (
    <div className="item-primary h-full w-full justify-between">
      <div className="flex flex-col items-start">
        <h4>{training.getName()}</h4>
        <p>
          Training Time:{" "}
          <span className="text-special">{training.timeToString()}</span>
        </p>
        <p>
          Exp: <span className="text-special">{training.expGain}</span>
        </p>
        <p>
          Cost: <span className="text-special">{itemNeeded.amount}</span>
        </p>
      </div>
      <div className="my-auto ml-auto h-20">
        <img
          className="not-prose m-auto h-full"
          src={itemNeeded.item.getIcon()}
          alt="Item Image"
          loading="lazy"
        />
      </div>
    </div>
  );
});

export default LightTraining;

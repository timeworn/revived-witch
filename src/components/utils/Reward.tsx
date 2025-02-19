import React, { memo } from "react";

interface RewardProps {
  name?: string;
  icon?: string;
  amount: number;
}

const Reward: React.FC<RewardProps> = memo(({ name, icon, amount }) => (
  <div className="flex flex-col text-center">
    <div className="flex h-14 w-14 justify-center">
      <img
        className="not-prose aspect-auto h-full"
        src={icon}
        alt="Reward Image"
        title={name}
        loading="lazy"
      />
    </div>
    <p>x{amount}</p>
  </div>
));

export default Reward;

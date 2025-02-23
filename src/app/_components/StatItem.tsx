import React, { ReactNode } from "react";

interface StatItemProps {
  name: string;
  description: string;
  icon?: ReactNode;
}

const StatItem: React.FC<StatItemProps> = (props) => {
  return (
    <div className="round-gray h-64 p-10 text-center">
      <div className="mb-3">{props.icon}</div>
      <h2 className="text-default mb-2 text-3xl font-bold">{props.name}</h2>
      <p className="text-default text-lg">{props.description}</p>
    </div>
  );
};

export default StatItem;

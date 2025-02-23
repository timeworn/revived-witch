import Link from "next/link";
import React from "react";

interface GameItemProps {
  name: string;
  src?: string;
  href: string;
}

const GameItem: React.FC<GameItemProps> = (props) => {
  return (
    <Link className="mb-4" href={props.href}>
      <img
        className="round-gray h-full w-full object-cover"
        src={props.src}
        alt={props.name}
      />
      <p className="text-default text-lg font-bold">{props.name}</p>
    </Link>
  );
};

export default GameItem;

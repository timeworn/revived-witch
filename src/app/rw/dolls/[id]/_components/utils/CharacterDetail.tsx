import React from "react";

const CharacterDetail: React.FC<{
  label: string;
  value: string | undefined;
}> = ({ label, value }) => (
  <div className="mt-2 flex w-full flex-row justify-between sm:w-1/2">
    <p className="font-bold sm:w-1/3">{label}</p>
    <p className="text-title sm:w-2/3">{value}</p>
  </div>
);

export default CharacterDetail;

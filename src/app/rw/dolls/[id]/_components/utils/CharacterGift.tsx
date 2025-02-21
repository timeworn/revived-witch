import React from "react";
import { ICharacterGift } from "../../../../../../interfaces/CharacterInterfaces";

const CharacterGift: React.FC<{ gift: ICharacterGift }> = ({ gift }) => {
  const attributes = [];
  attributes.push(`+${gift.favour} Intimacy`);
  attributes.push(`+${gift.exfavour} Bonus`);

  return (
    <div className="item-primary flex-col items-center">
      <h3>{gift.name}</h3>
      <div className={`mb-2 mt-2`}>
        <img
          className="not-prose m-auto w-24 lg:w-3/4"
          src={gift.icon}
          alt="Item Image"
          loading="lazy"
        />
      </div>
      {attributes.length > 0 && (
        <div className={`text-default mt-2 grid w-full grid-cols-2 gap-2`}>
          {attributes.map((attribute, index) => (
            <p key={index} className="round-gray-light p-1">
              {attribute}
            </p>
          ))}
        </div>
      )}
      <p>{gift.description}</p>
    </div>
  );
};

export default CharacterGift;

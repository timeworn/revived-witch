import React from "react";
import { ICharacterSkin } from "../../../../../interfaces/CharacterInterfaces";

const CharacterAnimation: React.FC<{
  skin: ICharacterSkin;
  skinIndex: number;
  handleSkin: any;
}> = ({ skin, skinIndex, handleSkin }) => (
  <div className="flex flex-col gap-2">
    <p>{skin.name}</p>
    <img src={skin.square} alt="Skin Image" loading="lazy" />
    <div className="flex flex-row justify-center gap-2">
      <button
        className="btn-round-gray btn-anim btn-size-sm text-default"
        onClick={() => handleSkin("image", skinIndex)}
      >
        Image
      </button>
      <button
        className="btn-round-gray btn-anim btn-size-sm text-default"
        onClick={() => handleSkin("l2d", skinIndex)}
        disabled={!skin.l2d}
      >
        L2D
      </button>
    </div>
  </div>
);

export default CharacterAnimation;

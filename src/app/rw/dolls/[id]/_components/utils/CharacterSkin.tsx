import React from "react";
import {
  ICharacterSkin,
  SKIN_TYPES,
} from "../../../../../../interfaces/CharacterInterfaces";

const CharacterSkin: React.FC<{
  skin: ICharacterSkin;
  skinIndex: number;
  handleSkin: (index: number, skinType: SKIN_TYPES) => void;
}> = ({ skin, skinIndex, handleSkin }) => (
  <div>
    <div className="round-gray flex flex-col gap-2 p-4">
      <p>{skin.name}</p>
      <img className="m-auto h-40" src={skin.square} loading="lazy" />
      <div className="flex flex-row justify-center gap-2">
        <button
          className="btn-main"
          onClick={() => handleSkin(skinIndex, SKIN_TYPES.IMAGE)}
        >
          Image
        </button>
        <button
          className="btn-main"
          onClick={() => handleSkin(skinIndex, SKIN_TYPES.L2D)}
          disabled={!skin.l2d.path}
        >
          L2D
        </button>
      </div>
      <p>{skin.description}</p>
    </div>
  </div>
);

export default CharacterSkin;

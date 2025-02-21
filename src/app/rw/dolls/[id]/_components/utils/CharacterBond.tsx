import React from "react";
import DescriptionElement from "./DescriptionElement";
import { ICharacterBond } from "../../../../../../interfaces/CharacterInterfaces";

const CharacterBond: React.FC<{ bond: ICharacterBond }> = ({ bond }) => (
  <tr>
    <td>{bond.level}</td>
    <td>{DescriptionElement(bond.reward)}</td>
    <td>{bond.exp}</td>
  </tr>
);

export default CharacterBond;

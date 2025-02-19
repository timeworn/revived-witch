import React, { memo } from "react";
import CharacterDetail from "./CharacterDetail";
import CharacterBackstory from "./CharacterBackstory";
import CharacterSkill from "./CharacterSkill";
import CharacterBond from "./CharacterBond";
import CharacterEquipment from "./CharacterEquipment";
import CharacterStats from "./CharacterStats";
import CharacterSkin from "./CharacterSkin";
import CharacterAffiliation from "./CharacterAffiliation";
import CharacterVoiceline from "./CharacterVoiceline";
import CharacterYardSkill from "./CharacterYardSkill";
import CharacterGift from "./CharacterGift";
import { SKIN_TYPES } from "../../../../../interfaces/CharacterInterfaces";
import { RWCharacter } from "../../../../../classes/character/RWCharacter";

interface CharacterMarkdownProps {
  character: RWCharacter;
  profileInfo: { label: string; value?: string }[];
  basicInfo: { label: string; value?: string }[];
  handleSkin: (index: number, skinType: SKIN_TYPES) => void;
}

const CharacterMarkdown: React.FC<CharacterMarkdownProps> = memo(
  ({ character, profileInfo, basicInfo, handleSkin }) => {
    console.log(character);

    return (
      <>
        <div id="profile" className="prose-h2:mb-0">
          <h2 className="text-title">Profile</h2>
          <div className="not-prose flex flex-row flex-wrap">
            {profileInfo.map((detail, index) => (
              <CharacterDetail
                key={index}
                label={detail.label}
                value={detail.value}
              />
            ))}
          </div>
        </div>
        <hr />
        <div className="prose-h2:mb-0">
          <h2 className="text-title">Basic Info</h2>
          <div className="not-prose flex flex-row flex-wrap">
            {basicInfo.map((detail, index) => (
              <CharacterDetail
                key={index}
                label={detail.label}
                value={detail.value}
              />
            ))}
          </div>
        </div>
        <hr />
        <div id="affiliation">
          <h2 className="text-title">Affiliation</h2>
          <CharacterAffiliation character={character} />
        </div>
        <hr />
        <div id="backstories">
          <h2 className="text-title">Backstories</h2>
          <div className="prose-p:mt-0">
            {character.backstories.map((backstory, index) => (
              <CharacterBackstory
                key={index}
                backstory={backstory}
                index={index}
              />
            ))}
          </div>
        </div>
        <hr />
        {character.equipment.name && (
          <CharacterEquipment id="equipment" character={character} />
        )}
        <div id="skills">
          <h2 className="text-title">Skills</h2>
          <div className="flex flex-col gap-2">
            {character.skills.map((skill, index) => (
              <CharacterSkill key={index} skill={skill} />
            ))}
          </div>
        </div>
        <hr />
        <div id="stats">
          <h2 className="text-title">Stats</h2>
          <CharacterStats character={character} />
        </div>
        <hr />
        <div id="bond">
          <h2 className="text-title">Bond</h2>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th>Level</th>
                <th>Reward</th>
                <th>Exp</th>
              </tr>
            </thead>
            <tbody>
              {character.bonds.map((bond, index) => (
                <CharacterBond key={index} bond={bond} />
              ))}
            </tbody>
          </table>
        </div>
        <hr />
        <div>
          <h2 className="text-title">Gifts</h2>
          <div className="grid justify-center gap-6 prose-p:mb-0 prose-p:mt-0 sm:grid-cols-3 md:justify-normal lg:grid-cols-4">
            {character.gifts.map((gift, index) => (
              <CharacterGift key={index} gift={gift} />
            ))}
          </div>
        </div>
        <hr />
        <div id="courtyard">
          <h2 className="text-title">Courtyard</h2>
          <div className="flex flex-col gap-4 prose-p:mb-0">
            {character.yardSkills.map((yardSkill, index) => (
              <CharacterYardSkill key={index} yardSkill={yardSkill} />
            ))}
          </div>
        </div>
        <hr />
        <div id="gallery">
          <h2 className="text-title">Gallery</h2>
          <div className="prose-p:mt-0">
            <h3>Skins</h3>
            <div className="not-prose grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
              {character.skins.list.map((skin, index) => (
                <CharacterSkin
                  key={index}
                  skin={skin}
                  skinIndex={index}
                  handleSkin={handleSkin}
                />
              ))}
            </div>
            {/* <h3>Animations</h3>
                <div className="not-prose flex flex-row flex-wrap space-x-7 text-center"></div> */}
          </div>
        </div>
        <hr />
        {character.voicelines.length > 0 && (
          <div id="voicelines">
            <div>
              <h2 className="text-title">Voicelines</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {character.voicelines.map((voiceline, index) => (
                  <CharacterVoiceline key={index} voiceline={voiceline} />
                ))}
              </div>
            </div>
            <hr />
          </div>
        )}
      </>
    );
  },
);

export default CharacterMarkdown;

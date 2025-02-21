import React, { memo } from "react";
import Toc from "../../../../../../components/utils/Toc";
import TocItem from "../../../../../../components/utils/TocItem";

const RW_CHARACTER = "rw/character/";

const CharacterToc: React.FC = memo(() => {
  return (
    <Toc>
      <TocItem
        name="Profile"
        src={RW_CHARACTER + "profile2.svg"}
        href="profile"
      />
      <TocItem
        name="Affiliation"
        src={RW_CHARACTER + "affiliation.svg"}
        href="affiliation"
      />
      <TocItem
        name="Backstories"
        src={RW_CHARACTER + "backstory.svg"}
        href="backstories"
      />
      <TocItem
        name="Equipment"
        src={RW_CHARACTER + "equipment.svg"}
        href="equipment"
      />
      <TocItem name="Skills" src={RW_CHARACTER + "skill.svg"} href="skills" />
      <TocItem name="Stats" src={RW_CHARACTER + "stat.svg"} href="stats" />
      <TocItem name="Bond" src={RW_CHARACTER + "bond.svg"} href="bond" />
      <TocItem
        name="Courtyard"
        src={RW_CHARACTER + "courtyard.svg"}
        href="courtyard"
      />
      <TocItem
        name="Gallery"
        src={RW_CHARACTER + "gallery.svg"}
        href="gallery"
      />
      <TocItem
        name="Voicelines"
        src={RW_CHARACTER + "voiceline.svg"}
        href="voicelines"
      />
    </Toc>
  );
});

export default CharacterToc;

import React from "react";

const CharacterBackstory: React.FC<{
  backstory: string;
  index: number;
}> = ({ backstory, index }) => (
  <>
    <h3>Backstory {index + 1}</h3>
    <blockquote>
      <p>{backstory}</p>
    </blockquote>
  </>
);

export default CharacterBackstory;

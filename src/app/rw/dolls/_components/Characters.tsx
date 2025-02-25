"use client";

import React, { useCallback, useMemo, useState } from "react";
import { RWCharacter } from "../../../../classes/character/RWCharacter";
import SearchBar from "../../../../components/Base/Searchbar";
import CharacterMini from "./CharacterMini";
import CharacterFilterButton from "./CharacterFilterButton";
import FilteredList from "../../../../components/utils/FilteredList";
import { Tooltip } from "@material-tailwind/react";

const characters = RWCharacter.getCharacters();
const elements = RWCharacter.getElements();
const vocations = RWCharacter.getVocations();

const Characters: React.FC = () => {
  const [filters, setFilters] = useState({
    showUnknown: false,
    elementType: undefined as string | undefined,
    vocationType: undefined as string | undefined,
  });

  const [filteredCharacters, setFilteredCharacters] = useState<RWCharacter[]>(
    [],
  );

  const filter = useCallback(
    (character: RWCharacter, searchQuery: string) => {
      const { showUnknown, elementType, vocationType } = filters;
      return (
        (showUnknown || !character.unknown) &&
        (!elementType || character.element?.name === elementType) &&
        (!vocationType || character.vocation?.name === vocationType) &&
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
    [filters],
  );

  const ElementButtons = useMemo(
    () => (
      <div className="flex flex-row items-center gap-1">
        {elements.map((element, index) => (
          <CharacterFilterButton
            key={index}
            description={element.name}
            isActive={filters.elementType === element.name}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                elementType:
                  prev.elementType === element.name ? undefined : element.name,
              }))
            }
            imgSrc={element.image}
            altText={element.name}
          />
        ))}
      </div>
    ),
    [filters.elementType, elements],
  );

  const VocationButtons = useMemo(
    () => (
      <div className="flex flex-row items-center gap-1">
        {vocations.map((vocation, index) => (
          <CharacterFilterButton
            key={index}
            description={vocation.name}
            isActive={filters.vocationType === vocation.name}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                vocationType:
                  prev.vocationType === vocation.name
                    ? undefined
                    : vocation.name,
              }))
            }
            imgSrc={vocation.imgDescribe}
            altText={vocation.name}
          />
        ))}
      </div>
    ),
    [filters.vocationType, vocations],
  );

  return (
    <div className="page-primary">
      <header className="page-header">
        <h1>Dolls</h1>
      </header>
      <div className="mb-4 flex flex-wrap justify-center gap-3">
        <div className="w-full md:max-w-64">
          <SearchBar
            objects={characters}
            filter={filter}
            filteredObjects={setFilteredCharacters}
            dependencies={[
              filters.showUnknown,
              filters.elementType,
              filters.vocationType,
            ]}
          />
        </div>
        {ElementButtons}
        {VocationButtons}
        <Tooltip
          content={`${filters.showUnknown ? "Hide" : "Show"} Unknown Characters`}
        >
          <button
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                showUnknown: !prev.showUnknown,
              }))
            }
            className="btn-filter-gray swap swap-indeterminate h-9 w-9 fill-black dark:fill-white"
          >
            <input
              type="checkbox"
              checked={filters.showUnknown}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  showUnknown: e.target.checked,
                }))
              }
            />
            <svg
              className="swap-off"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M792-56 624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM480-320q11 0 20.5-1t20.5-4L305-541q-3 11-4 20.5t-1 20.5q0 75 52.5 127.5T480-320Zm292 18L645-428q7-17 11-34.5t4-37.5q0-75-52.5-127.5T480-680q-20 0-37.5 4T408-664L306-766q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302ZM587-486 467-606q28-5 51.5 4.5T559-574q17 18 24.5 41.5T587-486Z" />
            </svg>
            <svg
              className="swap-on"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Z" />
            </svg>
          </button>
        </Tooltip>
      </div>
      <div className="grid grid-cols-3 justify-center gap-3 md:grid-cols-5 lg:grid-cols-8">
        <FilteredList
          objects={characters}
          filteredObjects={filteredCharacters}
          renderObject={(character) => <CharacterMini character={character} />}
        />
      </div>
    </div>
  );
};

export default Characters;

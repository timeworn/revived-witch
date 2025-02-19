import React from "react";

const DescriptionElement = (description: string | undefined) => {
  if (!description) return description;

  const regex = /<color=([^>]+)>([^<]+)<\/color>/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(description)) !== null) {
    const [fullMatch, _, text] = match;
    const index = match.index;

    if (index > lastIndex) {
      parts.push(description.substring(lastIndex, index));
    }

    parts.push(
      <span key={index} className="text-special">
        {text}
      </span>,
    );

    lastIndex = index + fullMatch.length;
  }

  if (lastIndex < description.length) {
    parts.push(description.substring(lastIndex));
  }

  return <>{parts}</>;
};

export default DescriptionElement;

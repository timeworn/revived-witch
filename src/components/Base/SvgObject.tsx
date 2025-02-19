"use client";

import React from "react";
import { useSvgElement } from "../../hooks/useSvgElement";

interface SvgObjectProps {
  svgPath: string;
  className?: string;
  hidden?: boolean;
  title?: string;
}

const SvgObject: React.FC<SvgObjectProps> = ({
  svgPath,
  className,
  hidden,
  title,
}) => {
  const correctedSvgPath = svgPath.endsWith(".svg")
    ? svgPath
    : `${svgPath}.svg`;
  const svgContainerRef = useSvgElement(correctedSvgPath, className);

  return <div ref={svgContainerRef} hidden={hidden} title={title} />;
};

export default SvgObject;

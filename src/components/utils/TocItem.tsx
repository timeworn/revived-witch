import React from "react";
import SvgObject from "../Base/SvgObject";

interface TocItemProps {
  className?: string;
  key?: React.Key;
  name?: string;
  src?: string;
  href: string;
  children?: React.ReactNode;
}

const TocItem: React.FC<TocItemProps> = ({
  key,
  name,
  src,
  href,
  className,
  children,
}) => (
  <a
    className={`${className} btn-ghost flex h-full w-full items-center justify-center p-1`}
    key={key}
    href={href.charAt(0) === "#" ? href : `#${href}`}
  >
    {children ? (
      children
    ) : src && src.endsWith(".svg") ? (
      <SvgObject svgPath={src} title={name} />
    ) : (
      <img className="h-full w-full" src={src} alt={name} title={name} />
    )}
  </a>
);

export default TocItem;

import { useEffect, useRef } from "react";
import { getImageUrl } from "./getImage";

const svgCache = new Map<string, string>();

const getSvgContent = async (path: string): Promise<string> => {
  if (svgCache.has(path)) {
    return svgCache.get(path)!;
  }

  const svgUrl = getImageUrl(path);
  const content = await fetch(svgUrl).then((response) => response.text());
  svgCache.set(path, content);
  return content;
};

export const useSvgElement = (
  svgPath: string,
  className?: string,
): React.RefObject<HTMLDivElement | null> => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const content = await getSvgContent(svgPath);
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, "image/svg+xml");
        const svgElement = doc.documentElement;

        if (className) {
          svgElement.setAttribute("class", className);
        }

        if (containerRef.current) {
          containerRef.current.innerHTML = "";
          containerRef.current.appendChild(svgElement);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadSvg();
  }, [svgPath, className]);

  return containerRef;
};

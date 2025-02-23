import React, { Children, useEffect, useRef, useState } from "react";
import TocItem from "./TocItem";

interface TocProps {
  children: React.ReactElement<typeof TocItem>[];
}

const Toc: React.FC<TocProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const prevScrollY = useRef<number>(0);
  const activeHeadingId = useRef<string | null>(null);

  const childrenArray = Children.toArray(children) as React.ReactElement[];
  const buttonImage = childrenArray[activeIndex ?? 0]?.props.children || null;

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const childrenArray = React.Children.toArray(children);

    observer.current = new IntersectionObserver(
      (entries) => {
        const currentScrollY = window.scrollY;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const index = childrenArray.findIndex(
              (child) => React.isValidElement(child) && child.props.href === id,
            );

            if (index !== -1) {
              setActiveIndex(index);
              activeHeadingId.current = id;
            }
          } else {
            if (entry.target.id === activeHeadingId.current) {
              const isScrollingUp = currentScrollY < prevScrollY.current;
              const index = childrenArray.findIndex(
                (child) =>
                  React.isValidElement(child) &&
                  child.props.href === entry.target.id,
              );

              if (index > 0 && isScrollingUp) {
                const prevId = (
                  childrenArray[index - 1] as React.ReactElement<typeof TocItem>
                ).props.href;
                activeHeadingId.current = prevId;
                setActiveIndex(index - 1);
              }
            }
          }
        });

        prevScrollY.current = currentScrollY;
      },
      { rootMargin: "0px 0px -75% 0px" },
    );

    childrenArray.forEach((child) => {
      if (React.isValidElement(child)) {
        const id = child.props.href;
        const element = document.getElementById(id);
        if (element) {
          observer.current?.observe(element);
        }
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [children]);

  return (
    <div className="dropdown dropdown-top fixed bottom-5 right-5 z-30 m-auto">
      <div
        tabIndex={0}
        role="button"
        className="text-default h-14 w-14 rounded-box bg-slate-600 p-3 text-xl"
      >
        {buttonImage}
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content left-1/2 mb-2 -translate-x-1/2 items-start gap-2 rounded-box bg-slate-600 shadow"
      >
        {Children.map(children, (child, index) =>
          React.isValidElement(child) ? (
            <li
              className="h-8 w-8"
              key={index}
              onClick={() => handleClick(index)}
            >
              {child}
            </li>
          ) : null,
        )}
      </ul>
    </div>
  );
};

export default Toc;

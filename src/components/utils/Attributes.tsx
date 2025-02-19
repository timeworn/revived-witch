import React, { memo } from "react";

export type AttributeSizes = "xs" | "small" | "default" | "large";

export interface AttributesConfig {
  attrSize?: AttributeSizes;
}

interface AttributesProps {
  className?: string;
  attributes?: string[];
  config?: AttributesConfig;
}

const Attributes: React.FC<AttributesProps> = memo(
  ({ className, attributes, config }) => {
    const attrSize = (() => {
      switch (config?.attrSize ?? "default") {
        case "xs":
          return "prose-p:text-xs";
        case "small":
          return "prose-p:text-sm";
        case "large":
          return "prose-p:text-lg";
        default:
          return "";
      }
    })();

    return (
      <>
        {Array.isArray(attributes) && attributes.length > 0 && (
          <div
            className={`text-default mt-2 w-full ${attrSize} ${className ?? ""}`}
          >
            {attributes.map((attribute, index) => (
              <p key={index} className="round-gray-light p-1">
                {attribute}
              </p>
            ))}
          </div>
        )}
      </>
    );
  },
);

export default Attributes;

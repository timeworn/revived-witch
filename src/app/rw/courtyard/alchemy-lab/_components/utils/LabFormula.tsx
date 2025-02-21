import React from "react";
import { RWAlchemyFormula } from "../../../../../../classes/yard/alchemy/RWAlchemyFormula";
import Reward from "../../../../../../components/utils/Reward";
import Attributes from "../../../../../../components/utils/Attributes";

interface LabFormulaProps {
  formula: RWAlchemyFormula;
}

const LabFormula: React.FC<LabFormulaProps> = ({ formula }) => {
  const itemsNeeded = formula.getItemsNeeded();
  const itemGiven = formula.getItemGiven();
  const attributes = formula.toString();

  return (
    <div className="round-gray flex w-fit flex-row items-center gap-4 p-4">
      <div>
        {itemsNeeded.map((item, index) => (
          <Reward
            key={index}
            name={item.item.getName()}
            amount={item.amount}
            icon={item.item.getIcon()}
          />
        ))}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
      >
        <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z" />
      </svg>
      <div>
        <Reward
          name={itemGiven.item.getName()}
          amount={itemGiven.amount}
          icon={itemGiven.item.getIcon()}
        />
      </div>
      <div>
        <Attributes className="flex flex-col gap-2" attributes={attributes} />
      </div>
    </div>
  );
};

export default LabFormula;

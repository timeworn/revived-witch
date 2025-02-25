import React from "react";
import LabFormula from "./LabFormula";
import { RWAlchemyFormula } from "../../../../../classes/yard/alchemy/RWAlchemyFormula";

interface LabPageProps {
  formulas: RWAlchemyFormula[];
}

const LabPage: React.FC<LabPageProps> = (props) => (
  <div className="flex flex-row flex-wrap justify-center gap-4">
    {props.formulas.map((formula) => (
      <LabFormula key={formula.id} formula={formula} />
    ))}
  </div>
);

export default LabPage;

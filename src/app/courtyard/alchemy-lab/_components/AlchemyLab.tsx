"use client";

import React, { Suspense } from "react";
import TabMaster from "../../../../components/utils/TabMaster";
import { RWAlchemyFormula } from "../../../../classes/yard/alchemy/RWAlchemyFormula";
import LabPage from "./utils/LabPage";

const alchemyQuartz = RWAlchemyFormula.getFormulas().filter(
  (formula) => formula.type === 2,
);
const alchemyMaterial = RWAlchemyFormula.getFormulas().filter(
  (formula) => formula.type === 1,
);

const TABS = [
  { name: "Quartz", formulas: alchemyQuartz },
  { name: "Material", formulas: alchemyMaterial },
];

const AlchemyLab: React.FC = () => {
  return (
    <Suspense>
      <TabMaster
        pages={TABS.map((tab) => ({
          name: tab.name,
          child: <LabPage formulas={tab.formulas} />,
        }))}
      />
    </Suspense>
  );
};

export default AlchemyLab;

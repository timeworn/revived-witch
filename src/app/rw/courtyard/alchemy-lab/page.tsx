import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import { RWAlchemyFormula } from "../../../../classes/yard/alchemy/RWAlchemyFormula";
import TabMaster from "../../../../components/utils/TabMaster";
import LabPage from "./_components/LabPage";
import { Suspense } from "react";

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

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.courtYard.routes.alchemyLab.name,
};

const Page: React.FC = () => {
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

export default Page;

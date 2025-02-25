import React from "react";
import { RWAccountLevel } from "../../../../classes/other/RWAccountLevel";
import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import { Table, TableItem, TableRow } from "../../../../components/utils/Table";

const levels = RWAccountLevel.getLevels();

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.game.routes.accountLevel.name,
};

const AccountLevel: React.FC = () => (
  <div className="page-primary">
    <header className="page-header">
      <h1>Account Level</h1>
    </header>
    <Table head={["Level", "Exp", "Max Stamina"]}>
      {levels.map((level, index) => (
        <TableRow key={index}>
          <TableItem value={level.id} />
          <TableItem value={level.exp} />
          <TableItem value={level.strengthLimit} />
        </TableRow>
      ))}
    </Table>
  </div>
);

export default AccountLevel;

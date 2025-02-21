import React from "react";
import { RWAccountLevel } from "../../../../classes/other/RWAccountLevel";
import { Metadata } from "next";
import siteData from "../../../../data/siteData";

const levels = RWAccountLevel.getLevels();

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.game.url.accountLevel.name,
};

const AccountLevel: React.FC = () => (
  <div className="page-primary">
    <header className="page-header">
      <h1>Account Level</h1>
    </header>
    <div className="prose max-w-full prose-tr:border-none">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>Level</th>
            <th>Exp</th>
            <th>Max Stamina</th>
          </tr>
        </thead>
        <tbody>
          {levels.map((level, key) => (
            <tr key={key}>
              <td>{level.id}</td>
              <td>{level.exp}</td>
              <td>{level.strengthLimit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AccountLevel;

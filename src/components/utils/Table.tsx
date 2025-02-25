"use client";

import { Card, Typography } from "@material-tailwind/react";
import React from "react";

interface TableProps {
  head: string[];
  children: React.ReactElement<typeof TableRow>[];
}

interface TableRowProps {
  children:
    | React.ReactElement<typeof TableItem>
    | React.ReactElement<typeof TableItem>[];
}

interface TableItemProps {
  className?: string;
  value?: any;
  children?: React.ReactNode;
}

const Table: React.FC<TableProps> = (props) => (
  <Card
    className="text-default-alt not-prose h-full w-full overflow-scroll bg-slate-200/25 dark:bg-slate-800/50"
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
  >
    <table className="w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {props.head.map((head, index) => (
            <th
              key={index}
              className="border-b border-blue-gray-100 bg-slate-200/25 p-4 dark:bg-slate-700/25"
            >
              <Typography
                variant="small"
                className="font-normal leading-none opacity-70"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {head}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  </Card>
);

const TableRow: React.FC<TableRowProps> = (props) => (
  <tr className="even:bg-slate-100 dark:even:bg-slate-800">{props.children}</tr>
);

const TableItem: React.FC<TableItemProps> = (props) => (
  <td className={`${props.className} p-4`}>
    {props.children && props.children}
    {props.value && (
      <Typography
        variant="small"
        className="font-normal"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {props.value}
      </Typography>
    )}
  </td>
);

export { Table, TableRow, TableItem };

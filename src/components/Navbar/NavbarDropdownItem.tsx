import Link from "next/link";
import React from "react";

const NavbarDropdownItem: React.FC<{
  name: string;
  url: any;
  children?: React.ReactNode;
}> = ({ name, url, children }) => (
  <li>
    <Link href={url} className="btn-ghost" prefetch={false}>
      {name}
      {children}
    </Link>
  </li>
);

export default NavbarDropdownItem;

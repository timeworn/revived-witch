import Link from "next/link";
import React from "react";

const NavbarItem: React.FC<{
  name: string;
  url: any;
  children?: React.ReactNode;
}> = ({ name, url, children }) => (
  <Link
    href={url}
    className="text-default btn btn-ghost text-xl"
    prefetch={false}
  >
    {name}
    {children}
  </Link>
);

export default NavbarItem;

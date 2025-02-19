import React from "react";
import { INavbarDropdown } from "../../interfaces/Navbar";

const NavbarDropdown: React.FC<INavbarDropdown> = ({ name, children }) => (
  <div className="dropdown dropdown-end">
    <div
      tabIndex={0}
      role="button"
      className="text-default btn btn-ghost text-xl"
    >
      {name}
    </div>
    <ul
      tabIndex={0}
      className="bg-color menu dropdown-content z-[1] mt-4 w-52 rounded-box p-2 shadow"
    >
      {children}
    </ul>
  </div>
);

export default NavbarDropdown;

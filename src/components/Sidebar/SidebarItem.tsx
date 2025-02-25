import Link from "next/link";
import { ReactNode } from "react";
import "./Sidebar.css";
import { usePathname } from "next/navigation";
import { useUI } from "../../app/_components/Providers";

interface SidebarItemProps {
  name: string;
  href: string;
  icon?: ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  const { toggleSidebar } = useUI();

  return (
    <li className={`${isActive ? "active" : ""} relative`}>
      <Link
        className="text-default sidebar-item items-center"
        href={props.href}
        prefetch={false}
      >
        <button
          className="absolute inset-0 lg:hidden"
          onClick={() => toggleSidebar(false)}
        />
        {props.icon}
        <span>{props.name}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;

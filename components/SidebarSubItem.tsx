"use client";
import React, { useState, useMemo } from "react";
import { LucideIcon, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import SubMenuItemPage from "./SubMenuItem";

interface SidebarItems {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: SubItem[];
}

interface SubItem {
  name: string;
  path: string;
}

const SidebarSubItemPage = ({ item }: { item: SidebarItems }) => {
  const [expanded, setExpanded] = useState(false);
  const { name, path, icon: Icon, items } = item;

  const pathname = usePathname();
  const router = useRouter();

   const isActive = useMemo(() => {
     return path === pathname;
   }, [path, pathname]);

  const handleNavLinkClick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }

    router.push(path);
  };

  return (
    <>
      <li
        className={`flex items-center justify-between space-y-1 px-4 py-3 hover:text-cyan-500 hover:bg-slate-200 cursor-pointer rounded-lg ${
          isActive && "text-cyan-500 bg-slate-200"
        }`}
        onClick={handleNavLinkClick}
      >
        <div className='flex space-x-2 items-center'>
          <Icon size={18} />
          <span>{name}</span>
        </div>
        {items && items.length > 0 && (
          <ChevronDown
            size={18}
            className={expanded ? "rotate-100 duration-200" : ""}
          />
        )}
      </li>
      {expanded && items && items.length > 0 && (
        <div className='flex flex-col space-y-2 ml-10 mt-1'>
          {items.map((item) => (
            <SubMenuItemPage key={item.path} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarSubItemPage;

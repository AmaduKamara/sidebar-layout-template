"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LucideIcon, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter()

  const isActive = pathname.startsWith(item.path);

  const handleNavLinkClick = () => {
    if(items && items.length > 0){
      return setExpanded(!expanded)
    }

    router.push(path)
  }
  
  const toggleSubNav = () => setExpanded((prev) => !prev);

  return (
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
        <ChevronDown onClick={toggleSubNav} size={18} className={expanded ? 'rotate-100 duration-300': ''} />
      )}
    </li>
  );
};

export default SidebarSubItemPage;

import React from "react";
import { LucideIcon } from "lucide-react";

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
  const { name, icon: Icon } = item;
  return (
    <li className='flex items-center space-x-2 space-y-1 px-4 py-2 hover:text-cyan-500 hover:bg-gray-200 cursor-pointer rounded-lg'>
      <span>
        <Icon size={18} />
      </span>
      <span>{name}</span>
    </li>
  );
};

export default SidebarSubItemPage;

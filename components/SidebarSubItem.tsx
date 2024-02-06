import React from "react";
import Link from 'next/link'
import { LucideIcon, ChevronDown } from "lucide-react";

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
  const { name, path, icon: Icon, items } = item;
  return (
      <Link href={path} >
        <li className='flex items-center justify-between space-y-1 px-4 py-3 hover:text-cyan-500 hover:bg-slate-200 cursor-pointer rounded-lg'>
            <div className='flex space-x-2 items-center'>
              <Icon size={18} />
              <span>{name}</span>
            </div>
            {items && items.length > 0 && <ChevronDown size={18} />}
        </li>
      </Link>
  );
};

export default SidebarSubItemPage;

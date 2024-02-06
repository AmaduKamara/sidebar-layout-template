import React from "react";
import {
  LayoutDashboard,
  LucideIcon,
  AppWindow,
  Bookmark,
  Users,
  Settings,
  Bell,
  HandCoins,
  HelpCircle,
} from "lucide-react";
import SidebarSubItemPage from "./SidebarSubItem";

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

const items: SidebarItems[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Applications",
    path: "/applications",
    icon: AppWindow,
  },
  {
    name: "Courses",
    path: "/courses",
    icon: Bookmark,
  },
  {
    name: "Students",
    path: "/students",
    icon: Users,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
    items: [
      {
        name: "Notifications",
        path: "/notifications",
      },
      {
        name: "Support",
        path: "/support",
      },
    ],
  },
  {
    name: "Employees",
    path: "/employees",
    icon: Users,
  },
  {
    name: "Fees",
    path: "/fees",
    icon: HandCoins,
  },
  {
    name: "Help",
    path: "/faqs",
    icon: HelpCircle,
    items: [
      {
        name: "Contact",
        path: "/contact-us",
      },
      {
        name: "Support",
        path: "/support",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <main className='bg-gray-100 h-screen w-[20rem] max-w-[20rem] px-6 py-4 z-[999] overflow-auto md:relative fixed'>
      <div className="flex flex-col space-y-10 w-full">
        <h1 className='text-cyan-600 font-bold uppercase text-2xl'>
          Uni Portal
        </h1>

        <ul>
            {items.map(item => (
              <SidebarSubItemPage key={item.path} item={item}/>
            ))}
        </ul>
      </div>
    </main>
  );
};

export default Sidebar;

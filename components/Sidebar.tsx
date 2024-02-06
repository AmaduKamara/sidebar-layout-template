"use client";
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
  LogOut
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
    path: "/dashboard",
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
        name: "General",
        path: "/settings",
      },
      {
        name: "Security",
        path: "/settings/security",
      },
      {
        name: "Notifications",
        path: "/settings/notifications",
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
    path: "/help",
    icon: HelpCircle,
    items: [
      {
        name: "FAQs",
        path: "/help",
      },
      {
        name: "Supports",
        path: "/help/supports",
      },
      {
        name: "Contact",
        path: "/help/contact-us",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <main className='bg-gray-100 h-screen w-[20rem] max-w-[20rem] px-6 py-4 z-[999] overflow-auto md:relative fixed'>
      <div className='flex flex-col space-y-5 w-full'>
        <h1 className='text-cyan-600 font-bold uppercase text-2xl'>
          Uni Portal
        </h1>
        <hr />
        <ul>
          {items.map((item) => (
            <SidebarSubItemPage key={item.path} item={item} />
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 ml-10 mb-10 w-full flex items-center space-x-2 cursor-pointer hover:text-cyan-500">
      
          <LogOut size={18} />
          <span>Exit</span>
      
      </div>
    </main>
  );
};

export default Sidebar;

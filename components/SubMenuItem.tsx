"use client";
import {useMemo} from 'react'
import { useRouter, usePathname } from "next/navigation";

interface SubItem {
  name: string;
  path: string;
}

const SubMenuItemPage = ({ item }: { item: SubItem }) => {
  const { name, path } = item;

  const pathname = usePathname();
  const router = useRouter();

  const isActive = useMemo(() => {
    return path === pathname
  }, [path, pathname])

  const handleNavLinkClick = () => {
    router.push(path);
  };

  return (
    <div
      className={`text-sm cursor-pointer hover:text-cyan-500 ${
        isActive ? "text-cyan-500" : ""
      }`}
      onClick={handleNavLinkClick}
    >
      {name}
    </div>
  );
};

export default SubMenuItemPage;

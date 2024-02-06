"use client";
import { useRouter } from "next/navigation";

interface SubItem {
  name: string;
  path: string;
}

const SubMenuItemPage = ({ item }: { item: SubItem }) => {
  const { name, path } = item;

  const router = useRouter();

  const handleNavLinkClick = () => {
    router.push(path);
  };

  return (
    <div
      className='text-sm cursor-pointer hover:text-cyan-500'
      onClick={handleNavLinkClick}
    >
      {name}
    </div>
  );
};

export default SubMenuItemPage;

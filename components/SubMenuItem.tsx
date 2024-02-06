import React from "react";

interface SubItem {
  name: string;
  path: string;
}

const SubMenuItemPage = ({ item }: { item: SubItem }) => {
  const { name, path } = item;
  return (
    <div className='text-sm cursor-pointer hover:text-cyan-500' key={path}>
      {name}
    </div>
  );
};

export default SubMenuItemPage;

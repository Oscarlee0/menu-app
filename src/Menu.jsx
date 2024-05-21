import React from "react";
import MenuItems from "./MenuItems";

const Menu = ({ menus }) => {
  return (
    <div className='section-center'>
      {menus.map((item) => {
        return <MenuItems key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Menu;

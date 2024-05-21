import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Cat from "./Cat";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menus, setMenus] = useState(data);
  const [Categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === "all") {
      setMenus(data);
      return;
    }
    const newCat = data.filter((item) => item.category === category);
    setMenus(newCat);
  };
  return (
    <main className='menu'>
      <Title text='Our Menu' />
      <Cat categories={Categories} filterItem={filterItem} />
      <Menu menus={menus} />
    </main>
  );
};
export default App;

import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(
          (item) => item?.category === "popular"
        );
        setMenu(popularItems);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="py-8">
      <SectionTitle heading={"From our menu"} subHeading={"Popular items"} />
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;

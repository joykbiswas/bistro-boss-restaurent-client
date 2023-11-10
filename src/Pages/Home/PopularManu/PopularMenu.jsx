import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="my-12">
      <div className="mx-auto text-center  md:w-3/12 my-8 ">
        <h1 className="text-yellow-600 ">---Check it out---</h1>
        <h4 className="text-4xl uppercase border-y-4 py-4 ">FROM OUR MENU</h4>
      </div>
      <div className="grid md:grid-cols-2 gap-7">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        {" "}
        <button className=" btn btn-outline border-0 border-b-4 p-4 ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;

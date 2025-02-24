import { NavLink } from "react-router-dom";
import { useState } from "react";
const GadgetSidebar = ({ handleCategory }) => {
  const [isClicked, setClicked] = useState("all");
  const handleClicked = (category) => {
    setClicked(category);
    handleCategory(category);
  };

  const categories = ["all", "Computer", "Phone", "Accessories", "Smart Watch"];
  return (
    <div className="bg-white max-h-fit w-44 pt-2 pb-2 rounded-lg text-left">
      {categories.map((category) => (
        <button
          key={category}
          className={`btn rounded-full m-2 w-36 ${
            isClicked === category ? "bg-[#9538E2] text-white" : "bg-gray-200"
          }`}
          onClick={() => handleClicked(category)}
        >
          {category === "all" ? "All Products" : category}
        </button>
      ))}
    </div>
  );
};

export default GadgetSidebar;

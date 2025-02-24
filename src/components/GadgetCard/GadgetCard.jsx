import { useEffect, useState } from "react";
import GadgetSidebar from "./GadgetSidebar";
import SingleGadget from "./SingleGadget";

const GadgetCard = () => {
  const [gadgets, setGadgets] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const handleCategory = (selectedCategory) => {
    if (selectedCategory === "all") {
      setFilteredData(gadgets);
    } else {
      const categorizedData = gadgets.filter(
        (gadget) => gadget.category == selectedCategory
      );

      setFilteredData(categorizedData);
    }
  };
  useEffect(() => {
    fetch("./gadget.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
        setFilteredData(data);
      });
  }, []);
  return (
    <div className="flex w-11/12 mx-auto mt-20 mb-20 gap-4">
      <GadgetSidebar handleCategory={handleCategory}></GadgetSidebar>
      {filteredData.length == 0 ? (
        <div className="card bg-base-100 shadow-lg w-full justify-center items-center text-3xl font-extrabold">
          No Data Found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((gadget) => (
            <SingleGadget
              gadget={gadget}
              key={gadget.product_id}
            ></SingleGadget>
          ))}
        </div>
      )}
    </div>
  );
};

export default GadgetCard;

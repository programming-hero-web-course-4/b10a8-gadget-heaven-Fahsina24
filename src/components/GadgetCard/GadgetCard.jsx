import { useEffect, useState } from "react";
import GadgetSidebar from "./GadgetSidebar";
import SingleGadget from "./SingleGadget";

const GadgetCard = () => {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    fetch("./gadget.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  return (
    <div className="flex w-11/12 mx-auto mt-20 gap-4">
      <GadgetSidebar></GadgetSidebar>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gadgets.map((gadget) => (
          <SingleGadget gadget={gadget} key={gadget.product_id}></SingleGadget>
        ))}
      </div>
    </div>
  );
};

export default GadgetCard;

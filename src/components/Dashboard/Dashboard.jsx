import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredCartItem } from "../AddToDb";
import CartItems from "../Cart/CartItems";
// import CartItems from "../Cart/CartItems";
const Dashboard = () => {
  const [cartItem, setCartItem] = useState([]);
  const allGadgets = useLoaderData();
  useEffect(() => {
    const storedCartList = getStoredCartItem();
    const storedCartListInt = storedCartList.map((id) => parseInt(id));
    const listedProducts = allGadgets.filter((p) =>
      storedCartListInt.includes(p.product_id)
    );
    setCartItem(listedProducts);
  }, []);
  return (
    <div className="w-full">
      <Helmet>
        <title>GadgetHeaven | Dashboard</title>
      </Helmet>
      <div className="text-center w-full pb-14 md:pb-20 min-h-fit bg-[#9538E2] mx-auto">
        <h1 className="pt-6 text-white text-2xl font-extrabold md:text-5xl">
          Dashboard
        </h1>
        <p className="pt-6 md:w-1/2 w-10/12 mx-auto text-white text-lg">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className=" w-full flex md:flex-row flex-col gap-4 justify-center items-center mt-8">
          <Tabs className="w-full">
            <TabList className="flex gap-4 justify-center">
              <Tab className="p-4 w-24">Cart</Tab>
              <Tab className="p-4 w-24 bg-[#9538E2]">WishList</Tab>
            </TabList>

            <div className="w-full mt-8 bg-[#ECECEC]">
              <TabPanel className="w-full">
                <div className="flex justify-between w-11/12 mx-auto">
                  <h2 className="text-xl font-extrabold  mt-4 mb-4">
                    Cart Items
                  </h2>
                  <div className="flex gap-4 mt-4">
                    <button className="btn border-[#9538E2] mb-4">
                      Sort By Price
                    </button>
                    <button className="btn border-[#9538E2] mb-4">
                      Purchase
                    </button>
                  </div>
                </div>
                <div className="pb-6">
                  {cartItem.map((product) => (
                    <CartItems
                      product={product}
                      key={product.product_id}
                    ></CartItems>
                  ))}
                </div>
              </TabPanel>
              <TabPanel className="w-full">
                <h2>Any content 2</h2>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

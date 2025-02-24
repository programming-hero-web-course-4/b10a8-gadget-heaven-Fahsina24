import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredCartItem } from "../AddToDb";
import CartItems from "../Cart/CartItems";
import { getStoredWishListItem } from "../AddToDb";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [wishListItem, setWishListItem] = useState([]);
  const allGadgets = useLoaderData();
  const Navigate = useNavigate();

  useEffect(() => {
    // Cart Item
    const storedCartList = getStoredCartItem();
    const storedCartListInt = storedCartList.map((id) => parseInt(id));
    const listedProducts = allGadgets.filter((p) =>
      storedCartListInt.includes(p.product_id)
    );
    const total = listedProducts.reduce((total, item) => total + item.price, 0);
    setTotalPrice(total);
    setCartItem(listedProducts);

    // WishList Item
    const storedWishList = getStoredWishListItem();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const listedWishListProducts = allGadgets.filter((p) =>
      storedWishListInt.includes(p.product_id)
    );
    setWishListItem(listedWishListProducts);
  }, [allGadgets]);

  const handlePurchase = () => {
    setTotalPrice(0);
    localStorage.removeItem("cart-list");
    setCartItem([]);
    Navigate("/");
    Swal.fire({
      icon: "success",
      title: "Payment Successful",
      text: `Total Price: $${totalPrice.toFixed(2)}`,
      confirmButtonText: "Close",
      showClass: {
        popup: "animate__animated animate__fadeInUp animate__faster",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutDown animate__faster",
      },
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>GadgetHeaven | Dashboard</title>
      </Helmet>
      <div className="text-center w-full pb-14 md:pb-20 min-h-fit mx-auto">
        <div className="bg-[#9538E2]">
          <h1 className="pt-6 text-white text-2xl font-extrabold md:text-5xl">
            Dashboard
          </h1>
          <p className="pt-6 md:w-1/2 w-10/12 mx-auto text-white text-lg">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>

        <div className="w-full bg-[#9538E2] flex md:flex-row flex-col gap-4 justify-center items-center pt-4">
          <Tabs className="w-full">
            <TabList className="flex gap-4 justify-center">
              <Tab className="p-4 w-24">Cart</Tab>
              <Tab className="p-4 w-24 bg-[#9538E2]">WishList</Tab>
            </TabList>

            <div className="w-full bg-[#ECECEC]">
              <TabPanel className="w-full">
                <div className="flex justify-between w-11/12 mx-auto">
                  <div className="mt-4 p-4 bg-[#9538E2] text-white rounded-lg text-xl font-semibold">
                    Total: ${totalPrice.toFixed(2)}
                  </div>
                  <h2 className="text-xl font-extrabold mt-4 mb-4">
                    Cart Items
                  </h2>
                  <div className="flex gap-4 mt-4">
                    <button className="btn border-[#9538E2] mb-4">
                      Sort By Price
                    </button>
                    <button
                      className="btn border-[#9538E2] mb-4"
                      onClick={handlePurchase}
                    >
                      Purchase
                    </button>
                  </div>
                </div>

                {totalPrice === 0 ? (
                  <div className="m-10 rounded-md w-11/12 min-h-40 flex justify-center items-center mx-auto bg-white border-gray-300 border-2 pb-6">
                    <p>Nothing Added Here</p>
                  </div>
                ) : (
                  <div className="pb-6">
                    {cartItem.map((product) => (
                      <CartItems product={product} key={product.product_id} />
                    ))}
                  </div>
                )}
              </TabPanel>

              <TabPanel className="w-full min-h-full">
                <div className="flex justify-between w-11/12 mx-auto">
                  <h2 className="text-xl font-extrabold mt-4 mb-4">
                    WishList Items
                  </h2>
                  <div className="flex gap-4 mt-4">
                    <button className="btn border-[#9538E2] mb-4">
                      Sort By Price
                    </button>
                    <button
                      className="btn border-[#9538E2] mb-4"
                      onClick={handlePurchase}
                    >
                      Purchase
                    </button>
                  </div>
                </div>
                <div className="pb-6">
                  {wishListItem.map((product) => (
                    <CartItems product={product} key={product.product_id} />
                  ))}
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

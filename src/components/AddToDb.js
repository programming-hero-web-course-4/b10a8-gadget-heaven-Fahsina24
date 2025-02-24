const getStoredCartItem = () => {
  // cartItemList
  const storedCartListStr = localStorage.getItem("cart-list");
  if (storedCartListStr) {
    const storedList = JSON.parse(storedCartListStr);
    return storedList;
  } else {
    return [];
  }
};
const addToStoredCartItem = (id) => {
  const storedData = getStoredCartItem();
  if (storedData.includes(id)) {
    console.log("already exists");
  } else {
    storedData.push(id);
    const storedCartListStr = JSON.stringify(storedData);
    localStorage.setItem("cart-list", storedCartListStr);
  }
};
export { addToStoredCartItem, getStoredCartItem };

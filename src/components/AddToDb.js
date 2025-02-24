// StoreCartItem to local storage

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

// Add item to local storage

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

// StoreWishListItem to local storage

const getStoredWishListItem = () => {
  // storeItemToWishList
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedList = JSON.parse(storedWishListStr);
    return storedList;
  } else {
    return [];
  }
};

// Add wishList Item to local storage

const addToWishListItem = (id) => {
  const storedData = getStoredWishListItem();
  if (storedData.includes(id)) {
    console.log("already exists");
  } else {
    storedData.push(id);
    const storedWishListStr = JSON.stringify(storedData);
    localStorage.setItem("wish-list", storedWishListStr);
  }
};

export {
  addToStoredCartItem,
  getStoredCartItem,
  addToWishListItem,
  getStoredWishListItem,
};

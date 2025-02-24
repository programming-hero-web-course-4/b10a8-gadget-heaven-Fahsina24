const CartItems = ({ product }) => {
  const { product_title, product_image, description, price } = product;
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 border border-gray-300 w-11/12 mx-auto m-4 gap-10">
      {/* Product Image */}
      <img
        src={product_image}
        alt={product_title}
        className="object-cover w-40 rounded-md"
      />

      {/* Product Info */}
      <div className="w-10/12 text-left">
        <p className="text-gray-800 font-semibold">{product_title}</p>
        <p className="text-sm text-gray-600 ">{description}</p>
        <p className="text-[#9538E2] font-bold text-lg">Price: ${price}</p>
      </div>
    </div>
  );
};

export default CartItems;

import { Link } from "react-router-dom";

const SingleGadget = ({ gadget }) => {
  const { product_title, product_image, price, product_id } = gadget;
  return (
    <div className="card bg-base-100 shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      <figure className="mt-4 rounded-lg">
        <img
          src={product_image}
          alt={product_title}
          className="h-80 w-11/12 object-contain rounded-lg mx-auto border-gray-100 border-2 transition-transform duration-300 ease-in-out hover:scale-110
"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="text-xl font-semibold text-gray-900">{product_title}</h2>
        <p className="text-lg text-gray-600 font-medium mt-2">
          Price : ${price}
        </p>
        <div className="card-actions">
          <Link to={`/gadgets/${product_id}`}>
            <button className="btn border-[#9538E2] rounded-full bg-white text-[#9538E2] hover:bg-[#9538E2] hover:text-white text-lg font-bold">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleGadget;

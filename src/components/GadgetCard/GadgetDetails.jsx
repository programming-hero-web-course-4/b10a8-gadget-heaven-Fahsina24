import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { IoHeartDislikeOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { addToStoredCartItem, addToWishListItem } from "../AddToDb";

const GadgetDetails = () => {
  const [wishListItem, setWishListItem] = useState(false);
  const { id } = useParams();
  const data = useLoaderData();
  const details = data.find((gadget) => gadget.product_id == id);
  const handleWishList = (id) => {
    setWishListItem(true);
    addToWishListItem(id);
    Swal.fire({
      title: "Hurrah!!!Item Added to the wishList section",
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    });
  };

  const handleCart = (title, image, id) => {
    addToStoredCartItem(id);
    Swal.fire({
      title: "Congratulations",
      text: `${title} is added to cart`,
      imageUrl: `${image}`,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };

  return (
    <div>
      <Helmet>
        <title>GadgetHeaven | DetailsPage </title>
      </Helmet>
      <div className="text-center w-full pb-14 md:pb-20 min-h-fit bg-[#9538E2] mx-auto">
        <h1 className="pt-6 text-white text-2xl font-extrabold md:text-5xl">
          Product Details
        </h1>
        <p className="pt-6 md:w-1/2 w-10/12 mx-auto text-white text-lg">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className=" w-11/12 flex justify-center items-center mx-auto -mt-10 md:-mt-16 px-4">
        <div className="p-4 border-white border-2 bg-white rounded-lg mb-10 w-full max-w-5xl">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10 mb-10">
            <div className="w-full md:w-1/2 p-6 bg-[#ECECEC] shadow-lg rounded-lg flex justify-center">
              <img
                src={details.product_image}
                alt={details.product_title}
                className="object-contain rounded-2xl w-full max-h-80"
              />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-2xl font-bold">{details.product_title}</h2>
              <p className="text-gray-700 mt-2">Category: {details.category}</p>
              <p className="text-lg font-semibold mt-2">
                Price: ${details.price}
              </p>
              <p className="text-gray-600 mt-2">{details.description}</p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Specifications:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {details.specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
              <p
                className={`mt-4 font-semibold ${
                  details.availability ? "text-green-600" : "text-red-600"
                }`}
              >
                {details.availability ? "In Stock" : "Out of Stock"}
              </p>
              <p className="mt-2 text-yellow-500 flex items-center gap-2">
                Rating: {details.rating} <FaStar />
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <button
              className=" rounded-full bg-[#9538E2] text-white text-lg font-bold py-2 px-6 flex gap-2 items-center"
              onClick={() =>
                handleCart(
                  details.product_title,
                  details.product_image,
                  details.product_id
                )
              }
            >
              Add To Cart <FaShoppingCart />
            </button>

            <button
              disabled={wishListItem}
              onClick={() => handleWishList(details.product_id)}
              className="bg-white rounded-full border-gray-100 border
              p-2 items-center hover:bg-purple-300"
            >
              {wishListItem ? <IoHeartDislikeOutline /> : <FaRegHeart />}
            </button>
          </div>
          <Link
            to="/"
            className="btn rounded-full bg-[#9538E2] text-white text-lg font-bold py-2 px-6 flex gap-2 items-center w-fit"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;

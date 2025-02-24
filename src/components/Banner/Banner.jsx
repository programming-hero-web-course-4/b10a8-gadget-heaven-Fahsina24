import { Link } from "react-router-dom";
import bannerlogo from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="mb-8">
      <div className="text-center w-11/12 pb-14 md:pb-20 min-h-fit bg-[#9538E2] mx-auto rounded-b-2xl ">
        <h1 className="pt-6 text-white text-2xl md:text-5xl">
          Upgrade Your Tech Accessorize with <br />
          Gadget Heaven Accessories
        </h1>
        <p className="pt-6 md:w-1/2 w-10/12 mx-auto text-white text-lg">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link to="dashboard">
          <button className="btn btn-white text-[#9538E2] rounded-full mt-4 mb-4">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="justify-center items-center flex mx-auto -mt-10 md:-mt-16">
        <p className="p-1 md:p-4 border-white border-2 rounded-lg">
          <img
            src={bannerlogo}
            alt=""
            className="w-36 h-28 md:w-96 md:h-80 rounded-lg"
          />
        </p>
      </div>
    </div>
  );
};

export default Banner;

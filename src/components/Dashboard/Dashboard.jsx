import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div>
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
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center mt-8">
          <button className="btn rounded-full w-24">Cart</button>
          <button className="btn rounded-full text-white w-24 bg-[#9538E2]">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { Helmet } from "react-helmet-async";
const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>GadgetHeaven | Statistics</title>
      </Helmet>
      <div className="text-center w-full pb-14 md:pb-20 min-h-fit bg-[#9538E2] mx-auto">
        <h1 className="pt-6 text-white text-2xl font-extrabold md:text-5xl">
          Statistics
        </h1>
      </div>
      <div className=" w-11/12 justify-center items-center flex mx-auto -mt-10 md:-mt-16">
        <div className="p-1 md:p-4 border-white border-2 rounded-lg min-h-60 w-11/12 md:w-100">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-20 mb-10 font-extrabold text-lg md:text-4xl text-black ">
            Nothing to show in the Statistics Section
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

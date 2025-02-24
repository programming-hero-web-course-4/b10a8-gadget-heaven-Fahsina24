import Banner from "../Banner/Banner";
import GadgetCard from "../GadgetCard/GadgetCard";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>GadgetHeaven </title>
      </Helmet>
      <Banner></Banner>
      <GadgetCard></GadgetCard>
    </div>
  );
};

export default Home;

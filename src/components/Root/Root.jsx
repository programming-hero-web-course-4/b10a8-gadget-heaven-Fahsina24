import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="w-11/12 mx-auto bg-[#ECECEC] border-green-500 border-2">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

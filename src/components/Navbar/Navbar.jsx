import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import logo from "../../../public/Logo.png";
const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className="md:mr-6 p-2 hover:bg-green-200 hover:rounded-md"
      >
        Home
      </NavLink>
      <Link
        to="/statistics"
        className="md:mr-6 p-2  hover:bg-green-200 hover:rounded-md"
      >
        Statistics
      </Link>
      <Link
        to="/dashboard"
        className="hover:rounded-md hover:bg-green-200 p-2 "
      >
        Dashboard
      </Link>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>

        <Link to="/">
          <img src={logo} alt="logo" className="w-20 h-10" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <p className="bg-white rounded-full border-gray-100 border p-2 items-center">
          <FaShoppingCart />
        </p>
        <p className="bg-white rounded-full border-gray-100 border p-2 items-center">
          <FaRegHeart />
        </p>
      </div>
    </div>
  );
};

export default Navbar;

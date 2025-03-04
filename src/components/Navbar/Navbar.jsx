import { Link, NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const { pathname } = useLocation();
  const NavbarBg = pathname == "/" ? "bg-[#9538E2]" : "bg-white";

  const links = (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return isActive ? { color: "black", background: "white" } : {};
        }}
        className="md:mr-6 p-2 "
      >
        Home
      </NavLink>
      <NavLink to="/statistics" className="md:mr-6 p-2">
        Statistics
      </NavLink>
      <NavLink to="/dashboard" className=" p-2 ">
        Dashboard
      </NavLink>
    </>
  );

  return (
    <div className="w-full  bg-white">
      <div className={`navbar w-11/12 mx-auto ${NavbarBg} `}>
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
    </div>
  );
};

export default Navbar;

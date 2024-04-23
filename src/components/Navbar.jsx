import { NavLink } from "react-router-dom";
import plogo from "../images/plogo.png";

const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="max-w-screen-xl w-[90vw] mx-auto flex flex-col p-[1.5rem 2rem] items-center lg:flex-row lg:justify-between ">
        <img
          src={plogo}
          alt=""
          className="w-60 md:w-64 lg:w-80 xl:w-96  object-cover"
        />{" "}
        <div className="flex flex-col gap-2  text-lg lg:text-xl lg:flex-row">
          <NavLink
            to="/"
            className=" transition duration-300 ease-in-out hover:text-red-600 lg:px-3"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className=" transition duration-300 ease-in-out hover:text-red-600 lg:px-3"
          >
            About
          </NavLink>
          <NavLink
            to="/menu"
            className=" transition duration-300 ease-in-out hover:text-red-600 lg:px-3 "
          >
            Menu
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";
import img from "../../../assets/Icon/icon.png";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleSingOut = () => {
    logOutUser()
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log("An error happened signout.");
      });
  };
  const links = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>Jobs</NavLink>
      <NavLink>Contact</NavLink>
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
            className="menu menu-sm gap-4 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn text-blue-400 btn-ghost text-xl">
          Job Hunt website <img className="w-11" src={img} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button
              className="btn bg-red-500 text-black"
              onClick={handleSingOut}
            >
              Log-Out
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/signIn" className="btn btn-primary ml-3">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

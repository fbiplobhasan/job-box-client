import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext/AuthContex";
import jobIcon from "../../../assets/logo/favicon.png";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("logOut successful.");
      })
      .catch((error) => {
        console.log("failed to logOut.", error.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">About</NavLink>
      </li>
      <li>
        <NavLink to="/addJob">Add A Job</NavLink>
      </li>
      <li>
        <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/myApplications">My Applications</NavLink>
      </li>
      <li>
        <NavLink to="/jobs">All Jobs</NavLink>
      </li>
    </>
  );
  return (
    <div>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-300">
            <img
              className="w-8 h-8 object-contain"
              src={jobIcon}
              alt="Job Box Logo"
            />
            <span className="text-xl font-bold text-blue-600">JobBox</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Link className="btn" to="/login">
                <button onClick={handleLogOut}>Log Out</button>
              </Link>
            </>
          ) : (
            <>
              <Link className="btn" to="/login">
                LogIn
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

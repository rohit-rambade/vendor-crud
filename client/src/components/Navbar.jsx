import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated, setLoginData } from "../slices/authSlice";

import { FaRegCircleUser } from "react-icons/fa6";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(setLoginData(null));
    dispatch(setIsAuthenticated(false));
    window.location.reload();
    toast.success("Logout Successful");
  };

  return (
    <nav className="bg-gray-900  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ">
            Vendor Management
          </span>
        </Link>
        <div className=" flex items-center ">
          <div className="relative">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full "
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isAuthenticated ? (
                <FaRegCircleUser size={30} />
              ) : (
                <img
                  className=" w-8 h-8 rounded-full"
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
              )}
            </button>
            {/* Dropdown menu */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } absolute right-0 my-4 text-base list-none bg-white  divide-gray-100 rounded-lg shadow`}
            >
              <ul className="py-2">
                {!isAuthenticated ? (
                  <li>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Login
                    </Link>
                  </li>
                ) : (
                  <>
                    <li className="block px-4 py-2 text-sm text-gray-700">
                      Welcome {user.displayName}
                    </li>
                    <li>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700"
                        onClick={() => handleLogout()}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

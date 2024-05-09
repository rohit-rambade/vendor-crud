import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-900  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ">
            Vendor Management
          </span>
        </a>
        <div className=" flex items-center ">
          <div className="relative">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full "
              onClick={() => setIsOpen(!isOpen)}
            >
              <img className=" w-8 h-8 rounded-full" src="" alt="user photo" />
            </button>
            {/* Dropdown menu */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } absolute right-0 my-4 text-base list-none bg-white  divide-gray-100 rounded-lg shadow`}
            >
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

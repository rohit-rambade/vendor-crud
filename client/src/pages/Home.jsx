import React, { useState } from "react";
import CreateVendor from "../components/CreateVendor";
import VendorList from "../components/VendorList";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const handleCreateVendorModal = () => {
    if (isAuthenticated) {
      setIsOpen(!isOpen);
    } else {
      toast.error("Please log in with your Google account to create vendor.");
    }
  };
  return (
    <div className=" text-gray-600 body-font ">
      <div className="container p-5 mx-auto">
        <div className=" flex justify-start md:justify-end items-center sm:flex-row sm:items-center  mx-auto">
          <button
            className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleCreateVendorModal}
          >
            Create
          </button>
        </div>
      </div>

      <div className="absolute  w-full">
        <CreateVendor
          handleCreateVendorModal={handleCreateVendorModal}
          isOpen={isOpen}
        />
      </div>

      {/* Vendor List */}
      <VendorList />
    </div>
  );
};

export default Home;

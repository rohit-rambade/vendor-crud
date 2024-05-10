import React from "react";
import VendorDetails from "../components/VendorDetails";
import VendorList from "../components/VendorList";
import { useDispatch, useSelector } from "react-redux";
import { IoAdd } from "react-icons/io5";

import { toast } from "react-toastify";
import {
  setEditableVendor,
  setHandleModal,
  setIsEdit,
} from "../slices/vendorSlice";

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { isOpen, isEdit } = useSelector((state) => state.vendor);
  console.log(isEdit);
  const dispatch = useDispatch();
  const handleCreateVendorModal = () => {
    if (isAuthenticated) {
      dispatch(setHandleModal(!isOpen));
      dispatch(setIsEdit(false));
      dispatch(setEditableVendor());
    } else {
      toast.error("Please log in with your Google account to create vendor.");
    }
  };
  return (
    <div className=" text-gray-600 body-font ">
      <div className="container p-5 mx-auto">
        <div className=" flex justify-start md:justify-end items-center sm:flex-row sm:items-center  mx-auto">
          <button
            className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg flex justify-center items-center "
            onClick={handleCreateVendorModal}
          >
            <IoAdd size={25} color="white" />
            Add
          </button>
        </div>
      </div>

      <div className="absolute  top-14  w-full">
        <VendorDetails
          handleCreateVendorModal={handleCreateVendorModal}
          isOpen={isOpen}
        />
      </div>

      {/* Vendor List */}
      <VendorList
        handleCreateVendorModal={handleCreateVendorModal}
        isOpen={isOpen}
      />
    </div>
  );
};

export default Home;

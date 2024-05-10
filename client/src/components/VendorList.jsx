import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setDeletePopup,
  setEditableVendor,
  setHandleModal,
  setIsEdit,
  setVendors,
} from "../slices/vendorSlice";
import { toast } from "react-toastify";
import Popup from "./Popup";

const VendorList = () => {
  const dispatch = useDispatch();

  const { vendors } = useSelector((state) => state.vendor);

  const { isOpen, isEdit, deletePopup } = useSelector((state) => state.vendor);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  //get all vendors
  const getVendors = async (page, limit) => {
    const { data } = await axios.get(
      `/api/vendors?page=${page}&limit=${limit}`
    );
    dispatch(setVendors(data.vendors));
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    getVendors(currentPage, 5);
  }, [currentPage, isOpen]);

  // controls
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleEdit = (id) => {
    if (!isAuthenticated) {
      toast.error("Please log in with your Google account to create vendor.");
    } else {
      const editableVendor = vendors.find((vendor) => vendor._id === id);

      dispatch(setHandleModal(!isOpen));
      dispatch(setIsEdit(true));
      dispatch(setEditableVendor(editableVendor));
    }
  };

  return (
    <div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right md:text-center">
          <thead className="text-sm text-gray-700 uppercase bg-gray-400">
            <tr className="bg-gray-100">
              <th scope="col" className="px-6 py-3">
                Vendor Name
              </th>
              <th scope="col" className="px-6 py-3">
                Bank Account Number
              </th>
              <th scope="col" className="px-6 py-3">
                Bank Name
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          {vendors?.length === 0 ? (
            <tbody>
              <tr className="text-2xl text-center ">
                <td colSpan="4" className="p-5">
                  No Vendors Available
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {vendors?.map((vendor) => (
                <tr key={vendor._id} className="bg-white border-b">
                  <td
                    scope="row"
                    className="px-6 py-4  border-b border-gray-200 "
                  >
                    {vendor.vendorName}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {vendor.bankAccountNo}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {vendor.bankName}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 space-x-2  md:space-y-0 md:space-x-2 flex flex-row md:flex-row">
                    <button
                      onClick={() => handleEdit(vendor._id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center space-x-2"
                    >
                      <FaEdit /> <span>Edit</span>
                    </button>
                    <button
                      onClick={() => dispatch(setDeletePopup(!deletePopup))}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center space-x-2"
                    >
                      <MdDeleteForever /> <span>Delete</span>
                    </button>
                    <div>{deletePopup && <Popup id={vendor._id} />}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-gray-300 px-4 py-2 rounded  flex space-x-2 justify-center items-center"
        >
          <FaArrowLeft />
          <span>Prev</span>
        </button>
        <span>
          Page {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-300 px-4 py-2 rounded  flex space-x-2 justify-center items-center"
        >
          <FaArrowRight /> <span>Next</span>
        </button>
      </div>
    </div>
  );
};

export default VendorList;

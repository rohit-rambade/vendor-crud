import React, { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditableVendor,
  setHandleModal,
  setIsEdit,
} from "../slices/vendorSlice";

const initialState = {
  vendorName: "",
  bankAccountNo: "",
  bankName: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  country: "",
  zipCode: "",
};

const CreateVendor = () => {
  const [vendorData, setVendorData] = useState(initialState);
  const { isEdit, isOpen, editableVendor } = useSelector(
    (state) => state.vendor
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (editableVendor) {
      setVendorData(editableVendor);
    } else {
      setVendorData(initialState);
    }
  }, [editableVendor]);

  const handleChange = (e) => {
    setVendorData({
      ...vendorData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateVendor = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Creating Vendor");
      const { data } = await axios.post("/api/vendors/", vendorData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.success) {
        toast.dismiss();
        toast.success(data.message);
        setVendorData(initialState);
        dispatch(setHandleModal(!isOpen));
      }
    } catch (error) {
      console.error("Error:", error.response.data.errors);
      toast.dismiss();
      error.response.data.errors.map((error) => {
        toast.error(error.msg);
      });
    }
  };

  const handleUpdateVendor = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Edit Vendor");
      const { data } = await axios.put(
        `/api/vendors/${editableVendor._id}`,
        vendorData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        toast.dismiss();
        toast.success(data.message);
        setVendorData(initialState);
        dispatch(setHandleModal(!isOpen));
      }
    } catch (error) {
      console.error("Error:", error.response.data.errors);
      toast.dismiss();
      error.response.data.errors.map((error) => {
        toast.error(error.msg);
      });
    }
  };

  const handleModalClose = () => {
    if (isEdit) {
      dispatch(setIsEdit(!isEdit));
      dispatch(setHandleModal(!isOpen));
    } else {
      dispatch(setHandleModal(!isOpen));
      dispatch(setEditableVendor());
    }
  };
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      }  overflow-y-auto justify-center  items-center font-poppins`}
    >
      <div className="p-4 ">
        <div className=" bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <h3 className="text-lg font-semibold text-gray-900 ">
              {isEdit ? "Edit" : "Add"} Details
            </h3>
            <button
              onClick={handleModalClose}
              type="button"
              className="text-black border border-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-1 md:grid-cols-3">
              <div className="space-y-4">
                <div className="">
                  <label
                    for="vendorName"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Vendor Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="vendorName"
                    id="vendorName"
                    value={vendorData.vendorName}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                    placeholder="Enter Vendor Name"
                    required
                  />
                </div>
                <div className="">
                  <label
                    for="bankAccountNo"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Bank Account Number <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="bankAccountNo"
                    id="bankAccountNo"
                    value={vendorData.bankAccountNo}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                    placeholder="Enter Account Number"
                    required
                  />
                </div>
                <div className="">
                  <label
                    for="bankName"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Bank Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    value={vendorData.bankName}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                    placeholder="Enter Bank Name"
                    required=""
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="">
                  <label
                    for="addressLine1"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Address Line 1 <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    id="addressLine1"
                    name="addressLine1"
                    rows="4"
                    value={vendorData.addressLine1}
                    onChange={handleChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
                    placeholder="Address 1"
                  ></textarea>
                </div>
                <div className="">
                  <label
                    for="addressLine2"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Address Line 2 <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    id="addressLine2"
                    name="addressLine2"
                    rows="4"
                    value={vendorData.addressLine2}
                    onChange={handleChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
                    placeholder="Address 2"
                  ></textarea>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col ">
                  <div className="">
                    <label
                      for="city"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={vendorData.city}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                      placeholder="Enter City Name"
                      required=""
                    />
                  </div>
                  <div className="">
                    <label
                      for="country"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      value={vendorData.country}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                      placeholder="Enter Country Name"
                      required=""
                    />
                  </div>
                  <div className="">
                    <label
                      for="zipCode"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Zipcode
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      value={vendorData.zipCode}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                      placeholder="Enter Zipcode"
                      required=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {isEdit ? (
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={handleUpdateVendor}
              >
                Edit Vendor
              </button>
            ) : (
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={handleCreateVendor}
              >
                Add Vendor
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateVendor;

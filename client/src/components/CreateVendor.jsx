import React, { useState } from "react";
import axios from "axios";

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

const CreateVendor = ({ handleCreateVendorModal, isOpen }) => {
  const [vendorData, setVendorData] = useState(initialState);

  const handleChange = (e) => {
    setVendorData({
      ...vendorData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateVendor = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/vendors/", vendorData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.success) {
        setVendorData(initialState);
        handleCreateVendorModal();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      }  overflow-y-auto justify-center  items-center`}
    >
      <div className="p-4 ">
        <div className=" bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <h3 className="text-lg font-semibold text-gray-900 ">
              Details Of Vendor
            </h3>
            <button
              onClick={() => handleCreateVendorModal()}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
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

          <form className="p-4 md:p-5" onSubmit={handleCreateVendor}>
            <div className="grid gap-4 mb-4 grid-cols-1 md:grid-cols-3">
              <div>
                <div className="">
                  <label
                    for="vendorName"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Vendor Name
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
                    Bank Account Number
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
                    Bank Name
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
              <div>
                <div className="">
                  <label
                    for="addressLine1"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Address Line 1
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
                    Address Line 2
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
              <div>
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

            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Add Vendor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateVendor;

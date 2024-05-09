import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const VendorList = () => {
  return (
    <div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right">
            Vendor List
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-400">
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
          <tbody>
            <tr className="bg-white border-b">
              <td scope="row" className="px-6 py-4  border-b border-gray-200 ">
                Rohit Rambade
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                58784585458
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                Bank Of Maharashtra
              </td>
              <td className="px-6 py-4 border-b border-gray-200 space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center space-x-2">
                  <FaEdit /> <span>Edit</span>
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center space-x-2">
                  <MdDeleteForever /> <span>Delete</span>
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4  border-b border-gray-200   ">XYZ</td>
              <td className="px-6 py-4 border-b border-gray-200">4654654654</td>
              <td className="px-6 py-4 border-b border-gray-200">
                Bank Of India
              </td>
              <td className="px-6 py-4 border-b border-gray-200 space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center space-x-2">
                  <FaEdit /> <span>Edit</span>
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center space-x-2">
                  <MdDeleteForever /> <span>Delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorList;

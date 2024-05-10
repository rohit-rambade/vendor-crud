import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeletePopup } from "../slices/vendorSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { CgDanger } from "react-icons/cg";

const Popup = ({ id }) => {
  const { deletePopup } = useSelector((state) => state.vendor);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleDelete = async () => {
    if (!isAuthenticated) {
      toast.error("Please log in with your Google account to create vendor.");
    } else {
      try {
        dispatch(setDeletePopup(!deletePopup));

        toast.loading("Deleting ...");
        const { data } = await axios.delete(`api/vendors/${id}`);

        if (data.success) {
          toast.dismiss();
          toast.success(data.message);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.dismiss();
        toast.error(error.response.data.message || "An error occurred.");
      }
    }
  };
  return (
    <div>
      <div className="fixed inset-0 flex justify-center items-center ">
        <div className="relative p-4 w-full max-w-md max-h-full  ">
          <div className="relative bg-white rounded-lg shadow-2xl ">
            <div className="p-4 md:p-5 text-center">
              <div className="flex justify-center">
                <CgDanger size={50} color="red" />
              </div>

              <h3 className="mb-5 text-lg font-normal text-black ">
                Are you sure you want to delete ?
              </h3>
              <button
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                onClick={handleDelete}
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100      "
                onClick={() => dispatch(setDeletePopup(!deletePopup))}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

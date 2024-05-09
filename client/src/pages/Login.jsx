import React from "react";

const Login = () => {
  return (
    <div className="flex mt-16">
      <div className="m-auto p-5 ">
        <div className="rounded-xl bg-white shadow-xl">
          <div className="p-6 sm:p-16 flex flex-col justify-center items-center">
            <div className="space-y-4">
              <h2 className="mb-8 text-2xl text-center text-black font-bold">
                Welcome To Vendor Management
              </h2>
            </div>
            <div className="">
              <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700  hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900  hover:shadow transition duration-150">
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Login with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

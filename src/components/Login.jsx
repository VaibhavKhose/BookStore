import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      {/* Modal for login */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box border-[2px] dark:bg-black bg-white">
          {/* Close button */}
          <Link
            to="/"
            className="btn btn-sm rounded hover:bg-red-500 btn-ghost absolute right-2 top-2"
          >
            X
          </Link>

          <h3 className="font-bold text-lg">Login!</h3>
          <div>
            {/* Email input */}
            <label className="text-black dark:bg-slate-900 dark:text-white mt-4 my-2">
              Email:
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter user email"
              className="w-60 px-3 rounded-md outline-none dark:text-white text-black bg-gray-100"
            />
            <br />

            {/* Password input */}
            <label className="text-black dark:bg-slate-900 dark:text-white mt-7 my-2">
              Password:
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter user password"
              className="w-60 px-3 rounded-md outline-none dark:text-white text-black bg-gray-100"
            />
            <br />

            {/* Action buttons */}
            <div className="flex justify-start items-center mt-3">
              <button
                type="button"
                className="px-3 py-2 cursor-pointer hover:bg-pink-600 bg-pink-400 rounded"
              >
                Login
              </button>
              <p className="ml-4">
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="cursor-pointer underline text-blue-400 hover:text-blue-700"
                >
                  Signup!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Login;

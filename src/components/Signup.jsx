import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = () => {
    if (!name || !email || !password) {
      setErrorMessage("Please fill all the required fields.");
    } else if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      setErrorMessage("");
      // Log the input data as an object
      const formData = { name, email, password };
      console.log("Signup successful", formData);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-pink-200">
        <div className="modal-box border-[2px] dark:bg-yellow-200 bg-white">
          <Link
            to="/"
            className="btn btn-sm rounded text-black hover:bg-red-500 btn-ghost absolute right-2 top-2"
          >
            X
          </Link>
          <h3 className="font-bold text-black mb-4 underline">Signup</h3>
          <div>
            <span className="text-black mt-4 my-2">Name:</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-60 px-3 rounded-md outline-none text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <span className="text-black mt-4 my-2">Email:</span>
            <br />
            <input
              type="text"
              placeholder="Enter your email"
              className="w-60 px-3 rounded-md outline-none text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <span className="text-black mt-4 my-2">Password:</span>
            <br />
            <input
              type="password"
              placeholder="Create a password"
              className="w-60 px-3 rounded-md text-black outline-none dark:text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
            <div className="flex justify-start items-center mt-4">
              <button
                onClick={handleSignup}
                className="cursor-pointer underline text-black hover:bg-blue-600 px-3 py-2 bg-blue-300 rounded"
              >
                Signup
              </button>
              <p className="text-black mx-4">
                Have an account?{" "}
                <button
                  className="cursor-pointer underline text-black hover:bg-blue-600 px-3 py-2 bg-blue-300 rounded"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
              </p>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

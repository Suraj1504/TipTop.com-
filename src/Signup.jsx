import React from "react";

function Signup() {
  return (
    <div className="h-screen px-12 py-6 bg-gray-200 ">
      <div className="flex flex-col h-full px-32 py-12 bg-white">
        <h1 className="pb-4 font-sans text-3xl font-semibold text-gray-700">
          Signup
        </h1>
        <div className="flex flex-col w-full h-full p-4 border border-gray-500 rounded-sm">
          <label
            htmlFor="email-address"
            className="mt-2 font-sans font-medium text-gray-700 text-md"
          >
            Username
          </label>
          <input
            id="email-address"
            type="email"
            autoComplete="email"
            required
            className="relative block w-full p-2 text-gray-900 border border-gray-400 appearance-none focus:outline-none"
          />
          <label
            htmlFor="email-address"
            className="mt-2 font-sans font-medium text-gray-700 text-md"
          >
            Email address
          </label>
          <input
            id="email-address"
            type="email"
            autoComplete="email"
            required
            className="relative block w-full p-2 text-gray-900 border border-gray-400 appearance-none focus:outline-none"
          />

          <label
            htmlFor="email-address"
            className="mt-3 font-sans font-medium text-gray-700 text-md"
          >
            Password
          </label>
          <input
            id="email-address"
            type="email"
            autoComplete="email"
            required
            className="relative block w-full p-2 text-gray-900 border border-gray-400 appearance-none focus:outline-none"
          />
          <button className="py-1 mt-4 text-lg font-bold text-white rounded-md px-7 bg-primary-default hover:bg-primary-dark w-fit">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;

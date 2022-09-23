import React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function callLoginApi() {
    event.preventDefault();
    console.log("Sending data", email, password);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="h-screen px-12 py-6 bg-gray-200 ">
      <form
        onSubmit={callLoginApi}
        className="flex flex-col h-full px-32 py-12 bg-white"
      >
        <h1 className="pb-4 font-sans text-3xl font-semibold text-gray-700">
          Login
        </h1>
        <div className="flex flex-col w-full h-full p-4 border border-gray-500 rounded-sm">
          <label
            htmlFor="email-address"
            className="mt-2 font-sans font-medium text-gray-700 text-md"
          >
            Username or email address
          </label>
          <input
            value={email}
            onChange={handleEmailChange}
            id="email-address"
            className="relative block w-full p-2 text-gray-900 border border-gray-400 appearance-none focus:outline-none"
          />
          <label
            htmlFor="email-address"
            className="mt-3 font-sans font-medium text-gray-700 text-md"
          >
            Password
          </label>
          <input
            value={password}
            onChange={handlePasswordChange}
            id="email-address"
            className="relative block w-full p-2 text-gray-900 border border-gray-400 appearance-none focus:outline-none"
          />
          <div className="flex gap-1 mt-3">
            <input type="checkbox" id="forRemember" name="forRemember" />
            <label for="forRemember" className="font-medium text-gray-700 ">
              Remember me
            </label>
          </div>
          <button className="py-1 mt-1 text-lg font-bold text-white rounded-md px-7 bg-primary-default hover:bg-primary-dark w-fit">
            LOG IN
          </button>
          <a href="" className="mt-2 text-primary-default">
            Lost your password?
          </a>
        </div>

        <div></div>
      </form>
    </div>
  );
}

export default Login;

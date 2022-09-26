import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  function callLoginApi(values) {
    console.log("Sending data", values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  const { handleSubmit, values, handleChange, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: callLoginApi,
      validationSchema: schema,
    });

  return (
    <div className="h-screen px-12 py-6 bg-gray-200 ">
      <form
        onSubmit={handleSubmit}
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
            value={values.email}
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            id="email-address"
            className="relative block w-full p-2 text-gray-900 border border-gray-400 appearance-none focus:outline-none"
          />
          {touched.email && (
            <div className="text-primary-default">{errors.email}</div>
          )}
          <label
            htmlFor="password"
            className="mt-3 font-sans font-medium text-gray-700 text-md"
          >
            Password
          </label>
          <input
            value={values.password}
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            className="relative block w-full p-2 text-gray-900 border border-gray-400 appearance-none focus:outline-none"
          />
          {touched.password && (
            <div className="text-primary-default">{errors.password}</div>
          )}
          <div className="flex gap-1 mt-3">
            <input type="checkbox" id="forRemember" name="forRemember" />
            <label for="forRemember" className="font-medium text-gray-700 ">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="py-1 mt-1 text-lg font-bold text-white rounded-md px-7 bg-primary-default hover:bg-primary-dark w-fit"
          >
            LOG IN
          </button>
          <a href="" className="mt-2 text-primary-default">
            Lost your password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Signup() {
  function callSignupApi(values) {
    console.log(
      "Sending data",
      values.username,
      values.email,
      values.password,
      values.confirmPassword
    );
  }

  const Schema = Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().min(8).required(),
    confirmPassword: Yup.string()
      .required("password must be match")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const { handleSubmit, values, handleChange, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: callSignupApi,
      validationSchema: Schema,
    });

  return (
    <div className="px-12 py-6 bg-gray-200 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-auto h-full py-12 bg-white"
      >
        <div className="flex flex-col h-full p-4 border border-gray-500 rounded-sm w-96">
          <h1 className="pb-4 font-sans text-3xl font-semibold text-gray-700">
            Sign Up
          </h1>
          <label
            htmlFor="username"
            className="mt-2 font-sans font-medium text-gray-700 text-md"
          >
            Username
          </label>
          <input
            value={values.username}
            name="username"
            type="name"
            onChange={handleChange}
            onBlur={handleBlur}
            id="username"
            className="relative block w-full p-2 text-gray-900 border border-gray-400 appearance-none focus:outline-none"
          />
          {touched.username && errors.username && (
            <div className="text-primary-default">{errors.username}</div>
          )}
          <label
            htmlFor="email-address"
            className="mt-2 font-sans font-medium text-gray-700 text-md"
          >
            Email address
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
          {touched.email && errors.email && (
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
          {touched.password && errors.password && (
            <div className="text-primary-default">{errors.password}</div>
          )}
          <label
            htmlFor="confirm-password"
            className="mt-3 font-sans font-medium text-gray-700 text-md"
          >
            Confirm Password
          </label>
          <input
            value={values.confirmPassword}
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            id="confirm-password"
            className="relative block w-full p-2 text-gray-900 border border-gray-400 appearance-none focus:outline-none"
          />
          {touched.confirmPassword && errors.confirmPassword && (
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
            className="w-full py-1 mt-1 text-lg font-bold text-white rounded-md bg-primary-default hover:bg-primary-dark "
          >
            Sign up
          </button>
          <p className="mt-3 font-semibold text-center text-gray-700">OR</p>
          <div className="flex justify-center gap-1 mt-3">
            <p>Already a user?</p>
            <Link className="underline text-primary-default " to="/Login">
              LOGIN
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;

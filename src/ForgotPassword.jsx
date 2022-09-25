import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function ForgotPassword() {
  function callForgotPassApi(values) {
    console.log("Sending data", values.email);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  const { handleSubmit, values, handleChange, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      onSubmit: callForgotPassApi,
      validationSchema: schema,
    });

  return (
    <div className="px-12 py-6 bg-gray-200 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-auto h-full py-12 bg-white"
      >
        <div className="flex flex-col h-full p-4 border border-gray-500 rounded-sm w-96">
          <h1 className="pb-4 font-sans text-3xl font-semibold text-center text-gray-700">
            Forgot Password
          </h1>
          <p className="text-center text-gray-700">
            Enter your email and we'll send you a link to reset your password
          </p>
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
          {touched.email && (
            <div className="text-primary-default">{errors.email}</div>
          )}
          <button
            type="submit"
            className="w-full py-1 mt-1 text-lg font-bold text-white rounded-md bg-primary-default hover:bg-primary-dark "
          >
            Submit
          </button>

          <Link
            to="/Signup"
            className="flex items-center justify-center gap-1 mt-4"
          >
            <IoIosArrowBack />
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;

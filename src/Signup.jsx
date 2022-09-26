import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signup() {
  function callSignupApi(values) {
    console.log("Sending data", values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    repeatPassword: Yup.string().min(8).required(),
  });

  const { handleSubmit, values, handleChange, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        repeatPassword: "",
      },
      onSubmit: callSignupApi,
      validationSchema: schema,
    });

  return (
    <div className="h-screen px-12 py-6 bg-gray-200 ">
      <form className="flex flex-col h-full px-32 py-12 bg-white">
        onSubmit={handleSubmit}
        <h1 className="pb-4 font-sans text-3xl font-semibold text-gray-700">
          Signup
        </h1>
        <div className="flex flex-col w-full h-full p-4 border border-gray-500 rounded-sm">
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
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="relative block w-full p-2 text-gray-900 border border-gray-400 appearance-none focus:outline-none"
          />
          <label
            htmlFor="password"
            className="mt-2 font-sans font-medium text-gray-700 text-md"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="password"
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="relative block w-full p-2 text-gray-900 border border-gray-400 appearance-none focus:outline-none"
          />

          <label
            htmlFor="repeat-password"
            className="mt-3 font-sans font-medium text-gray-700 text-md"
          >
            Repeat Password
          </label>
          <input
            id="repeat-password"
            type="password"
            autoComplete="password"
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="relative block w-full p-2 text-gray-900 border border-gray-400 appearance-none focus:outline-none"
          />
          <div className="flex gap-1 mt-3">
            <input type="checkbox" id="forRemember" name="forRemember" />
            <label for="forRemember" className="font-medium text-gray-700 ">
              Remember me
            </label>
          </div>
          <button className="py-1 mt-4 text-lg font-bold text-white rounded-md px-7 bg-primary-default hover:bg-primary-dark w-fit">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

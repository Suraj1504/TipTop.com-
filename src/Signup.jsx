import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import Input from "./Input";

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
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
    comfirmPassword: "",
  };

  return (
    <div className="px-12 py-6 bg-gray-200 ">
      <Formik
        initialValues={initialValues}
        onSubmit={callSignupApi}
        validationSchema={Schema}
        validateOnMount
      >
        <Form className="flex flex-col items-center w-auto h-full py-12 bg-white">
          <div className="flex flex-col h-full p-4 border border-gray-500 rounded-sm w-96">
            <h1 className="pb-4 font-sans text-3xl font-semibold text-gray-700">
              Sign Up
            </h1>
            <Input
              label="Username"
              id="username"
              name="username"
              type="username"
              autoComplete="username"
              required="required"
            />
            <Input
              label="Email address"
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required="required"
            />
            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              required="required"
            />

            <Input
              label="Confirm password"
              id="confirm-password"
              name="confirmPassword"
              type="password"
              autoComplete="confirmPassword"
              required="required"
            />

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
        </Form>
      </Formik>
    </div>
  );
}

export default Signup;

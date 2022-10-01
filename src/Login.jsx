import React, { isValidElement } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./Input";

function Login() {
  function callLoginApi(values) {
    console.log("Sending data", values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="px-12 py-6 bg-gray-200 ">
      <Formik
        initialValues={initialValues}
        onSubmit={callLoginApi}
        validationSchema={schema}
        validateOnMount
      >
        <Form className="flex flex-col items-center w-auto h-full py-12 bg-white">
          <div className="flex flex-col h-full p-4 border border-gray-500 rounded-sm w-96">
            <h1 className="pb-4 font-sans text-3xl font-semibold text-gray-700">
              Login
            </h1>

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
              autoComplete="current-password"
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
              LOG IN
            </button>
            <Link
              to="/ForgotPassword/"
              className="self-end mt-2 text-primary-default"
            >
              Forgot password?
            </Link>
            <p className="font-semibold text-center text-gray-700">OR</p>
            <div className="flex justify-center gap-1 mt-3">
              <p>Need an account?</p>
              <Link className="underline text-primary-default " to="/Signup">
                SIGN UP
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;

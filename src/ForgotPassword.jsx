import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Input from "./Input";
import { Formik, Form } from "formik";

function ForgotPassword() {
  function callForgotPassApi(values) {
    console.log("Sending data", values.email);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  const initialValues = {
    email: "",
  };

  return (
    <div className="h-full px-12 py-6 bg-gray-200 ">
      <Formik
        initialValues={initialValues}
        onSubmit={callForgotPassApi}
        validationSchema={schema}
        validateOnMount
      >
        <Form className="flex flex-col items-center w-auto h-full py-12 bg-white">
          <div className="flex flex-col h-full p-4 border border-gray-500 rounded-sm w-96">
            <h1 className="pb-4 font-sans text-3xl font-semibold text-center text-gray-700">
              Forgot Password
            </h1>
            <p className="text-center text-gray-700">
              Enter your email and we'll send you a link to reset your password
            </p>
            <Input
              label="Email address"
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required="required"
            />
            <button
              type="submit"
              className="w-full py-1 mt-1 text-lg font-bold text-white rounded-md bg-primary-default hover:bg-primary-dark "
            >
              Submit
            </button>

            <Link
              to="/Login"
              className="flex items-center justify-center gap-1 mt-4"
            >
              <IoIosArrowBack />
              Back to login
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ForgotPassword;

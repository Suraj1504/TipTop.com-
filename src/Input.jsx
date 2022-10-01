import { useField } from "formik";
import React from "react";

function Input({ name, label, id, ...rest }) {
  const field = useField(name);
  const [data, meta] = field;

  const { value, onBlur, onChange } = data;
  const { error, touched } = meta;

  let borderClass = "border-gray-400";

  if (error && touched) {
    borderClass = "border-primary-default";
  }

  return (
    <div>
      <label
        htmlFor={id}
        className="mt-2 font-sans font-medium text-gray-700 text-md"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={
          "relative block w-full p-2 text-gray-900 border appearance-none focus:outline-none" +
          " " +
          borderClass
        }
        {...rest}
      />
      {touched && error && <div className="text-primary-default">{error}</div>}
    </div>
  );
}

export default Input;

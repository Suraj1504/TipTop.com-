import React from "react";
import { Link } from "react-router-dom";

function MobileView() {
  return (
    <div className="flex flex-col ml-4 space-y-2">
      <Link className="font-sans text-gray-700 text-md" to="/">
        HOME
      </Link>
      <Link className="font-sans text-gray-700 text-md" to="">
        ABOUT
      </Link>
      <Link className="font-sans text-gray-700 text-md" to="/Login">
        ACCOUNT
      </Link>
    </div>
  );
}

export default MobileView;

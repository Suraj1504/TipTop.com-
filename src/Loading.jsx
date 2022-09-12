import React from 'react';
import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return (
    <div className="grow text-primary-dark text-6xl flex items-center justify-center">
      <ImSpinner9 className="animate-spin"/>
    </div>
  );
}

export default Loading;
import React, {useEffect} from "react";

function NoMatching( {children} ) {
  return (
    <div className="p-10 bg-yellow-500 text-white text-center text-3xl">
      {children}
    </div>
  );
}

export default NoMatching;
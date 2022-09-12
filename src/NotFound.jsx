import React from "react";

function NotFound() {
  return (
  <div className="flex flex-col items-center justify-center w-full h-full gap-2">
    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rtSihisMh0epigo87-Pz2EEBAuU5aCPPtA&usqp=CAU"/>
    <p className="text-xl font-bold">Page Not Found</p>
    <a className="bg-indigo-900 text-bold text-center px-4 py-1 text-white rounded-xl" href="/">Go Home</a>
  </div>
)}

export default NotFound;
import React from "react";

function Footer(Data) {
  return (
    <div className="py-4 bg-gray-500">
      <div className="flex items-center justify-between max-w-6xl mx-5 md:mx-auto">
        <p className="text-white">{Data.copyright}</p>
        <p className="text-white">{Data.poweredBy}</p>
      </div>
    </div>
  );
}

export default Footer;

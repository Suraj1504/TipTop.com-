import React from 'react';

function Footer(Data) {
  return (
    <div className="bg-gray-500 py-4">
      <div className="max-w-6xl flex justify-between md:mx-auto mx-5 items-center">
        <p className="text-white">{Data.copyright}</p>
        <p className="text-white" >{Data.poweredBy}</p>
      </div>
    </div>
  );
}

export default Footer;
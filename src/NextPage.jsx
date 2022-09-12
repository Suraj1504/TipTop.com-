import React from 'react';

function NextPage(Data) {
  return (
  <div className="mt-8 bg-white text-primary-default hover:bg-primary-dark hover:text-white border border-red-500 text-center h-8 w-8">
  <a href={Data.link}>{Data.name}</a>
  </div>
  );
}

export default NextPage;
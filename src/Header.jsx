import React from "react";
import NavBar from "./NavBar";
import MobileView from "./MobileView";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Header({ productCount }) {
  const [isHemburgerOpen, setHemburgerOpne] = useState(false);

  function handleHemburgerClick() {
    setHemburgerOpne(!isHemburgerOpen);
  }

  return (
    <div className="flex py-4 bg-white ">
      {/* <GiHamburgerMenu
        onClick={handleHemburgerClick}
        className="ml-4 text-3xl text-gray-900 md:invisible"
      />
      {isHemburgerOpen && <MobileView className="md:invisible" />} */}

      <NavBar productCount={productCount} />
    </div>
  );
}

export default Header;

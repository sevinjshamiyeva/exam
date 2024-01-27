import React from "react";
import "./header.scss";
import "../../style/reset.scss";
import Navbar from "../navbar";

function Header() {
  return (
    <>
      <header>
        <Navbar />
        <div className="text">
          <div className="text1">
            Special Dish.
            <div className="text2">By Chef Francis Smith</div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

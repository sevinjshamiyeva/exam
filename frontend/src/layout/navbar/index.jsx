import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import "../../style/reset.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          Pulse
          <span id="point">.</span>
        </div>
        <div className="center">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/basket">
                Basket
              </Link>
            </li>
            <li>
              <Link className="link" to="/wishlist">
                Wishlist
              </Link>
            </li>
            <li>
              <Link className="link" to="/addPages">
                addPAges
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <span id="reserv">Reservations </span>
          <FontAwesomeIcon style={{ color: "white" }} icon={faPhone} />
          <span id="number">652-345 3222 11</span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

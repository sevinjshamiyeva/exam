import React from "react";
import "./section1.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import img from "../../assets/sign.png";

function Section1() {
  return (
    <>
      <section className="section1">
        <div className="container">
          <div className="title">
            <FontAwesomeIcon icon={faGear} style={{ fontSize: "60px" }} />
            <div className="welcome">
              <span id="line"></span>
              <span>Welcome</span>
              <span id="line"></span>
            </div>
          </div>

          <div className="boxes">
            <div className="box1">
              <p>2002</p>
              <div className="text2">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </div>
            </div>
            <div className="box1">
              <p>2002</p>
              <div className="text2">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </div>
            </div>
            <div className="box1">
              <p>2002</p>
              <div className="text2">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </div>
            </div>
          </div>
          <div className="image">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;

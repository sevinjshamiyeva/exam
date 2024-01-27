import React from "react";
import "./section2.scss";
import "../../style/reset.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineGlass } from "@fortawesome/free-solid-svg-icons";

function Section2() {
  return (
    <section className="section2">
      <div className="container">
        <div className="textss">
          <FontAwesomeIcon
            icon={faWineGlass}
            style={{ fontSize: "30px", color: "white" }}
          />
          <div className="test">
            <span id="line"></span>
            <span>Testimonials</span>
            <span id="line"></span>
          </div>
        </div>
        <div className="textDetail">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
          quidem. Quidem error, perferendis doloribus illum nihil tempore
          obcaecati veniam dolores nemo aliquam quibusdam minus accusantium
          pariatur sapiente blanditiis exercitationem molestiae fugit asperiores
          modi libero at. Nesciunt molestias quisquam voluptatem? Excepturi
          veritatis aperiam fugiat soluta. Inventore expedita vel beatae
          possimus nihil.
        </div>
      </div>
    </section>
  );
}

export default Section2;

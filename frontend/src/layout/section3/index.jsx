import "./section3.scss";
import "../../style/reset.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faMugHot } from "@fortawesome/free-solid-svg-icons";

function Section3() {
  return (
    <section className="section3">
      <div className="container">
        <div className="textss">
          <FontAwesomeIcon icon={faUtensils} style={{ fontSize: "30px" }} />
          <div className="test">
            <span id="line"></span>
            <span>Our Services</span>
            <span id="line"></span>
          </div>
        </div>
        <div className="boxes">
          <div className="box1">
            <FontAwesomeIcon icon={faMugHot} />
            <p>Breakfast</p>
            <div className="texts">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum.
            </div>
          </div>
          <div className="box2">
            <FontAwesomeIcon icon={faMugHot} />
            <p>Breakfast</p>
            <div className="texts">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum.
            </div>
          </div>
          <div className="box3">
            <FontAwesomeIcon icon={faMugHot} />
            <p>Breakfast</p>
            <div className="texts">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum.
            </div>
          </div>
          <div className="box4">
            <FontAwesomeIcon icon={faMugHot} style={{ fontSize: "15px" }} />
            <p>Breakfast</p>
            <div className="texts">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;

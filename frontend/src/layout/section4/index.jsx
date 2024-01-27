import React from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import "./section4.scss";
import "../../style/reset.scss";
import Card from "../../components/card/card";
import { useSelector, useDispatch } from "react-redux";
import { getallproducts } from "../../redux/slices/productSlices";

function Section4() {
  const product = useSelector((state) => state.products.product);
  console.log(product)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallproducts());
  }, [dispatch]);
  return (
    <section className="section4">
      <div className="container">
        <div className="textss">
          <FontAwesomeIcon
            icon={faUtensils}
            style={{ fontSize: "30px", color: "white", marginTop: "20px" }}
          />
          <div className="test">
            <span id="line"></span>
            <span>Our Services</span>
            <span id="line"></span>
          </div>
        </div>
        <div className="eats">
          <div className="breakfast">Breakfast</div>
          <div className="brunch">Brunch</div>
          <div className="lunch">Lunch</div>
          <div className="dinner">Dinner</div>
        </div>
        <div className="cardContainer">
          {product &&
            product.map((elem, i) => {
              return <Card key={i} elem={elem} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default Section4;

import React from "react";
import "./card.scss";
import "../../style/reset.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Button, Flex } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addwishlist } from "../../redux/slices/wishlistSlices";
import { useNavigate } from "react-router-dom";

function Card({ elem }) {
  const wishlist = useSelector((state) => state.wishlists.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <h3>{elem.name}</h3>
        <div className="carddetail">
          <div className="ingredients">with wild mushrooms and asparagus</div>
          <div className="space">................................</div>
          <div className="price">${elem.price}</div>
        </div>
        <div className="icons">
          <FontAwesomeIcon
            icon={faHeart}
            style={{
              color: "#e60505",
              fontSize: "30px",
              marginTop: "10px",
              marginRight: "20px",
            }}
            onClick={() => {
              dispatch(addwishlist(elem));
            }}
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ color: "#FFD43B", fontSize: "30px", marginRight: "20px" }}
          />
          <Button type="primary" ghost onClick={()=>{
            navigate(`/foods/${elem._id}`)
          }}>
            Detail
          </Button>
        </div>
      </div>
    </>
  );
}

export default Card;

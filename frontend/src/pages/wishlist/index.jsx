import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card/card";
import "./wishlist.scss";
import "../../style/reset.scss";
import Navbar2 from "../../layout/navbar2";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlists.wishlist);

  return (
    <>
      <Navbar2 />
      <section className="section5">
        <div className="container">
          {wishlist &&
            wishlist.map((elem, i) => {
              return <Card key={i} elem={elem} />;
            })}
        </div>
      </section>
    </>
  );
}

export default Wishlist;

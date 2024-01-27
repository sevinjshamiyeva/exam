import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios"
import Card from "../../components/card/card";
import { useSelector, useDispatch } from "react-redux";
import {getallproducts} from "../../redux/slices/productSlices"

function Detail() {
  const {id} =useParams()
  console.log(id)
  const product = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallproducts());
  }, [dispatch]);
const arr=product?.find((elem)=>elem._id===id)
  return <div>
   <>
   <div>
    <ul>
      {arr&&(
        <li>{arr.name}</li>
      )}
    </ul>
    

   </div>
  
   </>
  </div>;
}

export default Detail;

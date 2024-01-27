import React, { useState } from "react";
import Navbar2 from "../../layout/navbar2";
import BasicTable from "../../components/table/table";
import "../../style/reset.scss"
import Form from "../../components/form";
function AddPages() {
  const [inpValue,setInpValue]=useState("")
console.log(inpValue)
  return (
    <>
      <Navbar2 />
      <div className="container">
        <Form/>
        <div className="input" style={{width:"200px",margin:"0 auto",marginTop:"30px"}}><input type="text" placeholder="search" style={{width:"200px",height:"30px"}} onChange={(e)=>{
          setInpValue(e.target.value.toLowerCase())
        }} /></div>
      <BasicTable inpValue={inpValue}/>

      </div>
      
    </>
  );
}

export default AddPages;

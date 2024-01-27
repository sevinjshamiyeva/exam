import React from 'react'
import TextField from '@mui/material/TextField';
import {Button} from "antd"
import { useFormik } from 'formik';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { addTable } from '../../redux/slices/productSlices';


function Form(){
    const product = useSelector((state) => state.products.product);
    const dispatch = useDispatch();
    const {handleSubmit,handleChange} = useFormik({
     initialValues: {
       name:'',
       ingredients:"",
       price:""

     },
     onSubmit: values => {
      console.log(values)
      dispatch(addTable(values))
      
      
     },
   });
  return (
   <>

   <form style={{display:"flex",flexDirection:"column",width:"400px",
   margin:"0 auto",marginTop:"20px"
}} onSubmit={handleSubmit}>
   <TextField label="name" variant="standard" name='name'  onChange={handleChange} />
   <TextField label="ingredients" variant="standard" name='ingredients' onChange={handleChange} />
   <TextField label="prices" variant="standard" name='price' onChange={handleChange}/>
   <button type='submit'>add</button>
   <Button  style={{backgroundColor:"green" ,width:"100px"}}>add</Button>

   </form>
   
   
   </>
  )
}

export default Form
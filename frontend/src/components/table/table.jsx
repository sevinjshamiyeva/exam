import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import {getallproducts} from "../../redux/slices/productSlices"
import {Button} from "antd"
import { tableDelete } from '../../redux/slices/productSlices';




export default function BasicTable({inpValue}) {
    const product = useSelector((state) => state.products.product);
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallproducts());
  }, [dispatch]);
   
    console.log(product)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">ingredients</TableCell>
            <TableCell align="right">prices</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {product&&product.filter((elem)=>elem.name.includes(inpValue)).map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.name}
              </TableCell>
              <TableCell align="right">{row.ingredient}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><Button type="primary" danger onClick={()=>{
                dispatch(tableDelete(row))
              }}>Delete</Button></TableCell>
          
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
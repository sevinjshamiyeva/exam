import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getallproducts = createAsyncThunk("getallproducts", async () => {
  const response = await axios("http://localhost:3000/api/foods");
  console.log(response.data);
  return response.data;
});

const initialState = {
  product: [],
  error: "",
  loading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    tableDelete: (state, action) => {
      state.product=state.product.filter((elem)=>elem._id !==action.payload._id)
      axios.delete(`http://localhost:3000/api/foods/${action.payload._id}`).then((res)=>{
        console.log(res.data)
      })
      

    },
    addTable: (state, action) => {
      state.product.push(action.payload)
      axios.post("http://localhost:3000/api/foods", action.payload)
    .then((res) => {
      console.log(res.data);
      
    })
    .catch((error) => {
      console.error("AddTable Error:", error);
     
    });
    },
    
  },

  extraReducers: (builder) => {
    //pending
    builder.addCase(getallproducts.pending, (state, action) => {
      state.loading = true;
      state.product = action.payload;
    });
    //fulfilled
    builder.addCase(getallproducts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.product = action.payload;
    });
    //rejected
    builder.addCase(getallproducts.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const {tableDelete,addTable} = productSlice.actions;

export default productSlice.reducer;

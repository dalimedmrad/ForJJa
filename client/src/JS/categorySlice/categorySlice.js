import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const addCategory = createAsyncThunk("AddCategory", async (name) => {
  try {
    console.log(name)
    let result = await axios.post("http://localhost:5000/api/category",name);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});
export const getAllCategories = createAsyncThunk("getAllCategories", async () => {
  try {
    const result = await axios.get("http://localhost:5000/api/category/");
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
export const deleteCategory = createAsyncThunk("deleteCategory", async (id) => {
  try {
    const result = await axios.delete(`http://localhost:5000/api/category/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});


export const updateCategory = createAsyncThunk("modifier/trajet",async (cat) => {
    try {
      const result = await axios.put(`http://localhost:5000/api/category/${cat._id}`, cat);
      return result.data;
    } catch (error) {
      console.log(error)
    }
  }
);
const initialState = {
    category: null,
    status: null,
    categories:null,
};
  
  export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: {
      [addCategory.pending]: (state) => {
        state.status = "pending";
      },
      [addCategory.fulfilled]: (state,action) => {
        state.status = "success";
        state.category = action.payload.response;
      },
      [addCategory.rejected]: (state) => {
        state.status = "fail";
      },
      [getAllCategories.pending]: (state) => {
        state.status = "pending";
      },
      [getAllCategories.fulfilled]: (state,action) => {
        state.status = "success";
        state.categories = action.payload.response;
      },
      [getAllCategories.rejected]: (state) => {
        state.status = "fail";
      },

      [updateCategory.pending]: (state) => {
        state.status = "pending";
      },
      [updateCategory.fulfilled]: (state,action) => {
        state.status = "success";
      },
      [updateCategory.rejected]: (state) => {
        state.status = "fail";
      },
      [deleteCategory.pending]: (state) => {
        state.status = "pending";
      },
      [deleteCategory.fulfilled]: (state,action) => {
        state.status = "success";
      },
      [deleteCategory.rejected]: (state) => {
        state.status = "fail";
      },
    },
});

// export const {} = categorySlice.actions;

export default categorySlice.reducer;
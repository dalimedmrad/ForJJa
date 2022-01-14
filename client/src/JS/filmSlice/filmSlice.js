import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addFilm = createAsyncThunk("addFilm", async (film) => {
    try {
      let result = await axios.post("http://localhost:5000/api/film",film);
      return result.data;
    } catch (error) {
      console.log(error)
    }
});

export const getAllfilms = createAsyncThunk("getAllfilms", async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/film/");
      return result.data;
    } catch (error) {
      console.log(error);
    }
});
export const deleteFilm = createAsyncThunk("deleteFilm", async (id) => {
try {
    const result = await axios.delete(`http://localhost:5000/api/film/${id}`);
    return result.data;
} catch (error) {
    console.log(error);
}
});
  
export const updateFilm = createAsyncThunk("updateFilm",async (film) => {
    try {
    const result = await axios.put(`http://localhost:5000/api/film/${film._id}`, film);
    return result.data;
    } catch (error) {
    console.log(error)
    }
}
);

const initialState = {
    film: null,
    status: null,
    films:null,
};


export const filmSlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: {
      [addFilm.pending]: (state) => {
        state.status = "pending";
      },
      [addFilm.fulfilled]: (state,action) => {
        state.status = "success";
        state.film = action.payload.response;
      },
      [addFilm.rejected]: (state) => {
        state.status = "fail";
      },
      [getAllfilms.pending]: (state) => {
        state.status = "pending";
      },
      [getAllfilms.fulfilled]: (state,action) => {
        state.status = "success";
        state.films = action.payload.response;
      },
      [getAllfilms.rejected]: (state) => {
        state.status = "fail";
      },

      [updateFilm.pending]: (state) => {
        state.status = "pending";
      },
      [updateFilm.fulfilled]: (state,action) => {
        state.status = "success";
      },
      [updateFilm.rejected]: (state) => {
        state.status = "fail";
      },
      [deleteFilm.pending]: (state) => {
        state.status = "pending";
      },
      [deleteFilm.fulfilled]: (state,action) => {
        state.status = "success";
      },
      [deleteFilm.rejected]: (state) => {
        state.status = "fail";
      },
    },
});

// export const {} = categorySlice.actions;

export default filmSlice.reducer;
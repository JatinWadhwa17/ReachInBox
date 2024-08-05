import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface userstate {
  ids: any;
  isLoading: boolean;
  isError: boolean;
}

const initialState: userstate = {
  ids: [],
  isLoading: false,
  isError: false,
};
const token = localStorage.getItem("token");

export const replyApi = createAsyncThunk(
  "get/loginApi",
  async (formdata) => {
    const gets = await axios.post(
      "https://hiring.reachinbox.xyz/api/v1/onebox/reply/:thread_id",
      { formdata },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return formdata;
  }
);

const replySlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(replyApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(replyApi.fulfilled, (state, action) => {
        state.ids = action.payload;
      })
      .addCase(replyApi.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default replySlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataarr: [],
};

export const partnerApi = createAsyncThunk("count/countApi", async () => {
  const response = await axios.get(
    "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com",
  );
  console.log(response,'res');
  return response;
});

const viewSlice = createSlice({
  name: "totalCount",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(partnerApi.fulfilled, (state, action) => {
      state.dataarr = action.payload;
    });
  },
});

export default viewSlice.reducer;
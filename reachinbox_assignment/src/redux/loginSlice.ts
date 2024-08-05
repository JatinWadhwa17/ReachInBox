import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataarr: [],
  isLoading:false,
  error:false
};

export const partnerApi = createAsyncThunk("count/countApi", async () => {
  const response = await axios.get(
    "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com",
  );
  return response.data;
});

const viewSlice = createSlice({
  name: "totalCount",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(partnerApi.pending,(state)=>{
      state.isLoading=true;
    })
    builder.addCase(partnerApi.fulfilled, (state, action) => {
      state.isLoading=false;
      state.dataarr = action.payload;
    });
    builder.addCase(partnerApi.rejected, (state) => {
      state.isLoading=false;
      state.error=true
    });
  },
});

export default viewSlice.reducer;
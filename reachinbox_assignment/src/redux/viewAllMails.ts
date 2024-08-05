import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataarr: [],
  isLoading:false,
  error:false,
};

export const getAllMailsApi = createAsyncThunk("count/countApi", async () => {
  const token=localStorage.getItem('token');
  const response = await axios.get(
    "https://hiring.reachinbox.xyz/api/v1/onebox/list",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
});

const getAllMailsSlice = createSlice({
  name: "totalCount",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMailsApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllMailsApi.fulfilled, (state, action) => {
      state.isLoading=false;
      state.dataarr = action.payload;
    });
    builder.addCase(getAllMailsApi.rejected, (state) => {
      state.error = true;
    });
  },
});

export default getAllMailsSlice.reducer;
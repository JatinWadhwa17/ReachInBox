import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataarr: [],
  isLoading:false,
  error:false,
};

export const getAllMailsApi = createAsyncThunk("count/countApi", async () => {
  const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiamF0aW42MjMyQGdtYWlsLmNvbSIsImlkIjoyNzcsImZpcnN0TmFtZSI6IkphdGluIiwibGFzdE5hbWUiOiJXYWRod2EifSwiaWF0IjoxNzIyNzkyNDY5LCJleHAiOjE3NTQzMjg0Njl9.SYHPgway6GXuixWTjHFsF2jGwISQps4CTk_PRD2QeWY'
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
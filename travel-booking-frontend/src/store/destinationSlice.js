import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../services/api";

const initialState = {
  destinations: [],
  packages: [],
  selectedDestination: null,
  filters: {
    budget: { min: 0, max: 100000 },
    duration: "",
    category: "",
    state: "",
  },
  isLoading: false,
  error: null,
};

export const fetchDestinations = createAsyncThunk(
  "destinations/fetchDestinations",
  async (filters = {}) => {
    const response = await api.get("/destinations", { params: filters });
    return response.data;
  }
);

export const fetchPackages = createAsyncThunk(
  "destinations/fetchPackages",
  async (filters = {}) => {
    const response = await api.get("/packages", { params: filters });
    return response.data;
  }
);

const destinationSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
    setSelectedDestination: (state, action) => {
      state.selectedDestination = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.destinations = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.packages = action.payload;
      });
  },
});

export const { setFilters, clearFilters, setSelectedDestination } =
  destinationSlice.actions;
export default destinationSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../services/api";

const initialState = {
  bookings: [],
  currentBooking: null,
  isLoading: false,
  error: null,
};

export const createBooking = createAsyncThunk(
  "bookings/createBooking",
  async (bookingData) => {
    const response = await api.post("/bookings", bookingData);
    return response.data;
  }
);

export const fetchUserBookings = createAsyncThunk(
  "bookings/fetchUserBookings",
  async () => {
    const response = await api.get("/bookings/user");
    return response.data;
  }
);

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setCurrentBooking: (state, action) => {
      state.currentBooking = action.payload;
    },
    clearCurrentBooking: (state) => {
      state.currentBooking = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentBooking = action.payload;
        state.bookings.push(action.payload);
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
      });
  },
});

export const { setCurrentBooking, clearCurrentBooking } = bookingSlice.actions;
export default bookingSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import destinationSlice from "./destinationSlice";
import bookingSlice from "./bookingSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    destinations: destinationSlice,
    bookings: bookingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

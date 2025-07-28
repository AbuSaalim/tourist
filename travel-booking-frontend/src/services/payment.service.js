import { api } from "./api";

export const paymentService = {
  createPaymentIntent: async (amount, currency = "INR") => {
    return await api.post("/payments/create-intent", { amount, currency });
  },

  processPayment: async (paymentData) => {
    return await api.post("/payments/process", paymentData);
  },

  verifyPayment: async (paymentId) => {
    return await api.get(`/payments/verify/${paymentId}`);
  },
};

import { create } from "zustand";
import api from "../api/axiosInstance";

export const useAppStore = create((set) => ({
  appName: "MERN Caterings",
  health: "",
  fetchHealth: async () => {
    try {
      const { data } = await api.get("/health");
      set({ health: data.message });
    } catch (error) {
      set({ health: "Server is not reachable." });
    }
  }
}));

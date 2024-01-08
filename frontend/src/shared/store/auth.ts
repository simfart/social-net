import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useAuthStore = create(
  devtools(
    immer((set) => ({
      isLoggedIn: !!window.localStorage.getItem("jwt"),
      setIsLoggedIn: (payload: any) =>
        set((state: any) => {
          state.isLoggedIn = payload;
        }),
    }))
  )
);

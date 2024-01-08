import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface IAuthStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (payload: boolean) => void;
}

export const useAuthStore = create<IAuthStore>()(
  devtools(
    immer((set) => ({
      isLoggedIn: !!window.localStorage.getItem("jwt"),
      setIsLoggedIn: (payload) =>
        set((state) => {
          state.isLoggedIn = payload;
        }),
    }))
  )
);

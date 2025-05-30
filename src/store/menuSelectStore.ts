import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
  resetSelectedMenu: () => void;
};

export const useMenuSelectStore = create<AuthState>()(
  persist(
    (set) => ({
      selectedMenu: "",
      setSelectedMenu: (menu: string) => set({ selectedMenu: menu }),
      resetSelectedMenu: () => set({ selectedMenu: "" }),
    }),
    {
      name: "menu-select-storage",
    },
  ),
);

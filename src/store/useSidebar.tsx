import { create } from "zustand";

interface SidebarState {
  sidebarItem: string;
  setSidebar: (item: string) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  sidebarItem: "nothing",
  setSidebar: (item: string) => set({ sidebarItem: item }),
}));

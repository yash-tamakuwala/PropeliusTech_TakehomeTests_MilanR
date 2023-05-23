import { DummyApiType } from "@/types/dummyApi";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface RootState {
  data: DummyApiType | null;
  setData: (data: DummyApiType | null) => void;
}

export const useStore = create<RootState>()(
  devtools(
    persist(
      (set) => ({
        data: null,
        setData: (data: DummyApiType | null) => set(() => ({ data })),
      }),
      {
        name: "main-storage",
      },
    ),
  ),
);

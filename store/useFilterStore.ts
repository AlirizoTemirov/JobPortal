import { create } from "zustand";

type FilterForm = {
  search: string;
  categoryFilter: string;
};

const initialState: FilterForm = {
  search: "",
  categoryFilter: "All Categories",
};

type Store = {
  filterForm: FilterForm;
  changeForm: (key: keyof FilterForm, value: string) => void;
  resetForm: () => void;
};

export const useFilterStore = create<Store>()((set) => ({
  filterForm: initialState,

  changeForm: (key, value) =>
    set((state) => ({
      filterForm: {
        ...state.filterForm,
        [key]: value,
      },
    })),

  resetForm: () => set({ filterForm: initialState }),
}));

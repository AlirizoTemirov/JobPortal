import { create } from "zustand";

type ApplicationForm = {
  fullName: string;
  email: string;
  jobId: string;
};

const initialState: ApplicationForm = {
  fullName: "",
  email: "",
  jobId: "",
};

type Store = {
  appliecFrom: ApplicationForm;
  modalOpen: boolean;
  setVisable: (visable: boolean) => void;
  changeForm: (key: keyof ApplicationForm, value: string) => void;
  resetForm: () => void;
};

export const useDetailPageStore = create<Store>()((set) => ({
  appliecFrom: initialState,

  changeForm: (key, value) =>
    set((state) => ({
      appliecFrom: {
        ...state.appliecFrom,
        [key]: value,
      },
    })),

  modalOpen: false,
  setVisable: (visable) => set(() => ({ modalOpen: visable })),
  resetForm: () => set({ appliecFrom: initialState }),
}));

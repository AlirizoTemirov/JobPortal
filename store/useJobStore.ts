import { create } from "zustand";

type JobForm = {
  title: string;
  company: string;
  location: string;
  salary: string;
  categoryId: string;
  jobType: string;
  description: string;
  requirements: string;
};

const initialState: JobForm = {
  title: "",
  company: "",
  location: "",
  salary: "",
  categoryId: "",
  jobType: "",
  description: "",
  requirements: "",
};

type Store = {
  jobForm: JobForm;
  changeForm: (key: keyof JobForm, value: string) => void;
  resetForm: () => void;
};

export const useJobStore = create<Store>()((set) => ({
  jobForm: initialState,

  changeForm: (key, value) =>
    set((state) => ({
      jobForm: {
        ...state.jobForm,
        [key]: value,
      },
    })),

  resetForm: () => set({ jobForm: initialState }),
}));

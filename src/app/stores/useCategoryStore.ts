import { create } from "zustand";

type CategoryJokes = {
  category: string;
  changeCategory: (category: string) => void;
};

const useCategoryStore = create<CategoryJokes>((set) => ({
  category: "random",
  changeCategory: (category) => set({ category: category }),
}));

export default useCategoryStore;

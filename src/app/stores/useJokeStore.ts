import { create } from "zustand";
type Joke = {
  joke: string;
  setJoke: (newJoke: string) => void;
};

const useJokeStore = create<Joke>((set) => ({
  joke: "",
  setJoke: (newJoke) => set({ joke: newJoke }),
}));

export default useJokeStore;

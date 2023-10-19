import { create } from "zustand";
import useFetchJoke from "../hooks/useFetchJoke";

type Joke = {
  joke: string;
  setJoke: (newJoke: string) => void;
};

const { joke } = useFetchJoke("https://api.chucknorris.io/jokes/random");

const useJokeStore = create<Joke>((set) => ({
  joke: joke,
  setJoke: (newJoke) => set({ joke: newJoke }),
}));

export default useJokeStore;

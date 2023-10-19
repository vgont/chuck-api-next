import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavJokesProps = {
  FavJokes: string[];
  addFavJoke: (joke: string) => void;
  rmvFavJoke: (jokeToRemove: string) => void;
};

const rmvFavJoke2 = (jokes: string[], joke: string) => {
  jokes.filter((joke) => !joke);
};

const useFavStore = create(
  persist<FavJokesProps>(
    (set) => ({
      FavJokes: [],
      addFavJoke: (joke) =>
        set((state) => ({ FavJokes: [...state.FavJokes, joke] })),
      rmvFavJoke: (jokeToRemove) =>
        set((state) => ({
          FavJokes: state.FavJokes.filter((joke) => joke !== jokeToRemove),
        })),
    }),
    {
      name: "FavJokes",
    }
  )
);

export default useFavStore;

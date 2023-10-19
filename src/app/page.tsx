"use client";

import { useState } from "react";
import CategoryButtons from "./components/CategoryButtons";
import ChangeScreenButton from "./components/ChangeScreenButton";
import ChuckIcon from "./components/ChuckIcon";
import Joke from "./components/Joke";
import Title from "./components/Title";
import useFetchCategories from "./hooks/useFetchCategories";
import useFetchJoke from "./hooks/useFetchJoke";
import useCategoryStore from "./stores/useCategoryStore";
import useFavStore from "./stores/useFavStore";
import ShowButtonsButton from "./components/ShowButtonsButton";
import CategoryButton from "./components/CategoryButton";

function App() {
  const [isFavoritedJoke, setIsFavoriteJoke] = useState<boolean>(false);

  const [urlJoke, setUrlJoke] = useState<string>(
    "https://api.chucknorris.io/jokes/random"
  );

  const [isShowingButtons, setIsShowingButtons] = useState<boolean>(false);

  const categories = [
    "random",
    ...useFetchCategories("https://api.chucknorris.io/jokes/categories"),
  ];

  const { joke, fetchNewJoke } = useFetchJoke(urlJoke);
  const { category } = useCategoryStore();
  const { addFavJoke, rmvFavJoke } = useFavStore();

  const handleShowCategories = () => {};

  const handleChangeJoke = () => {
    if (category !== "random")
      setUrlJoke(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
    else setUrlJoke("https://api.chucknorris.io/jokes/random");

    fetchNewJoke();
    setIsFavoriteJoke(false);
  };

  const handleFavoriteJoke = () => {
    setIsFavoriteJoke(!isFavoritedJoke);
    if (!isFavoritedJoke) return addFavJoke(joke);
    return rmvFavJoke(joke);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 p-10">
        <ChangeScreenButton name="Change to favs" href="/pages/favs" />
        <Title children="Chuck Norris Jokes" />
        <ChuckIcon />
        <Joke
          joke={joke}
          onclick={handleFavoriteJoke}
          isFavorited={isFavoritedJoke}
        />
        <div className="flex flex-col justify-center items-center w-2/3">
          <ShowButtonsButton
            name={
              isShowingButtons ? "Hide all categories" : "Show all categories"
            }
            onclick={() => setIsShowingButtons(!isShowingButtons)}
            isShowing={isShowingButtons}
          />
          {isShowingButtons ? (
            <CategoryButtons
              categories={categories}
              onclick={handleChangeJoke}
            />
          ) : (
            <CategoryButton category="random" onclick={handleChangeJoke} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
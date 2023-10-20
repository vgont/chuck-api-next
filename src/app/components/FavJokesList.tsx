import { TbTrashXFilled } from "react-icons/tb";

import useFavStore from "../stores/useFavStore";

const FavJokesList: React.FC = () => {
  const { FavJokes, rmvFavJoke } = useFavStore();

  const handleRemoveJoke = (joke: string) => {
    const accept = confirm("Do you really want to remove?");
    if (accept) return rmvFavJoke(joke);
  };

  return (
    <div className="flex flex-col gap-5 w-2/3  items-center bg-amber-900 p-5 rounded">
      {FavJokes.length === 0 ? (
        <p className="bold text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {"You don't have Favs already!"}
        </p>
      ) : (
        FavJokes.map((favJoke, index) => (
          <div
            className="flex flex-wrap justify-center items-center w-full bg-amber-600 p-2 rounded"
            key={index}
          >
            <p className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:w-5/6">
              {favJoke}
            </p>
            <button
              className="flex flex-wrap ml-auto justify-self-end md:mr-2 lg:mr-5 xl:mr-10 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
              onClick={() => handleRemoveJoke(favJoke)}
            >
              {TbTrashXFilled()}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavJokesList;

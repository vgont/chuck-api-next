import useFavStore from "../stores/useFavStore";
import { TbTrashXFilled } from "react-icons/tb";

const FavJokesList: React.FC = () => {
  const { FavJokes, rmvFavJoke } = useFavStore();

  const handleRemoveJoke = (joke: string) => {
    const accept = confirm("Do you really want to remove?");
    if (accept) return rmvFavJoke(joke);
  };

  return (
    <div className="flex flex-col gap-5 w-2/3  items-center bg-amber-900 p-5 rounded">
      {FavJokes.length === 0 ? (
        <p className="bold text-white">You don't have Favs already!</p>
      ) : (
        FavJokes.map((favJoke, index) => (
          <div
            className="flex flex-wrap justify-center items-center w-full bg-amber-600 p-2 rounded"
            key={index}
          >
            <p className="font-bold text-lg w-5/6">{favJoke}</p>
            <button
              className="ml-auto mr-10"
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

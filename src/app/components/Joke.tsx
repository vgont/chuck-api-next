import useCategoryStore from "../stores/useCategoryStore";
import FavButton from "./FavButton";

interface JokeProps {
  joke: string;
  onclick: () => void;
  isFavorited: boolean;
}

const Joke: React.FC<JokeProps> = ({ joke, onclick, isFavorited }) => {
  const { category } = useCategoryStore();
  return (
    <blockquote className="bg-gray-100 p-4 border-l-4 border-amber-500 shadow-md flex w-2/3">
      <div className="w-full">
        <p className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold italic w-11/12">
          {joke}
        </p>
        <div className="flex items-center w-full">
          <cite className="mt-2 text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            - Someone who knows Chuck Norris
          </cite>
          <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ml-auto italic font-semibold">
            Category: {category}
          </p>
        </div>
      </div>
      <FavButton onclick={onclick} isFavorited={isFavorited} />
    </blockquote>
  );
};

export default Joke;

const NewJokeButton: React.FC<{ onclick: () => void }> = ({ onclick }) => {
  return (
    <button
      className="w-20 md:w-4/12 lg:w-3/12 xl:6/12 h-12 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold py-2 px-4 rounded shadow-xl flex justify-center items-center"
      onClick={onclick}
    >
      {"New Joke"}
    </button>
  );
};

export default NewJokeButton;

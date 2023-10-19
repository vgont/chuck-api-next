import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type FavButtonProps = {
  isFavorited: boolean;
  onclick: () => void;
};

const FavButton: React.FC<FavButtonProps> = ({ isFavorited, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="text-3xl text-yellow-500 self-start ml-auto"
    >
      {isFavorited ? AiFillStar() : AiOutlineStar()}
    </button>
  );
};

export default FavButton;

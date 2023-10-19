import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

type ButtonProps = {
  name: string;
  isShowing: boolean;
  onclick: () => void;
};
const ShowButtonsButton: React.FC<ButtonProps> = ({
  name,
  isShowing,
  onclick,
}) => {
  return (
    <button
      className="font-semibold hover:border-b-2 hover:border-black flex justify-center items-center gap-2 self-end"
      onClick={onclick}
    >
      {name} {isShowing ? AiOutlineArrowUp() : AiOutlineArrowDown()}
    </button>
  );
};

export default ShowButtonsButton;

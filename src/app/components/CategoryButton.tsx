import useCategoryStore from "../stores/useCategoryStore";

const CategoryButton: React.FC<{ category: string; onclick: () => void }> = ({
  category,
  onclick,
}) => {
  const { changeCategory } = useCategoryStore();

  const handleClick = () => {
    changeCategory(category);
    onclick();
  };
  return (
    <button
      onClick={handleClick}
      className="w-40 h-12 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white text-xl font-semibold py-2 px-4 rounded shadow-xl"
    >
      {category}
    </button>
  );
};

export default CategoryButton;

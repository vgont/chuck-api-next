import CategoryButton from "./CategoryButton";

type CategoryButtonsProps = {
  categories: string[];
  onclick: () => void;
};

const CategoryButtons: React.FC<CategoryButtonsProps> = ({
  categories,
  onclick,
}) => {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center m-5 w-2/3">
        {categories.map((category) => (
          <CategoryButton
            category={category}
            key={category}
            onclick={onclick}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryButtons;

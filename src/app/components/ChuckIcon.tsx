import Image from "next/image";

const ChuckIcon: React.FC = () => {
  return (
    <Image
      className="rounded-full w-28 sm:36 md:w-40 xl:w-44 aspect-square object-cover"
      src="https://cdn.dribbble.com/users/1774513/screenshots/3726127/media/ef86424ae75426acfa624dfadcabda14.jpg?resize=400x300&vertical=center"
      alt="Chuck Norris Icon"
      width={200}
      height={200}
    />
  );
};

export default ChuckIcon;

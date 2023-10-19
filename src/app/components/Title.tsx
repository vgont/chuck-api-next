const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h1 className="m-4 text-xl font-bold md:text-4xl xl:text-5xl text-gray-900 ">
      {title}
    </h1>
  );
};

export default Title;

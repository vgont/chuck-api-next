const Title: React.FC<{ children: string }> = ({ children }) => {
  return <h1 className="m-4 text-5xl font-bold text-gray-900 ">{children}</h1>;
};

export default Title;

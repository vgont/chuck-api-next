import Link from "next/link";

type LinkProps = {
  name: string;
  href: string;
};
const ChangeScreenButton: React.FC<LinkProps> = ({ name, href }) => {
  return (
    <Link
      className="bg-yellow-300 p-3 rounded font-semibold transition duration-150 hover:bg-yellow-500 active:bg-yellow-700 self-end"
      href={href}
    >
      {name}
    </Link>
  );
};

export default ChangeScreenButton;

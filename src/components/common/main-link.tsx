import Link from "next/link";

interface IMainLinkProps {
  href: string;
  borderColor?: string;
  children: React.ReactNode;
}

const MainLink = ({
  href,
  borderColor = "secondary-000",
  children,
}: IMainLinkProps) => {
  return (
    <Link
      href={href}
      className={`w-full flex justify-center items-center border-2 border-solid  border-${borderColor}`}
    >
      {children}
    </Link>
  );
};

export default MainLink;

import Link from "next/link";

interface ICommonLinkProps {
  href: string;
  borderColor: string;
  children: React.ReactNode;
}

const CommonLink = ({ href, borderColor, children }: ICommonLinkProps) => {
  return (
    <Link
      href={href}
      className={`w-full flex justify-center items-center border-2 border-solid border-${borderColor}`}
    >
      {children}
    </Link>
  );
};

export default CommonLink;

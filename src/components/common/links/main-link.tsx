import Link from "next/link";

interface IMainLinkProps {
  href: string;
  children: React.ReactNode;
}

const MainLink = ({ href, children }: IMainLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-full flex justify-center items-center py-3 text-sm/[1.5] tracking-[.14em]
       border-2 border-solid 
       border-secondary-eee transition-border duration-300 hover:border-secondary-999 focus:border-secondary-999 outline-none"
    >
      {children}
    </Link>
  );
};

export default MainLink;

import Image from "next/image";
import Link from "next/link";

interface ISocialLinkItemProps {
  href: string;
  icon: string;
}

const SocialLinkItem = ({ href, icon }: ISocialLinkItemProps) => {
  return (
    <li className="w-4 flex items-center justify-center h-4">
      <Link
        href={href}
        target="_blank"
        className="relative w-full h-full transition-transform duration-300 hover:scale-110
         focus:scale-110 focus:brightness-0 outline-none"
      >
        <Image
          src={`/icons/social-links/${icon}`}
          alt={icon}
          fill
          className="transition-brightness duration-300 hover:brightness-0"
        />
      </Link>
    </li>
  );
};

export default SocialLinkItem;

import Image from "next/image";
import Link from "next/link";

interface ISocialLinkItemProps {
  href: string;
  icon: string;
}

const SocialLinkItem = ({ href, icon }: ISocialLinkItemProps) => {
  return (
    <li className="w-4 flex items-center justify-center h-4 transition-transform duration-200 hover:scale-110">
      <Link href={href} target="_blank" className="relative w-full h-full">
        <Image
          src={`/icons/social-links/${icon}`}
          alt={icon}
          fill
          className="transition-brightness duration-200 hover:brightness-0"
        />
      </Link>
    </li>
  );
};

export default SocialLinkItem;

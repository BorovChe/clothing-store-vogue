import Image from "next/image";
import Link from "next/link";

interface ISocialLinkItemProps {
  href: string;
  icon: string;
  width: number;
  height: number;
}

const SocialLinkItem = ({
  href,
  icon,
  width,
  height,
}: ISocialLinkItemProps) => {
  return (
    <li className="w-4">
      <Link href={href} target="_blank">
        <Image
          src={`/icons/social-links/${icon}`}
          alt={icon}
          width={width}
          height={height}
        />
      </Link>
    </li>
  );
};

export default SocialLinkItem;

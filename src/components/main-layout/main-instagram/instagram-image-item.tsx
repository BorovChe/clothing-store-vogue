import Image from "next/image";
import Link from "next/link";

interface IInstagramImageItemProps {
  imagePath: string;
}

const InstagramImageItem = ({ imagePath }: IInstagramImageItemProps) => {
  return (
    <li className="w-40 sm:w-60 aspect-square overflow-hidden">
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        className="relative block w-full h-full transition-transform duration-300 hover:scale-105 focus:scale-105"
      >
        <Image
          src={`/images/instagram/${imagePath}`}
          fill
          alt={imagePath}
          sizes="(max-width: 640px) 160px, 240px"
        />
      </Link>
    </li>
  );
};

export default InstagramImageItem;

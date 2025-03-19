import Image from "next/image";
import Link from "next/link";
import HomeCollectionCaption from "./home-collection-caption";

interface IHomeCollectionItem {
  href: string;
  image: string;
  title: string;
  caption: string;
}

const HomeCollectionItem = ({
  href,
  image,
  title,
  caption,
}: IHomeCollectionItem) => {
  return (
    <li className="relative group overflow-hidden">
      <Link
        href={href}
        className="block h-full transition-transform duration-700 md:group-hover:duration-300
       md:group-odd:hover:translate-y-[76px] md:group-even:hover:-translate-y-[76px]
      md:group-odd:focus:translate-y-[76px] md:group-even:focus:-translate-y-[76px]
      lg:group-odd:hover:translate-y-[112px] lg:group-even:hover:-translate-y-[112px]
      lg:group-odd:focus:translate-y-[112px] lg:group-even:focus:-translate-y-[112px]"
      >
        <div
          className="absolute right-0 w-full py-6 md:py-2 lg:py-6 z-0 bg-primary-f5f6f8
          group-odd:top-[-112px] md:group-odd:top-[-76px] lg:group-odd:top-[-112px] 
         group-even:bottom-[-112px] md:group-even:bottom-[-76px] lg:group-even:bottom-[-112px] group-even:bg-[#f5ede9]"
        >
          <HomeCollectionCaption title={title} caption={caption} />
        </div>
        <Image
          src={`/images/home-categories/${image}`}
          alt={title}
          width={480}
          height={640}
          className="object-cover h-full -z-10 group-even:mb-[108px] md:group-even:mb-0"
        />
        <div
          className="absolute right-0 w-full py-6 md:py-2 lg:py-6 z-0 bg-primary-f5f6f8
  group-even:bottom-0 md:group-even:bottom-auto md:group-even:top-0 group-odd:bottom-0 group-even:bg-[#f5ede9]"
        >
          <HomeCollectionCaption title={title} caption={caption} />
        </div>
      </Link>
    </li>
  );
};

export default HomeCollectionItem;

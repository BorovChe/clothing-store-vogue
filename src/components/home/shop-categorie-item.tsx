import Image from "next/image";
import Link from "next/link";

interface IShopCategorieItemProps {
  href: string;
  image: string;
  title: string;
}

const ShopCategorieItem = ({ href, image, title }: IShopCategorieItemProps) => {
  return (
    <li>
      <Link href={`/collection/${href}`}>
        <Image
          src={`/images/categories/${image}`}
          alt={title}
          width={210}
          height={210}
        />
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default ShopCategorieItem;

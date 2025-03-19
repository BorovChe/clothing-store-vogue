import Image from "next/image";
import Link from "next/link";

interface ICollectionItemProps {
  slug: string;
  name: string;
  price: { current: number; discount?: number; old?: number };
  previewImage: string;
}

const CollectionItem = ({
  slug,
  name,
  price,
  previewImage,
}: ICollectionItemProps) => {
  return (
    <li className="max-w-[270px]">
      <Link href={`/${slug}`}>
        <Image src={previewImage} alt={name} width={270} height={360} />
        <h3>{name}</h3>
        <p>{price.current}</p>
      </Link>
    </li>
  );
};

export default CollectionItem;

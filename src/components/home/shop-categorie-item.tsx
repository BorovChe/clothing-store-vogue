import Link from "next/link";

interface IShopCategorieItemProps {
  href: string;
  image: string;
  title: string;
}

const ShopCategorieItem = ({ href, image, title }: IShopCategorieItemProps) => {
  return (
    <li className="relative overflow-hidden">
      <Link
        href={href}
        className="block w-[210px] aspect-square bg-blend-overlay transition-transform duration-300 hover:scale-105 focus:scale-105"
        style={{
          background: `url(/images/categories/${image})`,
          backgroundColor: "rgba(252, 249, 252, 0.12)",
        }}
      />
      <p className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl pointer-events-none text-secondary-fff">
        {title}
      </p>
    </li>
  );
};

export default ShopCategorieItem;

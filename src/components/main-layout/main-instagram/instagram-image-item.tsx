import Image from "next/image";

interface IInstagramImageItemProps {
  imagePath: string;
}

const InstagramImageItem = ({ imagePath }: IInstagramImageItemProps) => {
  return (
    <li>
      <Image
        src={`/images/instagram/${imagePath}`}
        alt={imagePath}
        width={240}
        height={240}
      />
    </li>
  );
};

export default InstagramImageItem;

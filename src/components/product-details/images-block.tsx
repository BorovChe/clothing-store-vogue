import Image from "next/image";

interface IImageBlockProps {
  mainImages: string[];
  deskImages: string[];
}

const ImagesBlock = ({ mainImages, deskImages }: IImageBlockProps) => {
  return (
    <div className="flex">
      <ul>
        {deskImages.map((item: string, i: number) => (
          <li key={i}>
            <Image src={item} alt="Desktop Images" width={70} height={94} />
          </li>
        ))}
      </ul>

      <Image
        src={mainImages[0]}
        alt="Main Image"
        width={570}
        height={760}
        className="max-h-[760px]"
      />
    </div>
  );
};

export default ImagesBlock;

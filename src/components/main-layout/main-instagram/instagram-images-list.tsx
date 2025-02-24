import InstagramImageItem from "./instagram-image-item";
import instagramImages from "@/data/instagram-images.json";

const InstagramImagesList = () => {
  return (
    <ul className="flex mx-auto">
      {instagramImages.map(({ id, image }) => (
        <InstagramImageItem key={id} imagePath={image} />
      ))}
    </ul>
  );
};

export default InstagramImagesList;

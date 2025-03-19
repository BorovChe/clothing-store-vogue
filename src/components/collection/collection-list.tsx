import CollectionItem from "./collection-item";
import clothes from "@/data/temp/temp-clothing.json";

const CollectionList = () => {
  return (
    <ul className="flex gap-[30px]">
      {clothes.map((item) => (
        <CollectionItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default CollectionList;

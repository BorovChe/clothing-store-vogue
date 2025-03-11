import clothes from "@/data/temp-clothing.json";
import CollectionItem from "./collection-item";

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

import HomeCollectionItem from "./home-collection-item";
import homeCollectionList from "@/data/home-categories.json";

const HomeCollectionList = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:items-stretch">
      {homeCollectionList.map((collection) => (
        <HomeCollectionItem key={collection.id} {...collection} />
      ))}
    </ul>
  );
};

export default HomeCollectionList;

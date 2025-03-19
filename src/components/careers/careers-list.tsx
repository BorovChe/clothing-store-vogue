import cereersList from "@/data/temp/temp-careers.json";
import CareersItem from "./careers-item";

const CareersList = () => {
  return (
    <ul>
      {cereersList.map((item) => (
        <CareersItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default CareersList;

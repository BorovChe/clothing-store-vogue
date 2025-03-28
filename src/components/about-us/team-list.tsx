import teamLIst from "@/data/team.json";
import TeamItem from "./team-item";

const TeamList = () => {
  return (
    <ul className="flex flex-col items-center sm:items-start sm:flex-row gap-[30px]">
      {teamLIst.map((item) => (
        <TeamItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default TeamList;

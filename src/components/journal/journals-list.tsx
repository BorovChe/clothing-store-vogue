import JournalItem from "./journal-item";
import IJournal from "@/interfaces/journal";

interface IJournalsListProps {
  journals: IJournal[];
}

const JournalsList = ({ journals }: IJournalsListProps) => {
  return (
    <ul className="flex flex-wrap justify-center gap-[30px]">
      {journals.map((journal) => (
        <JournalItem key={journal.id} {...journal} />
      ))}
    </ul>
  );
};

export default JournalsList;

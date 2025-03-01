import IJournal from "@/types/journal";
import JournalItem from "./journal-item";

interface IJournalsListProps {
  journals: IJournal[];
}

const JournalsList = ({ journals }: IJournalsListProps) => {
  return (
    <ul className="flex gap-[30px]">
      {journals.map((journal) => (
        <JournalItem key={journal.id} {...journal} />
      ))}
    </ul>
  );
};

export default JournalsList;

import MainContainer from "@/components/common/main-container";
import SectionTitle from "@/components/common/section-title";
import JournalsList from "@/components/journal/journals-list";
import IJournal from "@/interfaces/journal";

interface IJournalSectionProps {
  journals: IJournal[];
}

const JournalSection = ({ journals }: IJournalSectionProps) => {
  return (
    <section className="pt-[100px] pb-20">
      <MainContainer>
        <div className="mb-10">
          <SectionTitle>From the Journal</SectionTitle>
        </div>
        <JournalsList journals={journals} />
      </MainContainer>
    </section>
  );
};

export default JournalSection;

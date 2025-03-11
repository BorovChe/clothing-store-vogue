import MainContainer from "@/components/common/main-container";
import SectionTitle from "@/components/common/section-title";
import JournalsList from "@/components/journal/journals-list";
import IJournal from "@/interfaces/journal";

interface IJournalSectionProps {
  sectionTitle: string;
  journals: IJournal[];
}

const JournalSection = ({ sectionTitle, journals }: IJournalSectionProps) => {
  return (
    <section>
      <MainContainer>
        <SectionTitle>{sectionTitle}</SectionTitle>
        <JournalsList journals={journals} />
      </MainContainer>
    </section>
  );
};

export default JournalSection;

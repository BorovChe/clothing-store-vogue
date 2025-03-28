import TeamList from "@/components/about-us/team-list";
import MainContainer from "@/components/common/main-container";
import SectionTitle from "@/components/common/section-title";

const TeamSection = () => {
  return (
    <section className="py-20">
      <MainContainer>
        <div className="mb-10">
          <SectionTitle>Meet Our Team</SectionTitle>
        </div>
        <TeamList />
      </MainContainer>
    </section>
  );
};

export default TeamSection;

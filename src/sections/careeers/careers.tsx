import CareersForm from "@/components/careers/careers-form";
import CareersList from "@/components/careers/careers-list";
import MainContainer from "@/components/common/main-container";
import MainTitle from "@/components/common/main-title";

const CareersSection = () => {
  return (
    <section>
      <MainContainer>
        <MainTitle>Explore the Careers</MainTitle>
        <div className="flex">
          <div>
            <h3>Filter By</h3>
            <CareersForm />
          </div>
          <CareersList />
        </div>
      </MainContainer>
    </section>
  );
};

export default CareersSection;

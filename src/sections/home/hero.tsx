import MainLink from "@/components/commons/main-link";
import MainContainer from "@/components/commons/main-container";
import HeroBackground from "@/components/home/hero-background";

const HeroSection = () => {
  return (
    <section className=" relative py-[220px] bg-primary-ffd5c5">
      <MainContainer>
        <div className="max-w-[564px]">
          <h1>{`Summer's Coming...`}</h1>
          <p className="mb-28">
            We started with humble beginnings — selling out of our basement and
            frantically shipping orders as soon as we woke up.
          </p>
          <div className="max-w-[174px]">
            <MainLink href="/" borderColor="secondary-000">
              SHOP NOW
            </MainLink>
          </div>
        </div>
      </MainContainer>
      <HeroBackground />
    </section>
  );
};

export default HeroSection;

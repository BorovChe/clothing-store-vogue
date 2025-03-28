import AboutUsSection from "@/sections/about-us/about-us";
import TeamSection from "@/sections/about-us/team";

const AboutUsPage = () => {
  return (
    <>
      <AboutUsSection />
      <TeamSection />
      <div className="w-full h-[200px] bg-[url('/images/about-us/about-us-bg.png')] bg-center  bg-no-repeat"></div>
    </>
  );
};

export default AboutUsPage;

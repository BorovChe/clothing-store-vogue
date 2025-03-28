import MainContainer from "@/components/common/main-container";
import MainTitle from "@/components/common/main-title";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="relative py-20 ">
      <MainContainer>
        <MainTitle>Founded With a Mission</MainTitle>
        <p className="mt-3 mb-[60px] text-center font-medium text-secondary-666">
          Simple, stylish and locally-crafted apparel since 1994
        </p>
        <div className="relative w-full aspect-[16/9] mb-20">
          <Image
            src="/images/about-us/team.jpg"
            alt="Team"
            fill
            className="object-cover"
          />
        </div>
        <p className="max-w-[770px] mx-auto text-center font-medium md:text-2xl">
          Founded in 1984 by designer Chantelle West, we&apos;ve always believed
          in the power of locally made goods. The quality of the craftsmanship
          and the local artisans we employ are what make Luxette our mission in
          life.
        </p>
      </MainContainer>
      <div className="absolute w-full -z-10 h-1/2 top-1/2 bg-[#f8f8f8]"></div>
    </section>
  );
};

export default AboutUsSection;

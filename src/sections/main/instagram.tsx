import MainLink from "@/components/common/links/main-link";
import SectionTitle from "@/components/common/section-title";
import InstagramImagesList from "@/components/main-layout/main-instagram/instagram-images-list";

const InstagramSection = () => {
  return (
    <section className="pt-20 border-t border-secondary-eee">
      <div className="max-w-[1440px] mx-auto ">
        <SectionTitle>Follow Our Instagram</SectionTitle>
        <div className="max-w-[224px]  mx-auto mt-6 mb-10">
          <MainLink href="https://www.instagram.com/">
            FOLLOW US <span className="ml-2 font-medium">@store</span>
          </MainLink>
        </div>
        <InstagramImagesList />
      </div>
    </section>
  );
};

export default InstagramSection;

import CommonLink from "@/components/commons/common-link";
import SectionTitle from "@/components/commons/section-title";
import InstagramImagesList from "@/components/main-layout/main-instagram/instagram-images-list";

const InstagramSection = () => {
  return (
    <section className="pt-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-6">
          <SectionTitle>Follow Our Instagram</SectionTitle>
        </div>
        <div className="max-w-[224px]  mx-auto mb-10">
          <CommonLink
            href="https://www.instagram.com/"
            borderColor="secondary-eee"
          >
            FOLLOW US @store
          </CommonLink>
        </div>
        <InstagramImagesList />
      </div>
    </section>
  );
};

export default InstagramSection;

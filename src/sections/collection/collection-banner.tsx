import MainLink from "@/components/common/main-link";

const CollectionBannerSection = () => {
  return (
    <section>
      <div className="bg-[url('/images/banners/collection/banner.png')]  w-[1400px] h-[300px]  bg-no-repeat mx-auto">
        <h1 className="text-center">BUY 1 GET 1</h1>
        <p className="text-center">AUTUMN JACKET</p>
        <div className="max-w-[174px] mx-auto">
          <MainLink href={"/"}>SHOP NOW</MainLink>
        </div>
      </div>
    </section>
  );
};

export default CollectionBannerSection;

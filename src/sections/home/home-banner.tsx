import Image from "next/image";

import MainContainer from "@/components/common/main-container";
import ShopLink from "@/components/common/links/shop-link";

const HomeBannerSection = () => {
  return (
    <section className="py-20">
      <div className="relative mx-auto mb-[30px] bg-[calc(50%+120px)] bg-[url('/images/banners/home/main-banner.png')] max-w-[1170px] h-[548px]  bg-no-repeat sm:bg-center ">
        <div className="mx-auto pt-[110px] sm:p-0 sm:absolute sm:right-20 sm:top-[110px] w-[278px]">
          <h2 className="text-[64px]/[1.2] mb-10 text-right text-secondary-fff tracking-tight">
            Summer Collection 2025
          </h2>
          <div className="mb-4">
            <ShopLink href="/collection">SHOP THE COLLECTION</ShopLink>
          </div>
          <p className="font-medium text-right text-secondary-fff">
            Selected Styles
          </p>
        </div>
      </div>
      <MainContainer>
        <ul className="flex flex-wrap  gap-[30px]">
          <li className="relative bg-[url('/images/banners/home/classic-tee.png')] w-[570px] h-[240px]  bg-no-repeat">
            <div className="absolute top-1/2 right-2 -translate-y-1/2 sm:right-12 w-[206px]">
              <h3 className="mb-2 text-[32px] text-right">Classic Tee</h3>
              <p className="mb-6 text-right font-medium">Enjoy the Summer</p>
              <ShopLink href="/collection?category=t-shirts">
                SHOP T-SHIRTS
              </ShopLink>
            </div>
          </li>
          <li className="flex flex-wrap justify-center ml-auto  sm:justify-normal w-full max-w-[570px] gap-[54px] h-[240px] bg-[#E7ECEF]">
            <Image
              src="/images/banners/home/afterpay-banner.png"
              alt="Afterpay Banner"
              width={200}
              height={240}
              className="hidden sm:block"
            />
            <div className="flex flex-col items-center justify-center max-w-[246px]">
              <Image
                src="/images/banners/home/afterpay-logo.png"
                alt="Afterpay"
                width={180}
                height={38}
                className="mb-4"
              />
              <div className="mb-8 py-2 border-2 border-solid border-x-[#e7ecef]">
                <span className="text-[#99cff0]">Shop Now. </span>
                <span className="text-[#2778ad]">Enjoy Now. </span>
                <span className="text-[#074578]">Pay Later. </span>
              </div>
              <div className="w-[216px]">
                <ShopLink href="/collection">VIEW ALL ITEMS</ShopLink>
              </div>
            </div>
          </li>
        </ul>
      </MainContainer>
    </section>
  );
};

export default HomeBannerSection;

import MainContainer from "@/components/commons/main-container";
import MainLink from "@/components/commons/main-link";
import Image from "next/image";

const BannerSection = () => {
  return (
    <section>
      <MainContainer>
        <div className="bg-[url('/images/home-banner/main-banner.png')]  w-full h-[548px]  bg-no-repeat ">
          <h2>Summer Collection 2025</h2>
          <div className="max-w-[276px]">
            <MainLink href="/collection">SHOP THE COLLECTION</MainLink>
            <p>Selected Styles</p>
          </div>
        </div>
        <ul className="flex gap-[30px]">
          <li className="bg-[url('/images/home-banner/classic-tee.png')]  w-[570px] h-[240px]  bg-no-repeat">
            <h3>Classic Tee</h3>
            <p>Enjoy the Summer</p>
            <MainLink href="/collection/tank">SHOP T-SHIRTS</MainLink>
          </li>
          <li className="flex w-[570px] h-[240px] bg-[#E7ECEF]">
            <Image
              src="/images/home-banner/afterpay-banner.png"
              alt="Afterpay Banner"
              width={200}
              height={240}
            />
            <div>
              <Image
                src="/images/home-banner/afterpay-logo.png"
                alt="Afterpay"
                width={180}
                height={38}
              />
              <p>
                <span>Shop Now.</span> <span>Enjoy Now.</span>
                <span>Pay Later.</span>
              </p>
              <MainLink href="/collection">VIEW ALL ITEMS</MainLink>
            </div>
          </li>
        </ul>
      </MainContainer>
    </section>
  );
};

export default BannerSection;

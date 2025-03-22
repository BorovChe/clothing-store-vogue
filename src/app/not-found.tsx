import MainContainer from "@/components/common/main-container";

import Image from "next/image";
import BreadCrumbs from "@/components/main-layout/bread-crumbs";
import ShopLink from "@/components/common/links/shop-link";

const NotFoundPage = () => {
  return (
    <>
      <BreadCrumbs isNotFound={true} />
      <section className="bg-[#1b161d]  lg:py-0">
        <MainContainer>
          <div className="flex justify-center min-h-[600px] lg:justify-between items-center">
            <Image
              src="/images/not-found/404.png"
              alt="Not Found 404"
              width={554}
              height={600}
              className="hidden lg:block"
            />
            <div className="max-w-80 lg:max-w-[400px]">
              <p className="mb-[6px] text-2xl text-secondary-999">
                Error 404...
              </p>
              <h1 className="mb-4 text-5xl/[1.2] -tracking-[.02em] text-secondary-fff">
                Page not found
              </h1>
              <p className="mb-10 font-medium leading-[1.5] text-secondary-e6e6e6">
                We looked everywhere for this page. Are you sure the website URL
                is correct?
              </p>
              <div className="max-w-[234px]">
                <ShopLink href="/">GO TO HOMEPAGE</ShopLink>
              </div>
            </div>
          </div>
        </MainContainer>
      </section>
    </>
  );
};

export default NotFoundPage;

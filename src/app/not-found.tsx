import MainContainer from "@/components/common/main-container";
import MainLink from "@/components/common/links/main-link";
import Image from "next/image";
import BreadCrumbs from "@/components/main-layout/bread-crumbs";

const NotFoundPage = () => {
  return (
    <>
      <BreadCrumbs isNotFound={true} />
      <section className="bg-[#1b161d]">
        <MainContainer>
          <div className="flex justify-between items-center">
            <Image
              src="/images/not-found/404.png"
              alt="Not Found 404"
              width={554}
              height={600}
            />
            <div className="max-w-[400px]">
              <p>Error 404...</p>
              <h1>Page not found</h1>
              <p>
                We looked everywhere for this page. Are you sure the website URL
                is correct?
              </p>
              <MainLink href="/">GO TO HOMEPAGE</MainLink>
            </div>
          </div>
        </MainContainer>
      </section>
    </>
  );
};

export default NotFoundPage;

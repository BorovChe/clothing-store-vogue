import CollectionSection from "@/sections/collection/collection";
import CollectionBannerSection from "@/sections/collection/collection-banner";

interface ICollectionPageProps {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}

const CollectionPage = async ({ searchParams }: ICollectionPageProps) => {
  const queryParams = await searchParams;

  return (
    <>
      <CollectionBannerSection />
      <CollectionSection queryParams={queryParams} />
    </>
  );
};

export default CollectionPage;

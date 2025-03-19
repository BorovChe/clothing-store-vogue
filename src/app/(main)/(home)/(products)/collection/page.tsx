import CollectionSection from "@/sections/collection/collection";
import CollectionBannerSection from "@/sections/collection/collection-banner";

interface ICollectionPageProps {
  searchParams?: Promise<{
    category?: string;
    color?: string;
    size?: string;
    price?: string;
  }>;
}

const CollectionPage = async ({ searchParams }: ICollectionPageProps) => {
  const queryParams = searchParams ? await searchParams : {};

  return (
    <>
      <CollectionBannerSection />
      <CollectionSection queryParams={queryParams} />
    </>
  );
};

export default CollectionPage;

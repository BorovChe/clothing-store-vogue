import { getProductDetails } from "@/lib/products";

interface IFeaturePageProps {
  params: Promise<{ slug: string }>;
}

const FeaturePage = async ({ params }: IFeaturePageProps) => {
  const { slug } = await params;

  const productDetails = await getProductDetails(slug);

  return <div>{productDetails.features[0]}</div>;
};

export default FeaturePage;

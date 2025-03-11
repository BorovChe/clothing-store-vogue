import { getProductDetails } from "@/lib/products";

interface IShippingPageProps {
  params: Promise<{ slug: string }>;
}

const ShippingPage = async ({ params }: IShippingPageProps) => {
  const { slug } = await params;

  const productDetails = await getProductDetails(slug);

  return <div>{productDetails?.shipping}</div>;
};

export default ShippingPage;

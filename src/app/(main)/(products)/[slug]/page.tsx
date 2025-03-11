import { getProductDetails } from "@/lib/products";

interface IDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const DetailsPage = async ({ params }: IDetailsPageProps) => {
  const { slug } = await params;

  const productDetails = await getProductDetails(slug);

  return (
    <div>
      <p>{productDetails?.description}</p>
    </div>
  );
};

export default DetailsPage;

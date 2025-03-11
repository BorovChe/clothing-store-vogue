import { getProductDetails } from "@/lib/products";

interface IReviewsPageProps {
  params: Promise<{ slug: string }>;
}

const ReviewsPage = async ({ params }: IReviewsPageProps) => {
  const { slug } = await params;

  const productDetails = await getProductDetails(slug);

  return (
    <div>
      {productDetails &&
        productDetails.reviews &&
        productDetails.reviews[0].comment}
    </div>
  );
};

export default ReviewsPage;

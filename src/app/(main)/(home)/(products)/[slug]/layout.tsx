import React, { ReactNode } from "react";

import { getProductDetails } from "@/lib/products";
import ProductDetailsSection from "@/sections/product-details/product-details";
import DetailsLinksList from "@/components/product-details/details-links-list";
import { notFound } from "next/navigation";

interface IProductLayoutProps {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}

const ProductLayout = async ({ children, params }: IProductLayoutProps) => {
  const { slug } = await params;

  const productDetails = await getProductDetails(slug);

  if (!productDetails) notFound();

  return (
    <>
      <ProductDetailsSection product={productDetails}>
        <DetailsLinksList slug={slug} />
        {children}
      </ProductDetailsSection>
    </>
  );
};

export default ProductLayout;

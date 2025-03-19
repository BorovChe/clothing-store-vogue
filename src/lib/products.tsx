import products from "@/data/temp/temp-clothing.json";
import { IProduct } from "@/interfaces/product.interfaces";

export async function getAllProducts(): Promise<IProduct[]> {
  const productsList = [...products];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return productsList;
}

export async function getProductDetails(
  slug: string
): Promise<IProduct | null> {
  const productItem = products.find((item) => item.slug === slug) || null;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return productItem;
}

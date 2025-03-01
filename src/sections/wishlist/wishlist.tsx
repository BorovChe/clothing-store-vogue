import MainTitle from "@/components/commons/main-title";
import WishlistTable from "@/components/wishlist/wishlist-table";

const WishlistSection = () => {
  return (
    <section>
      <MainTitle>Wishlist</MainTitle>
      <p className="text-center">Save items for later</p>
      <WishlistTable />
    </section>
  );
};

export default WishlistSection;

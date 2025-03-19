import CollectionFilter from "@/components/collection/collection-filter-form";
import CollectionList from "@/components/collection/collection-list";
import MainContainer from "@/components/common/main-container";

interface ICollectionSectionProps {
  queryParams: {
    category?: string;
    color?: string;
    size?: string;
    price?: string;
  };
}

const CollectionSection = ({ queryParams }: ICollectionSectionProps) => {
  return (
    <section>
      <MainContainer>
        <div className="flex">
          <div>
            <h3>Filter</h3>
            <CollectionFilter />
          </div>
          <div>
            <h2>{queryParams.category ? queryParams.category : "All"}</h2>
            <p>119 Styles Found</p>
            <div>
              <label htmlFor="sort">SORT BY</label>
              <select name="sort" id="sort">
                <option value="Trending">Trending</option>
                <option value="new">New</option>
              </select>
            </div>
            <CollectionList />
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default CollectionSection;

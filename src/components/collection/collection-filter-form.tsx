"use client";

import { ChangeEvent, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import CollectionFilterRadioBtn from "./collection-filter-radio-btn";
import {
  filterCategories,
  filterColor,
  filterSize,
  filterPrice,
} from "@/data/product-filter";

const CollectionFilter = () => {
  const [filterCounter, setFilterCounter] = useState<number>(0);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);

    const { category, color, size, price } = {
      category: formData.get("category") as string | null,
      color: formData.get("color") as string | null,
      size: formData.get("size") as string | null,
      price: formData.get("price") as string | null,
    };

    const updateFilterCounter = () => {
      let count = 0;

      if (category) count = 1;
      if (category) count += 1;
      if (color) count += 1;
      if (size) count += 1;
      if (price) count += 1;
      setFilterCounter(count);
    };

    if (category) params.set("category", category);
    if (color) params.set("color", color);
    if (size) params.set("size", size);
    if (price) params.set("price", price);

    updateFilterCounter();

    if (params.toString()) {
      push(`${pathname}?${params.toString()}`, { scroll: false });
    }
  };

  return (
    <form onChange={handleChange}>
      <div>
        <h3>CATEGORIES</h3>
        <ul>
          {filterCategories.map(({ id, category, value, title }) => {
            const isChecked: boolean = searchParams.get(category) === value;
            return (
              <li key={id}>
                <CollectionFilterRadioBtn
                  category={category}
                  value={value}
                  title={title}
                  checked={isChecked}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3>COLOR</h3>
        <ul>
          {filterColor.map(({ id, category, value, title }) => (
            <li key={id}>
              <CollectionFilterRadioBtn
                category={category}
                value={value}
                title={title}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>SIZE</h3>
        <ul>
          {filterSize.map(({ id, category, value, title }) => (
            <li key={id}>
              <CollectionFilterRadioBtn
                category={category}
                value={value}
                title={title}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>PRICE</h3>
        <ul>
          {filterPrice.map(({ id, category, value, title }) => (
            <li key={id}>
              <CollectionFilterRadioBtn
                category={category}
                value={value}
                title={title}
              />
            </li>
          ))}
        </ul>
      </div>
      <button
        type="reset"
        onClick={() => {
          push(pathname, { scroll: false });
          setFilterCounter(0);
        }}
      >
        CLEAR FILTER {filterCounter !== 0 ? `(${filterCounter})` : ""}
      </button>
    </form>
  );
};

export default CollectionFilter;

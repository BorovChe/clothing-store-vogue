import Link from "next/link";

import detailsLinks from "@/data/details-links-list.json";

interface IDetailsLinksList {
  slug: string;
}

const DetailsLinksList = ({ slug }: IDetailsLinksList) => {
  return (
    <ul className="flex gap-10">
      {detailsLinks.map(({ id, href, title }) => (
        <li key={id}>
          <Link href={`/${slug}${href}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DetailsLinksList;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import MainContainer from "../common/main-container";
import capitalizeWords from "@/lib/bread-crumbs";

interface IBreadCrumbsProps {
  isNotFound?: boolean;
}

const BreadCrumbs = ({ isNotFound = false }: IBreadCrumbsProps) => {
  const pathName = usePathname();

  let currentPath;

  const wordDivision = pathName.replaceAll("-", " ");
  const pathParts = wordDivision.split("/").filter(Boolean);

  currentPath = (
    <p className="ml-3">
      <span className="mr-3">/</span>404 page
    </p>
  );

  if (!isNotFound)
    currentPath = pathParts.map((segment, i) => {
      const capitalizedSegment = capitalizeWords(segment);

      return (
        <div key={segment}>
          <span className="ml-3">/</span>
          {i === pathParts.length - 1 ? (
            <span className="ml-3">{capitalizedSegment}</span>
          ) : (
            <Link href={`/${segment}`} className="inline-block ml-3">
              {capitalizedSegment}
            </Link>
          )}
        </div>
      );
    });

  return (
    <div className="py-3">
      <MainContainer>
        <div className="flex">
          <Link href="/" className="ml-3">
            Home
          </Link>
          {currentPath}
        </div>
      </MainContainer>
    </div>
  );
};

export default BreadCrumbs;

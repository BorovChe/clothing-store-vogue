import { ReactNode } from "react";

import BreadCrumbs from "@/components/main-layout/bread-crumbs";

interface IHomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: IHomeLayoutProps) => {
  return (
    <>
      <BreadCrumbs />
      {children}
    </>
  );
};

export default HomeLayout;

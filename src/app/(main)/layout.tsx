import { ReactNode } from "react";

import InstagramSection from "@/sections/main/instagram";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      {children}
      <InstagramSection />
    </>
  );
};

export default MainLayout;

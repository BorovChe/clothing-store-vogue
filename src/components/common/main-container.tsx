import { ReactNode } from "react";

interface IMainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: IMainContainerProps) => {
  return <div className="max-w-[1202px] mx-auto px-4">{children}</div>;
};

export default MainContainer;

import { ReactNode } from "react";

interface IMainTitleProps {
  children: ReactNode;
}

const MainTitle = ({ children }: IMainTitleProps) => {
  return <h1 className="text-center">{children}</h1>;
};

export default MainTitle;

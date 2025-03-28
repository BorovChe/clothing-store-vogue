import { ReactNode } from "react";

interface IMainTitleProps {
  children: ReactNode;
}

const MainTitle = ({ children }: IMainTitleProps) => {
  return (
    <h1 className="text-center  text-[42px]/[1.3] md:text-[48px]/[1.3] tracking-tight">
      {children}
    </h1>
  );
};

export default MainTitle;

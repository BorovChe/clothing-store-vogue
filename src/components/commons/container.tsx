import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

const ResponsiveContainer = ({ children }: IContainerProps) => {
  return <div className="max-w-[1202px] mx-auto px-4">{children}</div>;
};

export default ResponsiveContainer;

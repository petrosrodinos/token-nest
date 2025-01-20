import { FC } from "react";

interface ContainerProps {
  children: any;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="w-full mt-[60px] mr-2">{children}</div>;
};

export default Container;

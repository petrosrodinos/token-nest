import { FC } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const NavBar: FC = () => {
  return (
    <div className="fixed right-0 h-[60px] flex items-center px-5 z-[1000] float-right">
      <ConnectButton />
    </div>
  );
};

export default NavBar;

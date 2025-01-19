import { FC } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const NavBar: FC = () => {
  return (
    <div className="float-right">
      <ConnectButton />
    </div>
  );
};

export default NavBar;

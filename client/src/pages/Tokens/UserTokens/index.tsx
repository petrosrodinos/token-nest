import { FC } from "react";
import TokenCardLayout from "../../../components/TokenCards";
import BoughtCard from "../../../components/TokenCards/BoughtCard";
import { token } from "../../../constants/tokens";

const UserTokens: FC = () => {
  return (
    <div className="p-6 gap-5 flex justify-center flex-wrap">
      <TokenCardLayout token={token}>
        <BoughtCard token={token} />
      </TokenCardLayout>
    </div>
  );
};

export default UserTokens;

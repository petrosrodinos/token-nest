import { FC } from "react";
import TokenCardLayout from "../../../components/TokenCards";
import StakeCard from "../../../components/TokenCards/StakeCard";
import { token } from "../../../constants/tokens";

const Staking: FC = () => {
  return (
    <div className="p-6 gap-5 flex justify-center flex-wrap">
      <TokenCardLayout token={token}>
        <StakeCard token={token} />
      </TokenCardLayout>
    </div>
  );
};

export default Staking;

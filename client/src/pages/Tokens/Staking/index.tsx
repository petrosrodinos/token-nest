import { FC } from "react";
import TokenCardLayout from "../../../components/TokenCards";
import StakeCard from "../../../components/TokenCards/StakeCard";
import { token } from "../../../constants/tokens";
import { Token } from "../../../interfaces/token";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { tokenAbi } from "../../../lib/contract";
import Message from "../../../components/Message";
import { Spinner } from "../../../components/ui/spinner";

const Staking: FC = () => {
  const { data: hash, error: stakeError, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const handleClaimToken = (token: Token) => {
    writeContract({
      address: token.address as `0x${string}`,
      abi: tokenAbi,
      functionName: "claim",
      args: [],
    });
  };

  return (
    <>
      <Spinner loading={isConfirming || isPending} color="blue" />
      <Message
        visible={!!stakeError}
        variant="destructive"
        title="Warning"
        description="Could not claim tokens."
      />
      <Message
        visible={isConfirmed}
        variant="success"
        title="Success"
        description="Tokens claimed successfuly."
      />
      <div className="mt-2 gap-5 flex flex-wrap">
        <TokenCardLayout token={token}>
          <StakeCard onClaimToken={handleClaimToken} token={token} />
        </TokenCardLayout>
      </div>
    </>
  );
};

export default Staking;

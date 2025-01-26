import { FC } from "react";
import TokenCardLayout from "../../../components/TokenCards";
import BoughtCard from "../../../components/TokenCards/BoughtCard";
import { token } from "../../../constants/tokens";
import { Token } from "../../../interfaces/token";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { tokenAbi } from "../../../lib/contract";
import Message from "../../../components/Message";
import { Spinner } from "../../../components/ui/spinner";

const UserTokens: FC = () => {
  const { data: hash, error: stakeError, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const handleStakeToken = (token: Token, amount: string) => {
    writeContract({
      address: token.address as `0x${string}`,
      abi: tokenAbi,
      functionName: "stake",
      args: [amount],
    });
  };

  return (
    <>
      <Spinner loading={isConfirming || isPending} color="blue" />
      <Message
        visible={!!stakeError}
        variant="destructive"
        title="Warning"
        description="Could not stake tokens."
      />
      <Message
        visible={isConfirmed}
        variant="success"
        title="Success"
        description="Tokens staked successfuly."
      />
      <div className="mt-2 gap-5 flex flex-column flex-wrap">
        <TokenCardLayout token={token}>
          <BoughtCard onStateToken={handleStakeToken} token={token} />
        </TokenCardLayout>
      </div>
    </>
  );
};

export default UserTokens;

import { FC } from "react";
import TokenCardLayout from "../../../components/TokenCards";
import StakeCard from "../../../components/TokenCards/StakeCard";
import { StakedToken, Token } from "../../../interfaces/token";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { tokenAbi } from "../../../lib/contract";
import Message from "../../../components/Message";
import { Spinner } from "../../../components/ui/spinner";
import { getUserTokens } from "../../../services/token";
import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";
// import { StakedTokens } from "../../../constants/tokens";

const Staking: FC = () => {
  const { address, chain } = useAccount();

  const { data: hash, error: stakeError, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const {
    data: tokens,
    isLoading: isGettingTokens,
    isError,
  } = useQuery({
    queryKey: ["staked-tokens"],
    queryFn: () => getUserTokens(address?.toString()!, chain?.name!),
    retry: 1,
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
      <Spinner loading={isConfirming || isPending || isGettingTokens} color="blue" />
      <Message
        visible={tokens?.length === 0}
        variant="default"
        title="Warning"
        description="You have no tokens."
      />
      <Message
        visible={isError}
        variant="destructive"
        title="Warning"
        description="Could not get staked tokens."
      />
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
        {tokens?.map((token: StakedToken, index: number) => (
          <TokenCardLayout key={index} token={token}>
            <StakeCard onClaimToken={handleClaimToken} token={token} />
          </TokenCardLayout>
        ))}
        {/* {StakedTokens?.map((token: StakedToken, index: number) => (
          <TokenCardLayout key={index} token={token}>
            <StakeCard onClaimToken={handleClaimToken} token={token} />
          </TokenCardLayout>
        ))} */}
      </div>
    </>
  );
};

export default Staking;

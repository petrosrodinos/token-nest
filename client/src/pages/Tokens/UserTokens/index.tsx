import { FC } from "react";
import TokenCardLayout from "../../../components/TokenCards";
import BoughtCard from "../../../components/TokenCards/BoughtCard";
import { BoughtToken, Token } from "../../../interfaces/token";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { tokenAbi } from "../../../lib/contract";
import Message from "../../../components/Message";
import { Spinner } from "../../../components/ui/spinner";
import { useQuery } from "@tanstack/react-query";
import { getUserTokens } from "../../../services/token";
import { useAccount } from "wagmi";
// import { BoughtTokens } from "../../../constants/tokens";

const UserTokens: FC = () => {
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
    queryKey: ["tokens"],
    queryFn: () => getUserTokens(address?.toString()!, chain?.name!),
    retry: 1,
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
        description="Could not get tokens."
      />
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
        {tokens?.map((token: BoughtToken, index: number) => (
          <TokenCardLayout key={index} token={token}>
            <BoughtCard onStateToken={handleStakeToken} token={token} />
          </TokenCardLayout>
        ))}
        {/* {BoughtTokens?.map((token: BoughtToken, index: number) => (
          <TokenCardLayout key={index} token={token}>
            <BoughtCard onStateToken={handleStakeToken} token={token} />
          </TokenCardLayout>
        ))} */}
      </div>
    </>
  );
};

export default UserTokens;

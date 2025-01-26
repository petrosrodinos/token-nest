import { FC } from "react";
import TokenCardLayout from "../../components/TokenCards/index";
import ContentHeader from "../../components/ContentHeader";
import Container from "../../components/Container";
import MarketCard from "../../components/TokenCards/MarketCard";
import { useSupabase } from "../../hooks/useSupabase";
import { useEffect } from "react";
import { Spinner } from "../../components/ui/spinner";
import { useWaitForTransactionReceipt, useWriteContract, useAccount } from "wagmi";
import Message from "../../components/Message";
import { Token } from "../../interfaces/token";
import { tokenAbi } from "../../lib/contract";

const Market: FC = () => {
  const { getTokens, data, error, loading } = useSupabase();

  useEffect(() => {
    getTokens();
  }, []);

  const { data: hash, error: buyError, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const { address } = useAccount();

  const handleBuyToken = (token: Token, amount: string) => {
    writeContract({
      address: token.address as `0x${string}`,
      abi: tokenAbi,
      functionName: "transfer",
      args: [address, amount],
    });
  };

  return (
    <Container>
      <ContentHeader
        title="Select Your Token"
        description="Choose a token to invest in from the available options."
      />
      <Spinner loading={loading || isConfirming || isPending} color="blue" />
      <Message
        visible={!!error || data?.length == 0}
        variant="destructive"
        title="Warning"
        description="Could not get tokens,try again later."
      />
      <Message
        visible={!!buyError}
        variant="destructive"
        title="Warning"
        description="Could not buy tokens."
      />
      <Message
        visible={isConfirmed}
        variant="success"
        title="Success"
        description="Tokens bought successfuly."
      />
      <div className="p-6 gap-5 flex justify-center flex-wrap">
        {data?.map((token: any) => (
          <TokenCardLayout key={token.id} token={token}>
            <MarketCard onBuyToken={handleBuyToken} token={token} />
          </TokenCardLayout>
        ))}
        {/* <TokenCardLayout token={token}>
          <MarketCard token={token} />
        </TokenCardLayout>
        <TokenCardLayout token={token}>
          <MarketCard token={token} />
        </TokenCardLayout>
        <TokenCardLayout token={token}>
          <MarketCard token={token} />
        </TokenCardLayout>
        <TokenCardLayout token={token}>
          <MarketCard token={token} />
        </TokenCardLayout>
        <TokenCardLayout token={token}>
          <MarketCard token={token} />
        </TokenCardLayout> */}
      </div>
    </Container>
  );
};

export default Market;

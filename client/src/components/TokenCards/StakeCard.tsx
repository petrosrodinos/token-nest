import React from "react";
import { StakedToken, Token } from "../../interfaces/token";
import { Button } from "../ui/button";
import { CardContent, CardFooter } from "../ui/card";
import { useReadContract, useAccount } from "wagmi";
import { tokenAbi } from "../../lib/contract";
import { ethers } from "ethers";

interface TokenCardProps {
  token: StakedToken;
  onClaimToken: (token: Token) => void;
}

const TokenCardStake: React.FC<TokenCardProps> = ({ token, onClaimToken }) => {
  const { chain, address } = useAccount();
  const { data } = useReadContract({
    address: token.address as `0x${string}`,
    abi: tokenAbi,
    functionName: "staked",
    args: [address],
    chainId: chain?.id,
  });

  const handleClaimToken = () => {
    onClaimToken(token);
  };
  return (
    <>
      <CardContent className="flex flex-col items-center space-y-2">
        <div className="align-left full-w">
          <p className="text-sm font-medium text-foreground">Staked</p>
          <p className="text-lg font-bold text-primary">
            {ethers.formatUnits(data?.toString() || "0", 18)}
          </p>
          {/* <p className="text-sm font-medium text-foreground">Earned</p>
          <p className="text-lg font-bold text-primary">400</p> */}
        </div>
      </CardContent>

      <CardFooter>
        <Button onClick={handleClaimToken} variant="default" className="w-full">
          Claim
        </Button>
      </CardFooter>
    </>
  );
};

export default TokenCardStake;

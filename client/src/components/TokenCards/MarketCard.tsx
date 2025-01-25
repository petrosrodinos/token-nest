import React from "react";
import { Token } from "../../interfaces/token";
import { Button } from "../ui/button";
import { CardContent, CardFooter } from "../ui/card";
import { useAccount } from "wagmi";

interface TokenCardProps {
  token: Token;
  onBuyToken: (token: Token, amount: string) => void;
}

const TokenCardMarket: React.FC<TokenCardProps> = ({ token, onBuyToken }) => {
  const { isConnected } = useAccount();

  const handleClick = () => {
    onBuyToken(token, "10");
  };

  return (
    <>
      <CardContent className="flex flex-col items-center space-y-2">
        <div className="bg-muted rounded-md px-4 py-2 text-center">
          <p className="text-sm font-medium text-foreground">Supply</p>
          <p className="text-lg font-bold text-primary">{token.supply.toLocaleString()}</p>
        </div>
      </CardContent>

      <CardFooter>
        <Button disabled={!isConnected} onClick={handleClick} variant="default" className="w-full">
          Buy
        </Button>
      </CardFooter>
    </>
  );
};

export default TokenCardMarket;

import React from "react";
import { Token } from "../../interfaces/token";
import { Button } from "../ui/button";
import { CardContent, CardFooter } from "../ui/card";

interface TokenCardProps {
  token: Token;
}

const TokenCardBought: React.FC<TokenCardProps> = ({ token: {} }) => {
  return (
    <>
      <CardContent className="flex flex-col items-center space-y-2">
        <div className="align-left full-w">
          <p className="text-sm font-medium text-foreground">Staked</p>
          <p className="text-lg font-bold text-primary">3000</p>
          <p className="text-sm font-medium text-foreground">Earned</p>
          <p className="text-lg font-bold text-primary">400</p>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="default" className="w-full">
          Unstake
        </Button>
      </CardFooter>
    </>
  );
};

export default TokenCardBought;

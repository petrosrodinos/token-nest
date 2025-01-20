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
        <div className="bg-muted rounded-md px-4 py-2 text-center">
          <p className="text-sm font-medium text-foreground">Bought</p>
          <p className="text-lg font-bold text-primary">5000</p>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="default" className="w-full">
          Stake
        </Button>
      </CardFooter>
    </>
  );
};

export default TokenCardBought;

import React from "react";
import { Token } from "../../interfaces/token";
import { Button } from "../ui/button";
import { CardContent, CardFooter } from "../ui/card";

interface TokenCardProps {
  token: Token;
}

const TokenCardMarket: React.FC<TokenCardProps> = ({ token: { supply } }) => {
  return (
    <>
      <CardContent className="flex flex-col items-center space-y-2">
        <div className="bg-muted rounded-md px-4 py-2 text-center">
          <p className="text-sm font-medium text-foreground">Sold</p>
          <p className="text-lg font-bold text-primary">{supply.toLocaleString()}</p>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="default" className="w-full">
          Buy
        </Button>
      </CardFooter>
    </>
  );
};

export default TokenCardMarket;

import React from "react";
import { Token } from "../../interfaces/token";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

interface TokenCardProps {
  token: Token;
}

const TokenCard: React.FC<TokenCardProps> = ({ token: { imageUrl, name, symbol, tokensSold } }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center">
        <img
          src={imageUrl}
          alt={`${name} logo`}
          className="w-16 h-16 rounded-full object-cover mb-4"
        />
        <CardTitle className="text-primary text-lg font-semibold">{name}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">{symbol}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center space-y-2">
        <div className="bg-muted rounded-md px-4 py-2 text-center">
          <p className="text-sm font-medium text-foreground">Sold</p>
          <p className="text-lg font-bold text-primary">{tokensSold.toLocaleString()}</p>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="default" className="w-full">
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TokenCard;

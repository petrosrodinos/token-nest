import React from "react";
import { Token } from "../../interfaces/token";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { token } from "../../constants/tokens";

interface TokenCardProps {
  token: Token;
  children: any;
}

const TokenCardLayout: React.FC<TokenCardProps> = ({
  children,
  token: { imageUrl, name, symbol },
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow w-64">
      <CardHeader className="flex flex-col items-center">
        <img
          src={imageUrl || token.imageUrl}
          alt={`${name} logo`}
          className="w-16 h-16 rounded-full object-cover mb-4"
        />
        <CardTitle className="text-primary text-lg font-semibold text-center break-words">
          {name}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">{symbol}</CardDescription>
      </CardHeader>
      {children}
    </Card>
  );
};

export default TokenCardLayout;

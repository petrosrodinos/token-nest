import React from "react";
import { Token } from "../../interfaces/token";

interface TokenCardProps {
  token: Token;
}

const TokenCard: React.FC<TokenCardProps> = ({ token: { imageUrl, name, symbol, tokensSold } }) => {
  return (
    <div className="border rounded-lg shadow-sm bg-card p-4 flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-shadow">
      <img src={imageUrl} alt={`${name} logo`} className="w-16 h-16 rounded-full object-cover" />

      <div>
        <h3 className="text-lg font-semibold text-primary">{name}</h3>
        <p className="text-sm text-muted-foreground">{symbol}</p>
      </div>

      <div className="bg-muted rounded-md px-4 py-2">
        <p className="text-sm font-medium text-foreground">Sold</p>
        <p className="text-lg font-bold text-primary">{tokensSold.toLocaleString()}</p>
      </div>

      <button className="mt-4 bg-primary text-white font-semibold py-2 px-6 rounded-md hover:bg-primary-dark transition-colors">
        Buy
      </button>
    </div>
  );
};

export default TokenCard;

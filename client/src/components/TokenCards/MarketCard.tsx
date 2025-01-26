import React, { useState } from "react";
import { Token } from "../../interfaces/token";
import { Button } from "../ui/button";
import { CardContent, CardFooter } from "../ui/card";
import { useAccount } from "wagmi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

interface TokenCardProps {
  token: Token;
  onBuyToken: (token: Token, amount: string) => void;
}

const TokenCardMarket: React.FC<TokenCardProps> = ({ token, onBuyToken }) => {
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState<string>("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleClick = () => {
    onBuyToken(token, amount);
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
        <Dialog>
          <DialogTrigger asChild>
            <Button disabled={!isConnected} variant="default" className="w-full">
              Buy
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Buy Tokens</DialogTitle>
              <DialogDescription>Enter the amount of tokens you want to buy.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  onChange={handleAmountChange}
                  type="number"
                  placeholder="amount"
                  id="amount"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                disabled={!isConnected || !amount || parseFloat(amount) > token.supply}
                onClick={handleClick}
                type="submit"
              >
                Buy
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </>
  );
};

export default TokenCardMarket;

import React, { useState } from "react";
import { Token } from "../../interfaces/token";
import { Button } from "../ui/button";
import { CardContent, CardFooter } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { token } from "../../constants/tokens";
import { Input } from "../ui/input";
import { useAccount } from "wagmi";

interface TokenCardProps {
  token: Token;
  onStateToken: (token: Token, amount: string) => void;
}

const TokenCardBought: React.FC<TokenCardProps> = ({ token: {}, onStateToken }) => {
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState<string>("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleClick = () => {
    onStateToken(token, amount);
  };

  return (
    <>
      <CardContent className="flex flex-col items-center space-y-2">
        <div className="bg-muted rounded-md px-4 py-2 text-center">
          <p className="text-sm font-medium text-foreground">Bought</p>
          <p className="text-lg font-bold text-primary">5000</p>
        </div>
      </CardContent>

      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button disabled={!isConnected} variant="default" className="w-full">
              Stake
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Stake Tokens</DialogTitle>
              <DialogDescription>Enter the amount of tokens you want to stake.</DialogDescription>
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
                Stake
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </>
  );
};

export default TokenCardBought;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { createTokenSchema } from "../../lib/validation-schemas";
import ContentHeader from "../../components/ContentHeader";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { abi } from "../../artifacts/contracts/TokenFactory.sol/TokenFactory.json";
import { Spinner } from "../../components/ui/spinner";

export default function CreateToken() {
  const createTokenForm = useForm<z.infer<typeof createTokenSchema>>({
    resolver: zodResolver(createTokenSchema),
    defaultValues: {
      name: "",
      symbol: "",
      totalSupply: "",
    },
  });

  // const { isConnecting, address, isConnected, chain } = useAccount();

  const { data: hash, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  function onSubmit(data: z.infer<typeof createTokenSchema>) {
    console.log("ASD", data);
    writeContract(
      {
        address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        abi,
        functionName: "createToken",
        args: [data.totalSupply, data.name, data.symbol],
      },
      {
        onSuccess: () => {
          createTokenForm.reset();
        },
      }
    );
  }

  return (
    <div className="w-full mt-[60px] mr-2">
      <ContentHeader
        title="Create Your Token"
        description="Easily create your custom ERC20 tokens in just a few clicks."
      />

      <div className="flex justify-center items-center">
        <Spinner size="lg" loading={isPending || isConfirming} color="blue" className="mt-4" />
      </div>

      {isConfirmed && (
        <div className="mt-2 mb-2 bg-green-500 text-white p-3 rounded-md">
          Token created successfully
        </div>
      )}
      <Form {...createTokenForm}>
        <form onSubmit={createTokenForm.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={createTokenForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Token Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createTokenForm.control}
            name="symbol"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Token Symbol</FormLabel>
                <FormControl>
                  <Input placeholder="symbol" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createTokenForm.control}
            name="totalSupply"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Token Supply</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="supply" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending || isConfirming} className="float-left" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

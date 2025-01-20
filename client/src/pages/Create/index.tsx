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

export default function CreateToken() {
  const createTokenForm = useForm<z.infer<typeof createTokenSchema>>({
    resolver: zodResolver(createTokenSchema),
    defaultValues: {
      name: "",
      symbol: "",
      totalSupply: "",
    },
  });

  function onSubmit(data: z.infer<typeof createTokenSchema>) {
    console.log("ASD", data);
  }

  return (
    <div className="w-full mt-[60px]">
      <div className="text-center py-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-4xl font-extrabold">Create Your Token</h1>
        <p className="mt-2 text-lg font-medium">
          Easily create your custom ERC20 tokens in just a few clicks.
        </p>
      </div>
      <Form {...createTokenForm}>
        <form onSubmit={createTokenForm.handleSubmit(onSubmit)} className="space-y-6 mr-2">
          <FormField
            control={createTokenForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
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
          <Button className="float-left" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

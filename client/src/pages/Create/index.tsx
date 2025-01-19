import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { createTokenSchema } from "../../lib/validation-schemas";
import { Button } from "../../components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";

const CreateToken: FC = () => {
  const createTokenForm = useForm<z.infer<typeof createTokenSchema>>({
    resolver: zodResolver(createTokenSchema),
    defaultValues: {
      name: "",
      symbol: "",
      totalSupply: 0,
      imageUrl: "",
    },
  });

  function onSubmit(values: z.infer<typeof createTokenSchema>) {
    console.log(values);
  }
  return (
    <>
      <div className="w-full mt-[60px]">
        <div className="text-center py-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <h1 className="text-4xl font-extrabold">Create Your Token</h1>
          <p className="mt-2 text-lg font-medium">
            Easily create your custom ERC20 tokens in just a few clicks.
          </p>
        </div>
        <Form className="max-w-[400px] mt-5" {...createTokenForm}>
          <form onSubmit={createTokenForm.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={createTokenForm.control}
              name="name"
              render={({ field }) => (
                <FormItem className="">
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
            <Button className="float-left" type="submit">
              create
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default CreateToken;

import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { swapperFormSchema } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";

export const SwapperForm: FC = () => {
  const form = useForm<z.infer<typeof swapperFormSchema>>({
    resolver: zodResolver(swapperFormSchema),
    defaultValues: {
      from: "",
      to: "",
    },
  });

  const onSubmit = (values: z.infer<typeof swapperFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full flex-col space-y-8"
      >
        <FormField
          control={form.control}
          name="from"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[22px] font-bold leading-none">
                From
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select asset" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="USDT">USDT</SelectItem>
                  <SelectItem value="USDC">USDC</SelectItem>
                  <SelectItem value="ETH">ETH</SelectItem>
                  <Button className="h-[71px] !w-full rounded-2xl font-TTFirsNeu text-[26px] font-medium">
                    Close
                  </Button>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="to"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[22px] font-bold leading-none">
                To
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select asset" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="USDT">USDT</SelectItem>
                  <SelectItem value="USDC">USDC</SelectItem>
                  <SelectItem value="ETH">ETH</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

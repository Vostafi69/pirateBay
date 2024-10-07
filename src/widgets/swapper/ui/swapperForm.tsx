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
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="from"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From</FormLabel>
              <FormControl>
                <Input placeholder="From" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="to"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To</FormLabel>
              <FormControl>
                <Input placeholder="To" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Approve</Button>
      </form>
    </Form>
  );
};

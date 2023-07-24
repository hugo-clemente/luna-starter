"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createWorkspace } from "./actions";
import schema from "./schema";
import { useTransition } from "react";

export default function NewWorkspace() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const [, startTransition] = useTransition();

  return (
    <>
      <h2 className="text-4xl font-bold">Create a new workspace</h2>

      <Form
        {...form}
        onSubmit={async (data) => {
          // Needs to be wrapped with startTransition because the server actions redirects
          startTransition(async () => {
            await createWorkspace({
              name: data.name,
            });
          });
        }}
        className="space-y-8 mt-4 self-start"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                A name to identify your workspace in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create</Button>
      </Form>
    </>
  );
}

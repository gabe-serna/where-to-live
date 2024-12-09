"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PreferenceContext } from "@/app/form/PreferenceProvider";
import { SetStateAction, Dispatch, useContext } from "react";

const formSchema = z.object({
  north_america: z.enum(["preferred", "neutral", "avoid"]),
  south_america: z.enum(["preferred", "neutral", "avoid"]),
  europe: z.enum(["preferred", "neutral", "avoid"]),
  asia: z.enum(["preferred", "neutral", "avoid"]),
  africa: z.enum(["preferred", "neutral", "avoid"]),
  oceania: z.enum(["preferred", "neutral", "avoid"]),
});

export default function Continent({
  setVisibility,
}: {
  setVisibility: Dispatch<SetStateAction<number>>;
}) {
  const { setPreferences } = useContext(PreferenceContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      north_america: "neutral",
      south_america: "neutral",
      europe: "neutral",
      asia: "neutral",
      africa: "neutral",
      oceania: "neutral",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { north_america, south_america, europe, asia, africa, oceania } =
      values;
    const NA = {
      label: "North America",
      preference: north_america,
    };
    const SA = {
      label: "South America",
      preference: south_america,
    };
    const EU = {
      label: "Europe",
      preference: europe,
    };
    const AS = {
      label: "Asia",
      preference: asia,
    };
    const AF = {
      label: "Africa",
      preference: africa,
    };
    const OC = {
      label: "Oceania",
      preference: oceania,
    };

    setPreferences((prev) => ({
      ...prev,
      geography: {
        continent: [NA, SA, EU, AS, AF, OC],
        noPreference: {
          ...prev.geography?.noPreference,
          continent: false,
        },
      },
    }));
    console.log("preferences updated");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 size-full space-y-16"
      >
        <section>
          <h2 className="mb-4 text-2xl font-bold">Continent</h2>
          <span className="grid w-fit grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="north_america"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>North America</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select Country Preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-40">
                      <SelectItem value="preferred">Preferred</SelectItem>
                      <SelectItem value="neutral">Neutral</SelectItem>
                      <SelectItem value="avoid">Avoid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="south_america"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>South America</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select Country Preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-40">
                      <SelectItem value="preferred">Preferred</SelectItem>
                      <SelectItem value="neutral">Neutral</SelectItem>
                      <SelectItem value="avoid">Avoid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="europe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Europe</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select Country Preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-40">
                      <SelectItem value="preferred">Preferred</SelectItem>
                      <SelectItem value="neutral">Neutral</SelectItem>
                      <SelectItem value="avoid">Avoid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="asia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asia</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select Country Preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-40">
                      <SelectItem value="preferred">Preferred</SelectItem>
                      <SelectItem value="neutral">Neutral</SelectItem>
                      <SelectItem value="avoid">Avoid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="africa"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Africa</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select Country Preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-40">
                      <SelectItem value="preferred">Preferred</SelectItem>
                      <SelectItem value="neutral">Neutral</SelectItem>
                      <SelectItem value="avoid">Avoid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="oceania"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Oceania</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select Country Preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-40">
                      <SelectItem value="preferred">Preferred</SelectItem>
                      <SelectItem value="neutral">Neutral</SelectItem>
                      <SelectItem value="avoid">Avoid</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </span>
          <Button
            type="submit"
            onClick={() => setVisibility(1.2)}
            className="ml-auto mt-8 block w-32"
          >
            Next
          </Button>
        </section>
      </form>
    </Form>
  );
}

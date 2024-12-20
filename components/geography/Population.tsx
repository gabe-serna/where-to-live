"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { PreferenceContext } from "@/app/form/PreferenceProvider";
import { SetStateAction, Dispatch, useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import NavigateButton from "@/components/NavigateButton";
import { SettlementSlider } from "@/components/SettlementSlider";

const formSchema = z.object({
  pop_tiny: z.enum(["preferred", "neutral", "avoid"]),
  pop_small: z.enum(["preferred", "neutral", "avoid"]),
  pop_moderate: z.enum(["preferred", "neutral", "avoid"]),
  pop_large: z.enum(["preferred", "neutral", "avoid"]),
  pop_massive: z.enum(["preferred", "neutral", "avoid"]),
  density_low: z.enum(["preferred", "neutral", "avoid"]),
  density_medium: z.enum(["preferred", "neutral", "avoid"]),
  density_high: z.enum(["preferred", "neutral", "avoid"]),
  urban_percentage: z.number().min(0).max(100),
  rural_percentage: z.number().min(0).max(100),
});

export default function Population({
  setVisibility,
}: {
  setVisibility: Dispatch<SetStateAction<number>>;
}) {
  const { setPreferences } = useContext(PreferenceContext);
  const [ruralPercent, setRuralPercent] = useState(50);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pop_tiny: "neutral",
      pop_small: "neutral",
      pop_moderate: "neutral",
      pop_large: "neutral",
      pop_massive: "neutral",
      density_low: "neutral",
      density_medium: "neutral",
      density_high: "neutral",
      urban_percentage: 0,
      rural_percentage: 0,
    },
  });

  const { handleSubmit } = form;

  const handleClick = (index: number) => {
    handleSubmit(onSubmit)();
    setVisibility(index);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const {
      pop_tiny,
      pop_small,
      pop_moderate,
      pop_large,
      pop_massive,
      density_low,
      density_medium,
      density_high,
      urban_percentage,
      rural_percentage,
    } = values;
    const popTiny = {
      label: "Tiny",
      preference: pop_tiny,
    };
    const popSmall = {
      label: "Small",
      preference: pop_small,
    };
    const popModerate = {
      label: "Moderate",
      preference: pop_moderate,
    };
    const popLarge = {
      label: "Large",
      preference: pop_large,
    };
    const popMassive = {
      label: "Massive",
      preference: pop_massive,
    };
    const densityLow = {
      label: "Low",
      preference: density_low,
    };
    const densityMedium = {
      label: "Medium",
      preference: density_medium,
    };
    const densityHigh = {
      label: "High",
      preference: density_high,
    };

    setPreferences((prev) => ({
      ...prev,
      geography: {
        population: [popTiny, popSmall, popModerate, popLarge, popMassive],
        density: [densityLow, densityMedium, densityHigh],
        urbanPercentage: urban_percentage,
        ruralPercentage: rural_percentage,
        noPreference: {
          ...prev.geography?.noPreference,
          continent: false,
        },
      },
    }));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 size-full space-y-16"
      >
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-muted-foreground">
            Population
          </h2>
          <span className="grid w-fit grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="pop_tiny"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tiny</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Neutral" />
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
              name="pop_small"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Small</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Neutral" />
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
              name="pop_moderate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Moderate</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Neutral" />
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
              name="pop_large"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Large</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Neutral" />
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
              name="pop_massive"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Massive</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Neutral" />
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
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-muted-foreground">
            Density
          </h2>
          <span className="grid w-fit grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="density_low"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Low</FormLabel>
                  <div className="flex flex-col">
                    <label>
                      <input
                        type="radio"
                        value="preferred"
                        checked={field.value === "preferred"}
                        onChange={field.onChange}
                      />
                      Preferred
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="neutral"
                        checked={field.value === "neutral"}
                        onChange={field.onChange}
                      />
                      Neutral
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="avoid"
                        checked={field.value === "avoid"}
                        onChange={field.onChange}
                      />
                      Avoid
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="density_medium"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Medium</FormLabel>
                  <div className="flex flex-col">
                    <label>
                      <input
                        type="radio"
                        value="preferred"
                        checked={field.value === "preferred"}
                        onChange={field.onChange}
                      />
                      Preferred
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="neutral"
                        checked={field.value === "neutral"}
                        onChange={field.onChange}
                      />
                      Neutral
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="avoid"
                        checked={field.value === "avoid"}
                        onChange={field.onChange}
                      />
                      Avoid
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="density_high"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>High</FormLabel>
                  <div className="flex flex-col">
                    <label>
                      <input
                        type="radio"
                        value="preferred"
                        checked={field.value === "preferred"}
                        onChange={field.onChange}
                      />
                      Preferred
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="neutral"
                        checked={field.value === "neutral"}
                        onChange={field.onChange}
                      />
                      Neutral
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="avoid"
                        checked={field.value === "avoid"}
                        onChange={field.onChange}
                      />
                      Avoid
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </span>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-muted-foreground">
            Settlement Type
          </h2>
          <span className="flex gap-8">
            <FormField
              control={form.control}
              name="urban_percentage"
              render={({ field }) => (
                <FormItem className="flex flex-col-reverse items-center">
                  <FormLabel className="font-bold uppercase tracking-wide text-gray-600">
                    Urban
                  </FormLabel>
                  <Input
                    type="number"
                    {...field}
                    min={0}
                    value={Math.abs(ruralPercent - 100)}
                    max={100}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                    className="pointer-events-none border-0 bg-transparent p-0 pr-1 text-right"
                    tabIndex={-1}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <SettlementSlider
              defaultValue={[50]}
              max={100}
              step={5}
              onChange={(e) => {
                setRuralPercent(parseInt((e.target as HTMLInputElement).value));
              }}
              className="mt-6 max-w-72"
            />
            <FormField
              control={form.control}
              name="rural_percentage"
              render={({ field }) => (
                <FormItem className="flex flex-col-reverse items-center">
                  <FormLabel className="font-bold uppercase tracking-wide text-gray-600">
                    Rural
                  </FormLabel>
                  <Input
                    type="number"
                    {...field}
                    min={0}
                    value={ruralPercent}
                    max={100}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                    className="pointer-events-none border-0 bg-transparent p-0 pr-1 text-right"
                    tabIndex={-1}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </span>
          <span className="mt-8 flex w-full justify-between">
            <NavigateButton type="back" handleClick={handleClick} index={1.1} />
            <NavigateButton type="next" handleClick={handleClick} index={1.3} />
          </span>
        </section>
      </form>
    </Form>
  );
}

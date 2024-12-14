"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PreferenceContext } from "@/app/form/PreferenceProvider";
import { SetStateAction, Dispatch, useContext } from "react";
import { Input } from "@/components/ui/input";
import NavigateButton from "@/components/NavigateButton";

const formSchema = z.object({
  climate_continental: z.enum(["preferred", "neutral", "avoid"]),
  climate_desert: z.enum(["preferred", "neutral", "avoid"]),
  climate_highlands: z.enum(["preferred", "neutral", "avoid"]),
  climate_mediterranean: z.enum(["preferred", "neutral", "avoid"]),
  climate_semi_arid: z.enum(["preferred", "neutral", "avoid"]),
  climate_subtropical: z.enum(["preferred", "neutral", "avoid"]),
  climate_subarctic: z.enum(["preferred", "neutral", "avoid"]),
  climate_temperate: z.enum(["preferred", "neutral", "avoid"]),
  climate_tropical: z.enum(["preferred", "neutral", "avoid"]),
  min_temp: z.number().min(-100).max(100),
  max_temp: z.number().min(-100).max(100),
});

export default function Climate({
  setVisibility,
}: {
  setVisibility: Dispatch<SetStateAction<number>>;
}) {
  const { preferences, setPreferences } = useContext(PreferenceContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      climate_continental: "neutral",
      climate_desert: "neutral",
      climate_highlands: "neutral",
      climate_mediterranean: "neutral",
      climate_semi_arid: "neutral",
      climate_subtropical: "neutral",
      climate_subarctic: "neutral",
      climate_temperate: "neutral",
      climate_tropical: "neutral", // DEBUG-- FIX THIS
      min_temp: preferences.geography?.temperature?.avgTempLow || 5,
      max_temp: preferences.geography?.temperature?.avgTempHigh || 15,
    },
  });

  const { handleSubmit } = form;

  const handleClick = (index: number) => {
    handleSubmit(onSubmit)();
    setVisibility(index);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const {
      climate_continental,
      climate_desert,
      climate_highlands,
      climate_mediterranean,
      climate_semi_arid,
      climate_subtropical,
      climate_subarctic,
      climate_temperate,
      climate_tropical,
      min_temp,
      max_temp,
    } = values;
    const c_continental = {
      label: "Continental",
      preference: climate_continental,
    };
    const c_desert = {
      label: "Desert",
      preference: climate_desert,
    };
    const c_highlands = {
      label: "Highlands",
      preference: climate_highlands,
    };
    const c_mediterranean = {
      label: "Mediterranean",
      preference: climate_mediterranean,
    };
    const c_semiArid = {
      label: "Semi-Arid",
      preference: climate_semi_arid,
    };
    const c_subtropical = {
      label: "Subtropical",
      preference: climate_subtropical,
    };
    const c_subarctic = {
      label: "Subarctic",
      preference: climate_subarctic,
    };
    const c_temperate = {
      label: "Temperate",
      preference: climate_temperate,
    };
    const c_tropical = {
      label: "Tropical",
      preference: climate_tropical,
    };

    setPreferences((prev) => ({
      ...prev,
      geography: {
        ...prev.geography,
        climate: [
          c_continental,
          c_desert,
          c_highlands,
          c_mediterranean,
          c_semiArid,
          c_subtropical,
          c_subarctic,
          c_temperate,
          c_tropical,
        ],
        temperature: {
          avgTempLow: min_temp,
          avgTempHigh: max_temp,
        },
        noPreference: {
          ...prev.geography?.noPreference,
          climate: false,
          temperature: false,
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
          <h2 className="mb-4 text-2xl font-bold">Climate</h2>
          <span className="grid w-fit grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="climate_continental"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Continental</FormLabel>
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
              name="climate_desert"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Desert</FormLabel>
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
              name="climate_highlands"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Highlands</FormLabel>
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
              name="climate_mediterranean"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mediterranean</FormLabel>
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
              name="climate_semi_arid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Semi-Arid</FormLabel>
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
              name="climate_subtropical"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtropical</FormLabel>
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
              name="climate_subarctic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subarctic</FormLabel>
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
              name="climate_temperate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Temperate</FormLabel>
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
              name="climate_tropical"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tropical</FormLabel>
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
          <h2 className="mb-4 text-2xl font-bold">Temperature</h2>
          <span className="grid w-fit grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="min_temp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Min Temperature (°C)</FormLabel>
                  <Input
                    type="number"
                    {...field}
                    min={-100}
                    max={100}
                    defaultValue={
                      preferences.geography?.temperature?.avgTempLow || 5
                    }
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                    placeholder="Enter Min Temperature"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="max_temp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Max Temperature (°C)</FormLabel>
                  <Input
                    type="number"
                    {...field}
                    min={-100}
                    max={100}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                    placeholder="Enter Max Temperature"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </span>
          <span className="mt-8 flex w-full justify-between">
            <NavigateButton type="back" handleClick={handleClick} index={1.2} />
            <NavigateButton type="next" handleClick={handleClick} index={2} />
          </span>
        </section>
      </form>
    </Form>
  );
}

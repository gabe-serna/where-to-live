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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { GeographyScores } from "@/types/userScores";
import { calculateGeographyScore } from "@/lib/calculateScore";
import { COUNTRY_DATA } from "@/constants/countryData";
import { ScoresContext, ScoresData } from "@/app/ScoresProvider";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  north_america: z.enum(["preferred", "neutral", "avoid"]),
  south_america: z.enum(["preferred", "neutral", "avoid"]),
  europe: z.enum(["preferred", "neutral", "avoid"]),
  asia: z.enum(["preferred", "neutral", "avoid"]),
  africa: z.enum(["preferred", "neutral", "avoid"]),
  oceania: z.enum(["preferred", "neutral", "avoid"]),
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

export default function Geography() {
  const { setScores } = useContext(ScoresContext);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      north_america: "neutral",
      south_america: "neutral",
      europe: "neutral",
      asia: "neutral",
      africa: "neutral",
      oceania: "neutral",
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
      climate_continental: "neutral",
      climate_desert: "neutral",
      climate_highlands: "neutral",
      climate_mediterranean: "neutral",
      climate_semi_arid: "neutral",
      climate_subtropical: "neutral",
      climate_subarctic: "neutral",
      climate_temperate: "neutral",
      climate_tropical: "neutral",
      min_temp: 5,
      max_temp: 15,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const {
      north_america,
      south_america,
      europe,
      asia,
      africa,
      oceania,
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
    const scores: GeographyScores = {
      continent: [NA, SA, EU, AS, AF, OC],
      population: [popTiny, popSmall, popModerate, popLarge, popMassive],
      density: [densityLow, densityMedium, densityHigh],
      urbanPercentage: urban_percentage,
      ruralPercentage: rural_percentage,
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
        continent: false,
        population: false,
        density: false,
        urbanPercentage: false,
        ruralPercentage: false,
        climate: false,
        temperature: false,
      },
    };
    COUNTRY_DATA.forEach((country) => {
      const { points, total } = calculateGeographyScore(
        scores,
        country.geography,
      );
      const score = points / total;

      setScores((prev: ScoresData[]) => [
        ...prev,
        { country: country.name, score },
      ]);
    });

    router.push("/map");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="size-full flex-col space-y-8"
      >
        <header>
          <h1 className="text-center text-2xl font-semibold">Geography</h1>
          <hr className="border-white" />
        </header>
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
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold">Population</h2>
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
          <h2 className="mb-4 text-2xl font-bold">Density</h2>
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
          <h2 className="mb-4 text-2xl font-bold">Settlement Type</h2>
          <span className="grid w-fit grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="urban_percentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Urban Percentage</FormLabel>
                  <Input
                    type="number"
                    {...field}
                    min={0}
                    max={100}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                    placeholder="Enter Urban Percentage"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rural_percentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rural Percentage</FormLabel>
                  <Input
                    type="number"
                    {...field}
                    min={0}
                    max={100}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                    placeholder="Enter Rural Percentage"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </span>
        </section>

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
        </section>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

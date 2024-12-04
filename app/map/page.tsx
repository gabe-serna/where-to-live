"use client";
import R3FCanvas from "@/components/R3FCanvas";
import Experience from "@/components/Experience";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useContext, useEffect } from "react";
import ScoreProvider, { ScoreContext } from "../ScoreProvider";

export default function Map() {
  const { score, setScore } = useContext(ScoreContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const countryName = formData.get("country") as string;
    const scoreValue = formData.get("score") as unknown as number;
    setScore({ country: countryName, score: scoreValue });
  };

  return (
    <>
      <R3FCanvas>
        <Experience />
      </R3FCanvas>
      <div className="fixed bottom-0 left-10 top-0 my-auto h-[50vh] max-h-[400px] w-52 rounded-sm bg-zinc-800 bg-opacity-60 p-6 backdrop-blur-lg">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="country"
            placeholder="Country Name"
            className="placeholder:text-zinc-600"
          />
          <Input type="number" name="score" min={0} max={1} step={0.01} />
          <Button type="submit" variant="secondary">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

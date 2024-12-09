"use client";
import R3FCanvas from "@/components/R3FCanvas";
import Experience from "@/components/Experience";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useContext, useEffect } from "react";
import { ScoresContext } from "@/app/ScoresProvider";

export default function Map() {
  const { scores } = useContext(ScoresContext);

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const countryName = formData.get("country") as string;
  //   const scoreValue = formData.get("score") as unknown as number;
  //   setScores([ ...scores, {country: countryName, score: scoreValue} ]);
  // };

  return (
    <>
      <R3FCanvas>
        <Experience />
      </R3FCanvas>
      <div className="fixed bottom-0 left-10 top-0 my-auto h-[50vh] max-h-[400px] w-52 overflow-y-scroll rounded-sm bg-zinc-800 bg-opacity-60 p-6 backdrop-blur-lg">
        {scores.length > 0 ? (
          (() => {
            const sortedScores = scores.toSorted((a, b) => b.score - a.score);

            return (
              <>
                {sortedScores.map(({ country, score }) => (
                  <p key={country}>
                    {country}: {(score * 100).toFixed(2)}%
                  </p>
                ))}
              </>
            );
          })()
        ) : (
          <p>No Scores</p>
        )}
      </div>
    </>
  );
}

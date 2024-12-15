"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  type: "next" | "back";
  handleClick: (index: number) => void;
  index: number;
}

export default function NavigateButton({ type, handleClick, index }: Props) {
  return (
    <Button
      type="submit"
      onClick={() => handleClick(index)}
      className={`mt-8 block h-max w-min ${type === "next" ? "ml-auto" : "mr-auto"}`}
      variant="ghost"
    >
      {type === "next" ? (
        <ChevronRight className="size-8 stroke-gray-500" />
      ) : (
        <ChevronLeft className="size-8 stroke-gray-500" />
      )}
    </Button>
  );
}

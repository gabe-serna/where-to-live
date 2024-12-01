"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface Props {
  children: React.ReactNode;
  route: string;
}

export default function RoutingButton({ children, route }: Props) {
  const router = useRouter();

  return (
    <Button className="rounded-sm" onClick={() => router.push("/" + route)}>
      {children}
    </Button>
  );
}

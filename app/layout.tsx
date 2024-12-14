import type { Metadata } from "next";
import { fontBody, fontHeading } from "@/lib/fonts";
import "./globals.css";
import ScoresProvider from "./ScoresProvider";

export const metadata: Metadata = {
  title: "Where to Live",
  description:
    "Find the perfect place in world to live based on your preferences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        <header></header>
        <ScoresProvider>
          <main className="relative">{children}</main>
        </ScoresProvider>
        <footer></footer>
      </body>
    </html>
  );
}

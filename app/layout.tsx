import type { Metadata } from "next";
import { fontBody, fontHeading } from "@/lib/fonts";
import "./globals.css";

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
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}

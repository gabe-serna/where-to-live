import { Kumbh_Sans, Playfair_Display } from "next/font/google";

export const fontBody = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const fontHeading = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

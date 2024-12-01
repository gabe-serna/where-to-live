import { Bitter, Cormorant_Infant } from "next/font/google";

export const fontBody = Bitter({ 
  subsets: ['latin'],
  variable: '--font-body',
});

export const fontHeading = Cormorant_Infant({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
});

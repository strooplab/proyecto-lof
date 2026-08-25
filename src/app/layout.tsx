import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const corGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucero Ortega Atelier",
  description:
    "Una página web tipo E-Commerce Boutique con catálogo por categorías.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${corGaramond.variable} ${jost.variable} h-full antialiased`}
    >
      <link
        rel="stylesheet"
        precedence="default"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

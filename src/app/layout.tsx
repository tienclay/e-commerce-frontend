import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Header from "./_components/Header";

const lato: NextFontWithVariable = localFont({
  src: "./fonts/Lato-Regular.ttf",
  variable: "--font-lato",
  weight: "100 900",
});

const karla: NextFontWithVariable = localFont({
  src: "./fonts/Karla-VariableFont_wght.ttf",
  variable: "--font-karla",
  weight: "100 900",
});
const sedan: NextFontWithVariable = localFont({
  src: "./fonts/Sedan-Regular.ttf",
  variable: "--font-sedan",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sedan.variable} ${karla.variable} ${lato.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

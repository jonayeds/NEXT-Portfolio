import type { Metadata } from "next";
import localHeading from "next/font/local";
import {SUSE} from "next/font/google"
import "./globals.css";

const fontHeading = localHeading({
  src: "../assets/fonts/font-heading/Rebeqa-Regular.ttf",
  variable:"--font-rebeqa"
})

const fontDescription = SUSE({
  subsets:["latin"],
  variable:"--font-suse"
})

export const metadata: Metadata = {
  title: "Sajjad Jonayed",
  description: "Fullstack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.variable} ${fontDescription.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

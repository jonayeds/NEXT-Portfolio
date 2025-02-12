
import type { Metadata } from "next";
import localHeading from "next/font/local";
import {SUSE} from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";
import SocialNavigation from "@/components/SocialNavigation";
import Providers from "@/redux/lib/providers";
import { Toaster } from "sonner";

const fontHeading = localHeading({
  src: "../assets/fonts/font-heading/Rebeqa-SemiBold.ttf",
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
    <Providers>
      <html lang="en">
      <body
        className={`${fontHeading.variable} ${fontDescription.variable} bg-light text-dark`}
      >
        <Toaster position="top-center" />
        <Navbar/>
        <SocialNavigation/> 
        {children}
      </body>
    </html>
    </Providers>
  );
}

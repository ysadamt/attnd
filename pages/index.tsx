import Navbar from "@/components/Navbar";
import { SignInButton } from "@clerk/clerk-react";
import { useStoreUserEffect } from "@/hooks/useStoreUserEffect";
import { Button } from "@/components/ui/button";
import { ArrowRight, LoaderCircle, LogIn, Plus } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Caprasimo } from "next/font/google";

const caprasimo = Caprasimo({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const { isLoading, isAuthenticated } = useStoreUserEffect();

  return (
    <div>
      {isLoading ? (
        <div className="w-full h-[calc(100dvh)] justify-center items-center flex">
          <LoaderCircle className="h-12 w-12 animate-spin" />
        </div>
      ) : isAuthenticated ? (
        <main>
          <Navbar />
          <div className="p-4 flex flex-col w-full gap-8">
            <h1 className={`${caprasimo.className} text-3xl -mb-4`}>Current</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/upcoming">
                <Card className="bg-white hover:bg-[hsl(36,44%,80%)] transition-all h-64 flex justify-center items-center text-center">
                  <CardHeader>
                    <CardTitle className={`${caprasimo.className}`}>TAMUhack</CardTitle>
                    <CardDescription>2024 - 2025</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/upcoming">
                <Card className="bg-white hover:bg-[hsl(36,44%,80%)] transition-all h-64 flex justify-center items-center text-center">
                  <CardHeader>
                    <CardTitle className={`${caprasimo.className}`}>HackMIT</CardTitle>
                    <CardDescription>2024 - 2025</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="">
                <Card className="bg-white hover:bg-[hsl(36,44%,80%)] transition-all h-64 flex justify-center items-center text-center">
                  <CardHeader>
                    <Plus className="h-12 w-12" />
                  </CardHeader>
                </Card>
              </Link>
            </div>
            <h1 className={`${caprasimo.className} text-3xl -mb-4`}>Archived</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/upcoming">
                <Card className="bg-white hover:bg-[hsl(36,44%,80%)] transition-all h-64 flex justify-center items-center text-center">
                  <CardHeader>
                    <CardTitle className={`${caprasimo.className}`}>TAMU SHPE</CardTitle>
                    <CardDescription>2023 - 2024</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/upcoming">
                <Card className="bg-white hover:bg-[hsl(36,44%,80%)] transition-all h-64 flex justify-center items-center text-center">
                  <CardHeader>
                    <CardTitle className={`${caprasimo.className}`}>Logarythms</CardTitle>
                    <CardDescription>2023 - 2024</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </main>
      ) : (
        <div className="h-[calc(100dvh)] w-full flex items-center justify-center gap-8">
          <div className="flex gap-8 flex-col w-[500px]">
            <p className={`${caprasimo.className} text-9xl font-bold`}>Attnd</p>
            <p className="font-medium text-lg italic">Streamline your student organization's events with Attnd, the all-in-one platform for seamless attendance tracking, analytics, and event management.</p>
          </div>
          <SignInButton>
            <ArrowRight className="h-72 w-72 hover:-rotate-45 transition-all cursor-pointer" />
          </SignInButton>
        </div>
      )
      }
    </div >
  );
}

import Navbar from "@/components/Navbar";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { api } from "../convex/_generated/api";
import { useEffect } from "react";
import { useStoreUserEffect } from "@/hooks/useStoreUserEffect";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export default function Home() {
  const { isLoading, isAuthenticated } = useStoreUserEffect();

  return (
    <div>
      {isLoading ? (
        <>Loading...</>
      ) : isAuthenticated ? (
        <main>
          <Navbar />

        </main>
      ) : (
        <div className="h-[calc(100dvh)] w-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">Attendance Tracker</h1>
          <p className="text-xl">Sign in to get started!</p>
          <SignInButton>
            <Button>
              <LogIn className="mr-2 h-4 w-4" />Login
            </Button>
          </SignInButton>
        </div>
      )}
    </div>
  );
}

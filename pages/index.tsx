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
        <div className="h-[calc(100dvh)] w-full flex items-center justify-center">
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

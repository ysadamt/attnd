import Navbar from "@/components/Navbar";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { api } from "../convex/_generated/api";
import { useEffect } from "react";
import { useStoreUserEffect } from "@/hooks/useStoreUserEffect";

export default function Home() {
  const { isLoading, isAuthenticated } = useStoreUserEffect();

  return (
    <div>
      {isLoading ? (
        <>Loading...</>
      ) : isAuthenticated ? (
        <main>
          <Navbar />
          <div>
            bruh
          </div>
        </main>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

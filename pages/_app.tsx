import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(
    process.env.NEXT_PUBLIC_CONVEX_URL as string
);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ClerkProvider publishableKey="pk_test_YnJpZWYtcG9zc3VtLTU0LmNsZXJrLmFjY291bnRzLmRldiQ">
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                <Component {...pageProps} />
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}

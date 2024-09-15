import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { House } from "lucide-react";

export default function Page() {
    return (
        <main className="grid place-items-center min-h-screen">
            <div className="flex flex-col items-center">
                <p>This code has already been used :(</p>
                <Link
                    href={"/"}
                    className={buttonVariants({ variant: "link" })}
                >
                    <House className="w-4 h-4 mr-2"/>
                    Back to home
                </Link>
            </div>
        </main>
    );
}

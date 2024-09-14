import LinkDisplay from "@/components/LinkDisplay";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function page() {
    const [size, setSize] = useState(256);
    const baseURL = "/api/attendance/"


    return (
        <main className="">
            <div className="flex justify-around">
                <Link href="/" className="flex items-center">
                    <ArrowLeft /> Return to home
                </Link>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSize((prevSize) => prevSize - 50)}
                    >
                        Smaller
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSize((prevSize) => prevSize + 50)}
                    >
                        Larger
                    </Button>
                </div>
            </div>
            <div className="mx-auto" style={{ maxWidth: size }}>
                <LinkDisplay link={baseURL} />
            </div>
        </main>
    );
}

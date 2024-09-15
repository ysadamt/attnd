import LinkDisplay from "@/components/LinkDisplay";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useRouter } from "next/router";

export default function Page() {
    const [size, setSize] = useState(256);
    const [id, setId] = useState("");
    const baseURL = "https://attnd-hackmit2024.vercel.app/api/attendance/";
    const router = useRouter();

    const createId = useMutation(api.qr.createLink);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const eventID = urlParams.get("event")!;

        const startup = async () => {
            const newId = await createId({ eventID: eventID as Id<"events"> });
            setId(newId);
        };
        startup();
    }, []);

    const data = useQuery(
        api.qr.getLink,
        id !== "" ? { id: id as Id<"qrids"> } : "skip"
    );

    if (!data) {
        return;
    }

    if (data.scanned) {
        router.reload();
    }
    
    console.log(baseURL + data._id)

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
                <LinkDisplay link={baseURL + data._id} />
            </div>
        </main>
    );
}

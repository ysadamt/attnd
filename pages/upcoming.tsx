import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Page() {
    const data = useQuery(api.events.getEvents);
    if (!data) {
        return;
    }
    return (
        <>
            <Navbar />
            <main className="p-8">
                {data.map((event) => (
                    // <div className="mb-4">
                    // </div>
                    <Card className="max-w-lg mx-auto mb-4">
                        <CardHeader>
                            <CardTitle>{event.name}</CardTitle>
                            <CardDescription>
                                {event.location} {event.start}-{event.end}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{event.description}</p>
                        </CardContent>
                        <CardFooter className="flex flex-wrap gap-2">
                            <Link
                                href={`/qr/?event=${event._id}`}
                                className={buttonVariants({
                                    variant: "outline",
                                })}
                            >
                                Dynamic code
                            </Link>
                            <Link
                                href={`/static/?event=${event._id}`}
                                className={buttonVariants({
                                    variant: "outline",
                                })}
                            >
                                Static code
                            </Link>
                            <Link
                                href={"/stats"}
                                className={buttonVariants({ variant: "link" })}
                                style={{ color: "black" }}
                            >
                                View stats
                            </Link>
                            <Link
                                href={"/photos"}
                                className={buttonVariants({ variant: "link" })}
                                style={{ color: "black" }}
                            >
                                Photos
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </main>
        </>
    );
}

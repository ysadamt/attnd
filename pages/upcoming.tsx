import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";

type Repo = {
    name: string;
    stargazers_count: number;
};

type Event = {
    eventId: string;
    name: string;
    description: string;
    start: string;
    end: string;
    location: string;
    rsvps: Id<"users">[];
    attendees: Id<"users">[];
};

export default function Page() {
    const data = useQuery(api.events.getEvents);
    if (!data) {
        return;
    }
    return (
        <main>
            {data.map((event) => (
                <Link href={`/qr/${event._id}`}>{event.name}</Link>
            ))}
        </main>
    );
}

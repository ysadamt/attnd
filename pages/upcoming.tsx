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
    co// import { query } from "./_generated/server";
    // import { v } from "convex/values";
    
    // // Return the last 100 tasks in a given task list.
    // export const getEvents = query({
    //   args: {},
    //   handler: async (ctx, args) => {
    //     const events = await ctx.db
    //       .query("events")
    //       .order("desc")
    //       .take(100);
    //     return events;
    //   },
    // });nst data = useQuery(api.events.getEvents);
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

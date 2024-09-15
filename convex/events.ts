import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { updateLink } from "./qr";

// Return the last 100 tasks in a given task list.
export const getEvents = query({
    args: {},
    handler: async (ctx, args) => {
        const events = await ctx.db.query("events").order("desc").take(100);
        return events;
    },
});

export const getEvent = query({
    args: { eventID: v.id("events") },

    handler: async (ctx, args) => {
        const event = await ctx.db
            .query("events")
            .filter((q) => q.eq(q.field("_id"), args.eventID))
            .unique();
        return event;
    },
});


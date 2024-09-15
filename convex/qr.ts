import { mutation, query } from "./_generated/server";
import { v, ConvexError } from "convex/values";

export const createLink = mutation({
    args: {eventID: v.id("events")},
    handler: async (ctx, args) => {
        const uniqueID = await ctx.db.insert("qrids", {
            scanned: false,
            eventID: args.eventID
        });
        return uniqueID;
    },
});

export const updateLink = mutation({
    args: { id: v.id("qrids") },
    handler: async (ctx, args) => {
        const { id } = args;
        const data = await ctx.db.get(id);
        if (!data || data.scanned) {
            throw new ConvexError("Code has already been used");
        }
        await ctx.db.patch(id, { scanned: true });
    },
});

export const getLink = query({
    args: { id: v.id("qrids") },
    handler: async (ctx, args) => {
        const { id } = args;
        const doc = await ctx.db.get(id);
        return doc;
    },
});

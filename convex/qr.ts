import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createLink = mutation({
    args: {},
    handler: async (ctx, args) => {
        const uniqueID = await ctx.db.insert("qrids", {
            scanned: false,
        });
        return uniqueID;
    },
});

export const updateLink = mutation({
    args: { id: v.id("qrids") },
    handler: async (ctx, args) => {
        const { id } = args;
        await ctx.db.patch(id, {scanned: true});
    },
});

import { mutation, query } from "./_generated/server";
import { v, ConvexError } from "convex/values";

export const createLink = mutation({
    args: { eventID: v.id("events") },
    handler: async (ctx, args) => {
        const uniqueID = await ctx.db.insert("qrids", {
            scanned: false,
            eventID: args.eventID,
        });
        return uniqueID;
    },
});

export const updateLink = mutation({
    args: { id: v.id("qrids") },
    handler: async (ctx, args) => {
        // const identity = await ctx.auth.getUserIdentity();
        // if (!identity) {
        //     throw new Error(
        //         "The user somehow logged out after middleware and before api load"
        //     );
        // }

        // const user = await ctx.db
        //     .query("users")
        //     .withIndex("by_token", (q) =>
        //         q.eq("tokenIdentifier", identity.tokenIdentifier)
        //     )
        //     .unique();

        const { id } = args;
        const data = await ctx.db.get(id);
        if (!data || data.scanned) {
            throw new ConvexError("Code has already been used");
        }

        // const event = await ctx.db.get(data.eventID);

        // if (user !== null && event !== null) {
        //     try {
        //         await ctx.db.patch(data.eventID, {
        //             attendees: [...event.attendees, user._id],
        //         });
        //         await ctx.db.patch(user._id, {
        //             eventsAttended: [...user.eventsAttended, data.eventID],
        //         });
                await ctx.db.patch(id, { scanned: true });
            // } catch (error) {
            //     console.log(error);
            // }
        // }
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

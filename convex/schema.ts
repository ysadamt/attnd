import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  qrids: defineTable({
    scanned: v.boolean(),
    eventID: v.id("events"),
  }),
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
  events: defineTable({

  })
});

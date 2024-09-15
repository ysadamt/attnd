import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  qrids: defineTable({
    scanned: v.boolean(),
  }),
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
    email: v.string(),
    eventsAttended: v.array(v.id("events")),
  }).index("by_token", ["tokenIdentifier"]),
  events: defineTable({
    eventId: v.string(),
    name: v.string(),
    description: v.string(),
    start: v.string(),
    end: v.string(),
    location: v.string(),
    rsvps: v.array(v.id("users")),
    attendees: v.array(v.id("users")),
  }),
});

import type { NextApiRequest, NextApiResponse } from "next";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { ConvexHttpClient } from "convex/browser";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {
        query: { personalID },
        method,
    } = req;

    const httpClient = new ConvexHttpClient(
        process.env.NEXT_PUBLIC_CONVEX_URL as string
    );

    if (method !== "GET") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    if (typeof personalID !== "string") {
        return res.status(400).json({ error: "Invalid personalID" });
    }

    console.log(`Received personalID: ${personalID}`);

    if (personalID !== "") {
        try {
            await httpClient.mutation(api.qr.updateLink, {
                id: personalID as Id<"qrids">,
            });
        } catch {
            const redirectUrl = "/used";

            res.writeHead(302, { Location: redirectUrl });
            res.end();
        }
    }

    const redirectUrl = `/`;

    res.writeHead(302, { Location: redirectUrl });
    res.end();
}

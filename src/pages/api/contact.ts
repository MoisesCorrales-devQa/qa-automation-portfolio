import type { NextApiRequest, NextApiResponse } from "next";

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const { name, email, message, website } = req.body ?? {};

    // Honeypot
    if (website && website.trim() !== "") {
        return res.status(200).json({ ok: true });
    }

    // Validación backend
    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof message !== "string" ||
        name.trim().length < 3 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        message.trim().length < 3
    ) {
        return res.status(400).json({ error: "Invalid input" });
    }

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });
        if (response.ok) {
            return res.status(200).json({ ok: true });
        } else {
            return res.status(500).json({ error: "Mail sending failed" });
        }
    } catch (err) {
        return res.status(500).json({ error: "Mail sending failed" + err});
    }
}
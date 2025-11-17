import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const { code } = req.query || {};

  if (!code) {
    res.status(400).json({ error: "Missing code" });
    return;
  }

  const data = await kv.get(`link:${code}`);

  if (!data) {
    res.status(404).json({ error: "Not found" });
    return;
  }

  res.status(200).json(data);
}

import { kv } from "@vercel/kv";

const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function generateCode(length = 4) {
  let out = "";
  for (let i = 0; i < length; i++) {
    out += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return out;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const data = req.body;

  if (!data || !data.message) {
    res.status(400).json({ error: "Missing data.message" });
    return;
  }

  // Générer un code unique
  let code;
  while (true) {
    code = generateCode(4);
    const exists = await kv.get(`link:${code}`);
    if (!exists) break;
  }

  // Stocker les données (expire après 7 jours)
  await kv.set(`link:${code}`, data, { ex: 60 * 60 * 24 * 7 });

  const url = `https://${req.headers.host}/i/${code}`;

  res.status(200).json({ code, url });
}

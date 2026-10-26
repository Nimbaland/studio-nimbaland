import { NextResponse } from "next/server";
import { confirm, readToken } from "@/lib/newsletter";
import { asset } from "@/lib/base";

export const dynamic = "force-dynamic";
export async function GET(req: Request) {
  const url = new URL(req.url);
  const data = readToken(url.searchParams.get("t") ?? "");
  const locale = data?.locale ?? "de";
  const to = (s: string) => NextResponse.redirect(new URL(asset(`/${locale}/newsletter?status=${s}`), url.origin), 303);
  if (!data) return to("invalid");
  try { return to((await confirm(data.email)) ? "confirmed" : "invalid"); }
  catch (e) { console.error("[newsletter confirm]", e); return to("error"); }
}

"use client";

import { useEffect, useState } from "react";

/** Live-Uhrzeit für Düsseldorf (Europe/Berlin), inkl. GMT-Offset. */
export function LocalTime({ locale }: { locale: string }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 15000);
    return () => window.clearInterval(id);
  }, []);
  if (!now) return <span className="tabular-nums">--:--</span>;
  const time = new Intl.DateTimeFormat(locale === "de" ? "de-DE" : "en-GB", {
    hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin",
  }).format(now);
  const offset = new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Berlin", timeZoneName: "shortOffset" })
    .formatToParts(now).find((p) => p.type === "timeZoneName")?.value ?? "";
  return <span className="tabular-nums">({offset}) {time}</span>;
}

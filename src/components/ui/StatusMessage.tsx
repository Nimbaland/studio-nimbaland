import type { ReactNode } from "react";

type Props = { tone: "success" | "error" | "info"; children: ReactNode; id?: string };

/** Rückmeldung nach Aktionen. role="status" bzw. "alert" für Screenreader. */
export function StatusMessage({ tone, children, id }: Props) {
  return (
    <div id={id} className={`status status--${tone}`} role={tone === "error" ? "alert" : "status"}>
      <div>{children}</div>
    </div>
  );
}

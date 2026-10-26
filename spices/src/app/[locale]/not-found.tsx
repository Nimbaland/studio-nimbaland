import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap pagehead">
      <h1>404</h1>
      <p className="lead" lang="de">Diese Seite gibt es nicht.</p>
      <p className="lead" lang="en">This page doesn’t exist.</p>
      <div className="btnrow"><Link className="btn primary" href="/de">Startseite</Link><Link className="btn ghost" href="/en">Home</Link></div>
    </div>
  );
}

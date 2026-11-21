import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">This page doesn&apos;t exist.</h1>
      <Link className="not-found__link" href="/">
        back to home
      </Link>
    </main>
  );
}

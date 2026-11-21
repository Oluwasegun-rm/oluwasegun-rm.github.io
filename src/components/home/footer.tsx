import { profile } from "@/lib/content/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Footer() {
  return (
    <footer className="footer">
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <span className="footer__end">
        <span>
          {profile.place} · {new Date().getFullYear()}
        </span>
        <ThemeToggle />
      </span>
    </footer>
  );
}

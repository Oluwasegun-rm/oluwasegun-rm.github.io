import { profile } from "@/lib/content/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const updated = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "America/New_York",
})
  .format(new Date())
  .toLowerCase();

export function Footer() {
  return (
    <footer className="footer">
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <span className="footer__end">
        <span>
          {profile.place} · updated {updated}
        </span>
        <ThemeToggle />
      </span>
    </footer>
  );
}

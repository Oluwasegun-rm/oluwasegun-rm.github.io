import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { links, profile } from "@/lib/content/site";
import { SmartLink } from "@/components/ui/smart-link";

export function Intro() {
  return (
    <header className="intro">
      <Image
        className="intro__photo"
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        width={72}
        height={72}
        priority
      />
      <div>
        <h1 className="intro__name">{profile.name}</h1>
        <p className="intro__role">
          {profile.role} · {profile.place}
        </p>
      </div>
      <p className="intro__tagline">{profile.tagline}</p>
      <dl className="intro__facts">
        {profile.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
      <nav className="intro__links" aria-label="Profiles and contact">
        {links.map((link) => (
          <SmartLink key={link.label} href={link.href}>
            <HugeiconsIcon icon={link.icon} size={15} strokeWidth={1.5} aria-hidden="true" />
            {link.label}
          </SmartLink>
        ))}
      </nav>
      <p className="intro__now">
        <span className="intro__now-label">
          <span className="intro__pulse" aria-hidden="true" />
          now
        </span>
        <span>
          {profile.now}
          <span className="intro__sep" aria-hidden="true">
            ·
          </span>
          <span className="intro__interests">into {profile.interests}</span>
        </span>
      </p>
      <p className="intro__now intro__now--open">
        <span className="intro__now-label intro__now-label--open">open to</span>
        <span>
          {profile.openTo}
          <span className="intro__sep" aria-hidden="true">
            ·
          </span>
          <span className="intro__interests">{profile.openToLater}</span>
        </span>
      </p>
    </header>
  );
}

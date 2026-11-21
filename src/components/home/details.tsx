import { honors, skills } from "@/lib/content/site";
import { Section } from "@/components/ui/section";

export function HonorsSection() {
  return (
    <Section id="honors" title="honors">
      <dl className="pairs">
        {honors.map((honor) => (
          <div key={honor.title}>
            <dt>{honor.year}</dt>
            <dd>{honor.title}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" title="skills">
      <dl className="pairs">
        {skills.map((group) => (
          <div key={group.label}>
            <dt>{group.label}</dt>
            <dd>{group.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

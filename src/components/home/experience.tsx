import { experience } from "@/lib/content/site";
import { Row } from "@/components/ui/row";
import { Section } from "@/components/ui/section";

export function ExperienceSection() {
  return (
    <Section id="experience" title="experience">
      {experience.map((item) => (
        <Row key={`${item.org}-${item.start}`} year={item.start.slice(0, 4)}>
          <h3 className="row__title">
            <span className="row__org">{item.org}</span>
            <span className="row__dash"> — </span>
            {item.role}
          </h3>
          <ul className="row__points">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="row__meta">
            {item.when} · {item.where}
            {item.team ? ` · ${item.team}` : ""}
          </p>
        </Row>
      ))}
    </Section>
  );
}

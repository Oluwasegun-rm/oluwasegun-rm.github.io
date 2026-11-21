import { experience } from "@/lib/content/site";
import { Row } from "@/components/ui/row";
import { Section } from "@/components/ui/section";

export function ExperienceSection() {
  const ordered = [...experience].sort((a, b) => b.start.localeCompare(a.start));

  return (
    <Section id="experience" title="experience">
      {ordered.map((item) => (
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
          </p>
        </Row>
      ))}
    </Section>
  );
}

import { publications } from "@/lib/content/site";
import { Row } from "@/components/ui/row";
import { Section } from "@/components/ui/section";
import { SmartLink } from "@/components/ui/smart-link";

export function PublicationsSection() {
  return (
    <Section id="publications" title="publications">
      {publications.map((paper) => (
        <Row key={paper.href} year={paper.year}>
          {paper.award ? <p className="row__award">{paper.award}</p> : null}
          <h3 className="row__title">
            <SmartLink className="row__link" href={paper.href}>
              {paper.title}
            </SmartLink>
          </h3>
          <p className="row__meta row__meta--tight">{paper.venue}</p>
          <dl className="figures">
            {paper.figures.map((figure) => (
              <div key={figure.label}>
                <dt>{figure.label}</dt>
                <dd>{figure.value}</dd>
              </div>
            ))}
          </dl>
        </Row>
      ))}
    </Section>
  );
}

import { projects } from "@/lib/content/site";
import { Row } from "@/components/ui/row";
import { Section } from "@/components/ui/section";
import { SmartLink } from "@/components/ui/smart-link";

export function ProjectsSection() {
  return (
    <Section id="projects" title="projects">
      {projects.map((project) => (
        <Row key={project.name} year={project.year}>
          <h3 className="row__title">
            {project.href ? (
              <SmartLink className="row__link" href={project.href}>
                {project.name}
              </SmartLink>
            ) : (
              project.name
            )}
            <span className="row__badge">{project.badge}</span>
          </h3>
          <p className="row__meta row__meta--stack">{project.stack}</p>
          <p>{project.description}</p>
        </Row>
      ))}
    </Section>
  );
}

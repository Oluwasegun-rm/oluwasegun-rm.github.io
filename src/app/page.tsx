import { Intro } from "@/components/home/intro";
import { ExperienceSection } from "@/components/home/experience";
import { PublicationsSection } from "@/components/home/publications";
import { ProjectsSection } from "@/components/home/projects";
import { HonorsSection, SkillsSection } from "@/components/home/details";
import { Footer } from "@/components/home/footer";
import { links, profile, siteUrl } from "@/lib/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  email: `mailto:${profile.email}`,
  jobTitle: "Software Engineer and AI/ML Researcher",
  alumniOf: { "@type": "CollegeOrUniversity", name: "Morgan State University" },
  sameAs: links.filter((link) => link.href.startsWith("http")).map((link) => link.href),
};

export default function HomePage() {
  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Intro />
      <ExperienceSection />
      <PublicationsSection />
      <ProjectsSection />
      <HonorsSection />
      <SkillsSection />
      <Footer />
    </main>
  );
}

import { SectionHeading } from "./SectionHeading";
import { projects } from "@/data/projects";
import { ProjectTile } from "./ProjectTile";

export function ProjectsSection() {
  return (
    <section id="products" className="scroll-mt-24 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <SectionHeading title="ХЭРЭГЖҮҮЛСЭН ТӨСӨЛ ХӨТӨЛБӨРҮҮД" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.slice(0, 4).map((p) => (
            <ProjectTile
              key={p.title}
              title={p.title}
              imageSrc={p.imageSrc}
              imageAlt={p.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectDetail } from "@/components/ProjectDetail";

interface Params {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}



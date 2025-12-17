import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectDetail } from "@/components/ProjectDetail";

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Params) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}



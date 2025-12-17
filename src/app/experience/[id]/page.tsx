import { notFound } from "next/navigation";
import { experiences } from "@/data/experience";
import { ExperienceDetail } from "@/components/ExperienceDetail";

interface Params {
  params: Promise<{ id: string }>;
}

export default async function ExperienceDetailPage({ params }: Params) {
  const resolvedParams = await params;
  const experience = experiences.find((exp) => exp.id === resolvedParams.id);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetail experience={experience} />;
}



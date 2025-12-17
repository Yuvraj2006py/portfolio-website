import { notFound } from "next/navigation";
import { experiences } from "@/data/experience";
import { ExperienceDetail } from "@/components/ExperienceDetail";

interface Params {
  params: { id: string };
}

export default function ExperienceDetailPage({ params }: Params) {
  const experience = experiences.find((exp) => exp.id === params.id);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetail experience={experience} />;
}



import { notFound } from "next/navigation";
import { reports } from "@/data/reports";
import { ReportDetail } from "@/components/ReportDetail";

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function ReportDetailPage({ params }: Params) {
  const resolvedParams = await params;
  const report = reports.find((r) => r.slug === resolvedParams.slug);

  if (!report) {
    notFound();
  }

  return <ReportDetail report={report} />;
}



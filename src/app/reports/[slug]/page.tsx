import { notFound } from "next/navigation";
import { reports } from "@/data/reports";
import { ReportDetail } from "@/components/ReportDetail";

interface Params {
  params: { slug: string };
}

export default function ReportDetailPage({ params }: Params) {
  const report = reports.find((r) => r.slug === params.slug);

  if (!report) {
    notFound();
  }

  return <ReportDetail report={report} />;
}



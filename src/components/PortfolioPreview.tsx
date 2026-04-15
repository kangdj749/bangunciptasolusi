import { getPortfolios } from "@/lib/portfolio";
import type { Portfolio } from "@/types/portfolio";
import PortfolioPreviewUI from "./PortfolioPreviewUI";

// ==============================
// SERVER COMPONENT
// ==============================
export default async function PortfolioPreview() {
  const projects: Portfolio[] = await getPortfolios();

  const sliced = projects.slice(0, 6); // homepage limit

  return <PortfolioPreviewUI projects={sliced} />;
}
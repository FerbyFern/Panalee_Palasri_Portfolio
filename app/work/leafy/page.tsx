import type { Metadata } from "next";
import CaseStudyLeafy from "../../../components/CaseStudyLeafy";

export const metadata: Metadata = {
  title: "Leafy Case Study — Panalee Palasri",
  description:
    "Full UX process for Leafy — an adaptive e-commerce & knowledge hub for plant enthusiasts.",
};

export default function LeafyCaseStudy() {
  return <CaseStudyLeafy />;
}

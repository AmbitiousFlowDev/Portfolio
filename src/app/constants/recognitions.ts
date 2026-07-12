export interface RecognitionItem {
  name: string;
  organization: string;
  period: string;
}

export const recognitionItems: RecognitionItem[] = [
  {
    name: "Open Source Contributions",
    organization: "GitHub · 16 Public Repositories",
    period: "2022 - Present",
  },
  {
    name: "Multi-language Development",
    organization: "6 Programming Languages Mastered",
    period: "2022 - Present",
  },
  {
    name: "Machine Learning Research",
    organization: "Genomics & Biomedical ML",
    period: "2025 - 2026",
  },
  {
    name: "Systems Architecture Design",
    organization: "P2P & Cloud-Native Platforms",
    period: "2023 - 2026",
  },
] as const;

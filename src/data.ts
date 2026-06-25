export const INSTAGRAM_URL =
  "https://www.instagram.com/rampstattoo?igsh=MTRrcGZhMG9rOGViZQ%3D%3D";

export type Category = "Lettering" | "Blackwork" | "Flash" | "Projetos";

export interface Work {
  src: string;
  title: string;
  category: Category;
  /** rough aspect ratio for masonry, "tall" | "wide" | "square" */
  ratio: "tall" | "wide" | "square";
}

export const works: Work[] = [
  {
    src: "/images/work-red-mandala.jpg",
    title: "Mandala Calligraffiti",
    category: "Projetos",
    ratio: "tall",
  },
  {
    src: "/images/work-arm.jpg",
    title: "Braço",
    category: "Lettering",
    ratio: "tall",
  },
  {
    src: "/images/work-back.jpg",
    title: "Mãos",
    category: "Blackwork",
    ratio: "tall",
  },
  {
    src: "/images/work-sketch.jpg",
    title: "Ombros",
    category: "Lettering",
    ratio: "wide",
  },
  {
    src: "/images/work-leg.jpg",
    title: "Chicano Script",
    category: "Lettering",
    ratio: "tall",
  },
  {
    src: "/images/work-head.jpg",
    title: "Respect — Head",
    category: "Lettering",
    ratio: "square",
  },
  {
    src: "/images/work-stomach.jpg",
    title: "Costas",
    category: "Lettering",
    ratio: "wide",
  },
  {
    src: "/images/work-neck.jpg",
    title: "Pescoço",
    category: "Lettering Blackwork",
    ratio: "tall",
  },
  {
    src: "/images/work-eye-mandala.jpg",
    title: "Vortex Mural",
    category: "Projetos",
    ratio: "tall",
  },
];

export const featured: Work[] = [
  works[2], // Respect head
  works[6], // red mandala
  works[7], // chicano leg
];

import type { ComponentType } from "svelte";

export interface ProjectProps {
  name: string;
  description: string;
  link?: string;
  icons: ComponentType[];
}

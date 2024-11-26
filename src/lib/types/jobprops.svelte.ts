import type { ComponentType } from "svelte";

export interface JobProps {
  name: string;
  date: string;
  role: string;
  description: string;
  icons: ComponentType[];
}

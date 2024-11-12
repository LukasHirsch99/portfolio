import type { ComponentType } from "svelte";

export interface JobProps {
  name: string;
  date: string;
  location: string;
  description: string;
  icons: ComponentType[];
}

import type { ComponentType, SvelteComponent } from "svelte";

export interface JobProps {
  name: string;
  date: string;
  location: string;
  icons: {
    src: ComponentType;
    size: number;
  }[];
}

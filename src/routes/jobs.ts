import type { JobProps } from "$lib/types/jobprops.svelte";

import Vue from "../assets/vue.svelte"
import Git from "../assets/git.svelte"
import CSharp from "../assets/csharp.svelte"
import Azure from "../assets/azure.svelte"
import Blazor from "../assets/blazor.svelte"

export const jobs: JobProps[] = [
  {
    name: "Software Engineer @Kappa FS",
    date: "April - August 2024",
    location: "Steyr - Austria",
    icons: [
      {
        src: CSharp,
        size: 25
      },
      {
        src: Git,
        size: 25
      },
      {
        src: Azure,
        size: 25
      },
      {
        src: Blazor,
        size: 25
      },
    ],
  },
  {
    name: "Software Engineer @Austrian Armed Forces",
    date: "January - April 2024",
    location: "Linz - Austria",
    icons: [
      {
        src: Vue,
        size: 25
      },
      {
        src: Git,
        size: 25
      },
    ],
  },
];

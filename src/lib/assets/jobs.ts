import type { JobProps } from "$lib/types/jobprops.svelte";

import Vue from "$lib/assets/vue.svelte"
import Git from "$lib/assets/git.svelte"
import CSharp from "$lib/assets/csharp.svelte"
import Azure from "$lib/assets/azure.svelte"
import Blazor from "$lib/assets/blazor.svelte"
import Spring from "$lib/assets/spring.svelte"

export const jobs: JobProps[] = [
  {
    name: "Kappa FS",
    date: "April - August 2024",
    role: "Software Engineer Intern",
    description: "Web Design, Web Development, Blazor, C#",
    icons: [
      Git,
      Azure,
      CSharp,
      Blazor,
    ],
  },
  {
    name: "Austrian Armed Forces",
    date: "January - April 2024",
    role: "Fullstack Developer",
    description: "Web- & Backend Development, VueJs, Spring Boot, PostgreSQL",
    icons: [
      Git,
      Vue,
      Spring,
    ],
  },
  {
    name: "Kappa FS",
    date: "July - August 2022",
    role: "Software Engineer Intern",
    description: "Diploma",
    icons: [
      Git,
      Azure,
    ],
  },
  {
    name: "Kappa FS",
    date: "July - August 2021",
    role: "Software Engineer Intern",
    description: "Motor controller over mqtt and modbus-rtu",
    icons: [
      Git,
      Azure,
    ],
  },
];

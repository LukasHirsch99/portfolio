import type { JobProps } from "$lib/types/jobprops.svelte";

import Vue from "$lib/assets/icons/vue.svelte"
import Git from "$lib/assets/icons/git.svelte"
import CSharp from "$lib/assets/icons/csharp.svelte"
import Azure from "$lib/assets/icons/azure.svelte"
import Blazor from "$lib/assets/icons/blazor.svelte"
import Spring from "$lib/assets/icons/spring.svelte"
import Arduino from "$lib/assets/icons/arduino.svelte"

export const jobs: JobProps[] = [
  {
    name: "Kappa FS",
    date: "April - August 2024",
    role: "Software Engineer Intern",
    description: "Integrated a dashboard into an existing Blazor web application for monitoring and managing Azure IoT-Edge devices",
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
    description: "Developed a time management system for scheduling and workflow management of professional athletes",
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
    description: "Developed an analog sensor device for remote monitoring of existing filter systems as part of a diploma project",
    icons: [
      Git,
      Azure,
    ],
  },
  {
    name: "Kappa FS",
    date: "July - August 2021",
    role: "Software Engineer Intern",
    description: "Designed and implemented a remote control solution for an electric fan system",
    icons: [
      Git,
      Azure,
      Arduino
    ],
  },
];

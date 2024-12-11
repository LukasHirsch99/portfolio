import type { ProjectProps } from "$lib/types/projectprops.svelte";

import Go from "$lib/assets/icons/go.svelte"
import Flutter from "$lib/assets/icons/flutter.svelte"
import Python from "$lib/assets/icons/python.svelte"
import Spring from "$lib/assets/icons/spring.svelte"
import React from "$lib/assets/icons/postrgesql.svelte"
import Psql from "$lib/assets/icons/react.svelte"
import Git from "$lib/assets/icons/git.svelte"
import Svelte from "$lib/assets/icons/svelte.svelte"

export const projects: ProjectProps[] = [
  {
    name: "Swim Results",
    description: "Mobile app to browse starts and results for swim events.",
    link: "https://github.com/LukasHirsch99/SwimResults",
    icons: [
      Python,
      Go,
      Flutter,
    ],
  },
  {
    name: "This Website",
    description: "My Personal Website",
    link: "https://github.com/LukasHirsch99/portfolio",
    icons: [
      Git,
      Svelte,
    ],
  },
  {
    name: "Python Trading Bot",
    description: "Python-based trading bot with KuCoin API.",
    icons: [
      Python,
    ],
  },
  {
    name: "Clicky Counter",
    description: "Simple Life Counter for Magic The Gathering",
    icons: [
      Flutter,
    ],
  },
  {
    name: "Event Planner",
    description: "Knowledge Sharing / Event Planning Website for Teachers",
    icons: [
      Spring,
      React,
      Psql
    ],
  },
];

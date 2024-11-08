<script lang="ts">
  import JobCard from "$lib/components/job-card.svelte";
  import { Separator } from "$lib/components/ui/separator";
  import { jobs } from "./jobs";
</script>

<h1 class="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
  I'm Lukas Hirsch
</h1>


<h3
  class="pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0"
>
  Software Developer <br />
  Based in Austria
</h3>

<h2 class="text-2xl font-bold">Expirience</h2>

<Separator class="mb-4 mt-1" />

{#each jobs as job}
  <JobCard {...job} />
{/each}


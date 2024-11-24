<script lang="ts">
  import JobCard from "$lib/components/job-card/job-card.svelte";
  import { jobs } from "./jobs";
  import picture from "$lib/assets/squareCrop.jpg";
  import Map from "$lib/assets/map.svelte";
</script>

<div
  class="bg-[#7748B9] size-64 rounded-full blur-[120px] z-[-1] absolute top-10 left-40"
></div>
<div
  class="bg-[#9D4790] size-64 rounded-full blur-[120px] z-[-1] absolute top-[40rem] right-40"
></div>

<div class="flex flex-col gap-3 mx-12">
  <div>
    <h1 class="font-outfit font-semibold text-3xl lg:text-5xl">
      Hey, <br />
      I'm
      <div
        class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#CA3995] to-[#8053E1]"
      >
        Lukas Hirsch
      </div>
    </h1>

    <h3 class="pb-2 text-xl font-semibold">Software Developer</h3>
  </div>

  <img src={picture} class="rounded-full size-36" alt="" />

  <div class="flex flex-col items-start">
    <h3 class="pb-2 text-xl font-outfit text-end">Based in Austria 🇦🇹</h3>
    <Map />
  </div>
</div>

<h2 class="text-3xl font-outfit font-semibold mt-12">Experience</h2>

{#each jobs as job}
  <JobCard {...job} />
{/each}

<style>
  div {
    outline: 1px solid transparent;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0);
    will-change: transform;
    -webkit-perspective: 1000;
    perspective: 1000;
  }
</style>

<script lang="ts">
  import JobCard from "$lib/components/job-card/job-card.svelte";
  import { jobs } from "./jobs";
  import picture from "$lib/assets/squareCrop.jpg";
  import Map from "$lib/assets/map.svelte";
</script>

<div
  class="overflow-hidden bg-[#7748B9] size-64 rounded-full blur-[120px] z-[-1] absolute top-10 left-40"
></div>
<div
  class="overflow-hidden bg-[#9D4790] size-64 rounded-full blur-[120px] z-[-1] absolute top-[40rem] right-40"
></div>

<div
  class="mt-10 flex flex-row flex-wrap items-center justify-center gap-3 sm:justify-around"
>
  <div>
    <h1 class="font-outfit font-semibold text-3xl">
      Hey, <span class="animate-wave inline-block">👋</span> <br />
      I'm
      <p
        class="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#CA3995] to-[#8053E1]"
      >
        Lukas Hirsch
      </p>
    </h1>

    <h3 class="pb-2 text-xl font-semibold">Software Developer</h3>
  </div>

  <img src={picture} class="rounded-full size-52" alt="" />

  <div class="flex flex-col">
    <h3 class="pb-2 text-xl font-outfit text-center">Based in Austria 🇦🇹</h3>
    <Map />
  </div>
</div>

<h2 class="text-3xl font-outfit font-semibold mt-12">Experience</h2>

{#each jobs as job}
  <JobCard {...job} />
{/each}

<style>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }

  .animate-wave:hover {
    animation: spin 2.5s ease-in-out infinite;
    transform-origin: 70% 70%;
  }

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

<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/navbar.svelte";
  import { ModeWatcher } from "mode-watcher";

  let { children } = $props();
</script>

<svelte:head>
  <title>Lukas Hirsch</title>
</svelte:head>

<ModeWatcher />
<Navbar />
<div class="mx-[10%] md:mx-[15%] lg:mx-[20%]">
  {@render children()}
</div>

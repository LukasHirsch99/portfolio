<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/navbar.svelte';


  import { ModeWatcher } from "mode-watcher";

	let { children } = $props();
</script>


<ModeWatcher />
<div class="mx-[10%] md:mx-[15%] lg:mx-[20%]">
  <Navbar />
  {@render children()}
</div>

<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/navbar.svelte';


  import { ModeWatcher } from "mode-watcher";

	let { children } = $props();
</script>


<ModeWatcher />
<div class="mx-4 md:mx-80">
  <Navbar />
  {@render children()}
</div>
